"use server";

import { getSupabaseCookiesClient } from "@/lib/supabase/clients";
import { redirect } from "next/navigation";
import type { Rol } from "@/types/usuario";

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  email: string;
  password: string;
  rfc: string;
  rol: Rol;
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

export async function register(
  formData: RegisterFormData
): Promise<AuthResult> {
  const supabase = await getSupabaseCookiesClient();

  // Buscar en la tabla del rol
  // si existe una tupla donde coincida el rfc
  const { data: user, error: err1 } = await supabase
    .from(formData.rol)
    .select("*")
    .eq("rfc", formData.rfc)
    .single();

  if (err1) {
    return { success: false, error: err1.message };
  }

  // Crear el usuario en SupabaseAuth
  const {
    data: { user: supabaseUser },
    error: err2,
  } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        role: formData.rol
      }
    }
  });

  if (err2) {
    return { success: false, error: err2.message };
  }

  // Agrega la relación entre el rol y
  // el usuario de supabase auth
  user.supabase_user = supabaseUser!.id;

  const { error: err3 } = await supabase
    .from(formData.rol)
    .update({ supabase_user: supabaseUser!.id })
    .eq("rfc", formData.rfc);

  if (err3) {
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
    .from(user.user_metadata.role)
    .select("*")
    .eq("supabase_user", user.id)
    .single();

  return {
    ...user,
    profile,
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
