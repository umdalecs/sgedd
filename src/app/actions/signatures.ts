"use server";

import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { FirmaInsert } from "@/lib/supabase/database.types";

export interface SignatureResult {
  success: boolean;
  error?: string;
  data?: unknown;
}

export async function getUserSignatures(): Promise<SignatureResult> {
  const supabase = await getSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "User not authenticated" };
  }

  const { data, error } = await supabase
    .from("firmas")
    .select("*")
    .eq("usuario_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

export async function getActiveUserSignatures(): Promise<SignatureResult> {
  const supabase = await getSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "User not authenticated" };
  }

  const { data, error } = await supabase
    .from("firmas")
    .select("*")
    .eq("usuario_id", user.id)
    .eq("activa", true)
    .order("created_at", { ascending: false });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

export async function getActiveSignature(): Promise<SignatureResult> {
  const supabase = await getSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "User not authenticated" };
  }

  const { data, error } = await supabase
    .from("firmas")
    .select("*")
    .eq("usuario_id", user.id)
    .eq("activa", true)
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

export async function createSignature(
  firmaBase64: string,
  tipo: string = "digital"
): Promise<SignatureResult> {
  const supabase = await getSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "User not authenticated" };
  }

  // Deactivate previous signatures
  await supabase
    .from("firmas")
    .update({ activa: false, updated_at: new Date().toISOString() })
    .eq("usuario_id", user.id);

  const insertData: FirmaInsert = {
    usuario_id: user.id,
    firma_base64: firmaBase64,
    tipo,
    activa: true,
  };

  const { data, error } = await supabase
    .from("firmas")
    .insert(insertData)
    .select()
    .single();

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

export async function deleteSignature(id: string): Promise<SignatureResult> {
  const supabase = await getSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "User not authenticated" };
  }

  const { error } = await supabase
    .from("firmas")
    .update({ activa: false, updated_at: new Date().toISOString() })
    .eq("id", id)
    .eq("usuario_id", user.id);

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function setActiveSignature(id: string): Promise<SignatureResult> {
  const supabase = await getSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "User not authenticated" };
  }

  // Deactivate all other signatures
  await supabase
    .from("firmas")
    .update({ activa: false, updated_at: new Date().toISOString() })
    .eq("usuario_id", user.id)
    .neq("id", id);

  // Activate the selected signature
  const { data, error } = await supabase
    .from("firmas")
    .update({ activa: true, updated_at: new Date().toISOString() })
    .eq("id", id)
    .eq("usuario_id", user.id)
    .select()
    .single();

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}
