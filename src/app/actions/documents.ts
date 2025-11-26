"use server";

import { getSupabaseServerClient } from "@/lib/supabase/server";
import type {
  DocumentoInsert,
  DocumentoUpdate,
  EstadoDocumento,
  TipoDocumento,
} from "@/lib/supabase/database.types";

export interface DocumentResult {
  success: boolean;
  error?: string;
  data?: unknown;
}

export async function getDocuments(): Promise<DocumentResult> {
  const supabase = await getSupabaseServerClient();

  const { data, error } = await supabase
    .from("documentos")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

export async function getDocumentById(id: string): Promise<DocumentResult> {
  const supabase = await getSupabaseServerClient();

  const { data, error } = await supabase
    .from("documentos")
    .select("*, plantillas_documento(*)")
    .eq("id", id)
    .single();

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

export async function getDocumentsBySolicitante(
  solicitanteId: string
): Promise<DocumentResult> {
  const supabase = await getSupabaseServerClient();

  const { data, error } = await supabase
    .from("documentos")
    .select("*")
    .eq("solicitante_id", solicitanteId)
    .order("created_at", { ascending: false });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

export async function getDocumentsByEstado(
  estado: EstadoDocumento
): Promise<DocumentResult> {
  const supabase = await getSupabaseServerClient();

  const { data, error } = await supabase
    .from("documentos")
    .select("*, usuarios!documentos_solicitante_id_fkey(*)")
    .eq("estado", estado)
    .order("created_at", { ascending: false });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

export async function createDocument(document: {
  plantilla_id?: string;
  nombre: string;
  tipo: TipoDocumento;
  solicitante_id: string;
  contenido_generado?: string;
}): Promise<DocumentResult> {
  const supabase = await getSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const insertData: DocumentoInsert = {
    plantilla_id: document.plantilla_id || null,
    nombre: document.nombre,
    tipo: document.tipo,
    estado: "pendiente",
    solicitante_id: document.solicitante_id,
    generador_id: user?.id || null,
    contenido_generado: document.contenido_generado || null,
  };

  const { data, error } = await supabase
    .from("documentos")
    .insert(insertData)
    .select()
    .single();

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

export async function updateDocumentEstado(
  id: string,
  estado: EstadoDocumento,
  revisorId?: string
): Promise<DocumentResult> {
  const supabase = await getSupabaseServerClient();

  const updates: DocumentoUpdate = {
    estado,
    updated_at: new Date().toISOString(),
  };

  if (revisorId) {
    updates.revisor_id = revisorId;
  }

  const { data, error } = await supabase
    .from("documentos")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

export async function signDocument(
  id: string,
  firmaDigital: string
): Promise<DocumentResult> {
  const supabase = await getSupabaseServerClient();

  const { data, error } = await supabase
    .from("documentos")
    .update({
      estado: "firmado" as EstadoDocumento,
      firma_digital: firmaDigital,
      fecha_firma: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

export async function generateDocumentFromTemplate(
  templateId: string,
  solicitanteId: string,
  campos: Record<string, string>
): Promise<DocumentResult> {
  const supabase = await getSupabaseServerClient();

  // Get the template
  const { data: template, error: templateError } = await supabase
    .from("plantillas_documento")
    .select("*")
    .eq("id", templateId)
    .single();

  if (templateError || !template) {
    return { success: false, error: "Template not found" };
  }

  // Replace dynamic fields in the template
  let contenidoGenerado = template.contenido_html;
  for (const [key, value] of Object.entries(campos)) {
    contenidoGenerado = contenidoGenerado.replace(
      new RegExp(`{{${key}}}`, "g"),
      value
    );
  }

  // Create the document
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const insertData: DocumentoInsert = {
    plantilla_id: templateId,
    nombre: template.nombre,
    tipo: template.tipo,
    estado: "pendiente",
    solicitante_id: solicitanteId,
    generador_id: user?.id || null,
    contenido_generado: contenidoGenerado,
  };

  const { data, error } = await supabase
    .from("documentos")
    .insert(insertData)
    .select()
    .single();

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

export async function getPendingDocumentsForRevisor(): Promise<DocumentResult> {
  const supabase = await getSupabaseServerClient();

  const { data, error } = await supabase
    .from("documentos")
    .select("*, usuarios!documentos_solicitante_id_fkey(*)")
    .in("estado", ["pendiente", "en_revision"])
    .order("created_at", { ascending: true });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

export async function getPendingDocumentsForSignature(): Promise<DocumentResult> {
  const supabase = await getSupabaseServerClient();

  const { data, error } = await supabase
    .from("documentos")
    .select("*, usuarios!documentos_solicitante_id_fkey(*)")
    .eq("estado", "aprobado")
    .is("firma_digital", null)
    .order("created_at", { ascending: true });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}
