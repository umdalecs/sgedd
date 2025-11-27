"use server";

import { getSupabaseCookiesClient } from "@/lib/supabase/clients";
import { redirect } from "next/navigation";
import { RegisterSchema } from "../schemas/authSchemas";
import { z } from "zod";

export interface LoginFormData {
  email: string;
  password: string;
}

export interface AuthResult {
  success: boolean;
  error?: string;
}

export async function login(formData: LoginFormData): Promise<AuthResult> {
  const supabase = await getSupabaseCookiesClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  redirect("/dashboard");
}

export async function register(values: z.infer<typeof RegisterSchema>) {
  const supabase = await getSupabaseCookiesClient();

  // Buscar en la tabla de usuarios
  // si existe una tupla donde coincida el rfc

  console.log(values)

  const { data: user, error: err1 } = await supabase
    .from("usuarios")
    .select("*")
    .or(`docente_rfc.eq.${values.rfc},generador_rfc.eq.${values.rfc},revisor_rfc.eq.${values.rfc}`)
    .single();

  if (err1) {
    console.log(err1)
    return { success: false, error: err1.message };
  }

  // TODO: Si es docente y no cumple los requisitos de registro,
  // no se permite el registro

  return { success: false, error: "No cumples los requisitos para inscribirte en SGEDD" };

  
  // Crear el usuario en SupabaseAuth
  const {
    data: { user: supabaseUser },
    error: err2,
  } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
  });
  
  if (err2) {
    console.log(err2)

    return { success: false, error: err2.message };
  }

  // Agrega la relación entre el rol y
  // el usuario de supabase auth
  user.supabase_user = supabaseUser!.id;

  const { error: err3 } = await supabase
    .from("usuarios")
    .upsert(user);

    if (err3) {
      console.log(err3)
    return { success: false, error: err3.message };
  }

  redirect("/dashboard");
}

export async function logout(): Promise<void> {
  const supabase = await getSupabaseCookiesClient();
  await supabase.auth.signOut();
  redirect("/");
}

export async function getCurrentUser() {
  const supabase = await getSupabaseCookiesClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  // Get user profile from role table
  const { data: profile } = await supabase
    .from("usuarios")
    .select("*")
    .eq("supabase_user", user.id)
    .single();

  let rfc = "";

  switch (profile.rol) {
    case "docente":
      rfc = profile.docente_rfc;
      break;
    case "generador":
      rfc = profile.generador_rfc;
      break;

    case "revisor":
      rfc = profile.revisor_rfc;
      break;
  }

  const { data: role } = await supabase
    .from(profile.rol)
    .select("*")
    .eq("rfc", rfc)
    .single();

  return {
    ...user,
    ...profile,
    ...role
  };
}

// TODO: No considerado prioridad
// export async function updateUserProfile(
//   userId: string,
//   updates: {
//     nombre?: string;
//     apellido?: string;
//     rfc?: string;
//     puesto?: string;
//     rol?: Rol;
//     estatus_plaza?: string;
//   }
// ): Promise<AuthResult> {
//   const supabase = await getSupabaseCookiesClient();

//   const { error } = await supabase
//     .from("usuarios")
//     .update({
//       ...updates,
//       updated_at: new Date().toISOString(),
//     })
//     .eq("id", userId);

//   if (error) {
//     return { success: false, error: error.message };
//   }

//   return { success: true };
// }

// TODO: No considerado prioridad
// export async function resetPassword(email: string): Promise<AuthResult> {
//   const supabase = await getSupabaseCookiesClient();

//   const { error } = await supabase.auth.resetPasswordForEmail(email, {
//     redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard/change-password`,
//   });

//   if (error) {
//     return { success: false, error: error.message };
//   }

//   return { success: true };
// }

// TODO: No considerado prioridad
// export async function updatePassword(newPassword: string): Promise<AuthResult> {
//   const supabase = await getSupabaseCookiesClient();

//   const { error } = await supabase.auth.updateUser({
//     password: newPassword,
//   });

//   if (error) {
//     return { success: false, error: error.message };
//   }

//   return { success: true };
// }
