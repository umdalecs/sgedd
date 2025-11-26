"use server";

import { getSupabaseServerClient } from "@/lib/supabase/server";
import type {
  PlantillaDocumentoInsert,
  PlantillaDocumentoUpdate,
  TipoDocumento,
} from "@/lib/supabase/database.types";

export interface TemplateResult {
  success: boolean;
  error?: string;
  data?: unknown;
}

export async function getTemplates(): Promise<TemplateResult> {
  const supabase = await getSupabaseServerClient();

  const { data, error } = await supabase
    .from("plantillas_documento")
    .select("*")
    .eq("activo", true)
    .order("created_at", { ascending: false });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

export async function getTemplateById(id: string): Promise<TemplateResult> {
  const supabase = await getSupabaseServerClient();

  const { data, error } = await supabase
    .from("plantillas_documento")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

export async function createTemplate(
  template: {
    nombre: string;
    tipo: TipoDocumento;
    descripcion?: string;
    contenido_html: string;
    campos_dinamicos?: string[];
  }
): Promise<TemplateResult> {
  const supabase = await getSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const insertData: PlantillaDocumentoInsert = {
    nombre: template.nombre,
    tipo: template.tipo,
    descripcion: template.descripcion || null,
    contenido_html: template.contenido_html,
    campos_dinamicos: template.campos_dinamicos || [],
    activo: true,
    created_by: user?.id || null,
  };

  const { data, error } = await supabase
    .from("plantillas_documento")
    .insert(insertData)
    .select()
    .single();

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

export async function updateTemplate(
  id: string,
  updates: PlantillaDocumentoUpdate
): Promise<TemplateResult> {
  const supabase = await getSupabaseServerClient();

  const { data, error } = await supabase
    .from("plantillas_documento")
    .update({
      ...updates,
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

export async function deleteTemplate(id: string): Promise<TemplateResult> {
  const supabase = await getSupabaseServerClient();

  // Soft delete by setting activo to false
  const { error } = await supabase
    .from("plantillas_documento")
    .update({ activo: false, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function getTemplatesByType(
  tipo: TipoDocumento
): Promise<TemplateResult> {
  const supabase = await getSupabaseServerClient();

  const { data, error } = await supabase
    .from("plantillas_documento")
    .select("*")
    .eq("tipo", tipo)
    .eq("activo", true)
    .order("nombre", { ascending: true });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}
