"use server";

import { getSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import type { Rol } from "@/lib/supabase/database.types";

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  email: string;
  password: string;
  nombre: string;
  apellido: string;
  rfc: string;
  puesto: string;
  rol: Rol;
}

export interface AuthResult {
  success: boolean;
  error?: string;
}

export async function login(formData: LoginFormData): Promise<AuthResult> {
  const supabase = await getSupabaseServerClient();

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
  const supabase = await getSupabaseServerClient();

  // Register user with Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        nombre: formData.nombre,
        apellido: formData.apellido,
        rfc: formData.rfc,
        puesto: formData.puesto,
        rol: formData.rol,
      },
    },
  });

  if (error) {
    return { success: false, error: error.message };
  }

  // Create user profile in usuarios table
  if (data.user) {
    const { error: profileError } = await supabase.from("usuarios").insert({
      id: data.user.id,
      email: formData.email,
      nombre: formData.nombre,
      apellido: formData.apellido,
      rfc: formData.rfc,
      puesto: formData.puesto,
      rol: formData.rol,
      estatus_plaza: formData.rol === "Docente" ? "Activo" : null,
    });

    if (profileError) {
      console.error("Error creating user profile:", profileError);
      // Don't fail the registration if profile creation fails
      // The user can update their profile later
    }
  }

  redirect("/dashboard");
}

export async function logout(): Promise<void> {
  const supabase = await getSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/");
}

export async function getCurrentUser() {
  const supabase = await getSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  // Get user profile from usuarios table
  const { data: profile } = await supabase
    .from("usuarios")
    .select("*")
    .eq("id", user.id)
    .single();

  return {
    ...user,
    profile,
  };
}

export async function updateUserProfile(
  userId: string,
  updates: {
    nombre?: string;
    apellido?: string;
    rfc?: string;
    puesto?: string;
    rol?: Rol;
    estatus_plaza?: string;
  }
): Promise<AuthResult> {
  const supabase = await getSupabaseServerClient();

  const { error } = await supabase
    .from("usuarios")
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq("id", userId);

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function resetPassword(email: string): Promise<AuthResult> {
  const supabase = await getSupabaseServerClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard/change-password`,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function updatePassword(newPassword: string): Promise<AuthResult> {
  const supabase = await getSupabaseServerClient();

  const { error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}
