"use server";

import { Result } from "@/types/Result";
import { getCurrentUser } from "./auth";
import { getSupabaseCookiesClient } from "../supabase/clients";

export async function generaDocumento1(): Promise<Result<object>> {
  const user = await getCurrentUser();
  const supabase = await getSupabaseCookiesClient();
  //Busca el generador con el puesto responsable del documento
  const {data: generador, error: genErr} = await supabase
    .from("generador")
    .select('*')
    .eq("puesto", "Jefe de Departamento de Administración")
    .single();
  //Genera el evento con el insert a eventoGeneracion
  const fechaActual = new Date().toISOString();
  const {error: evError} = await supabase
    .from("eventogeneracion")
    .insert([
        {
            fechageneracion: fechaActual,
            tipodocumento: "068fe9fd-c111-4753-be14-a101729b2748",
            idsolicitante: user.id,
            generador_rfc: generador.rfc
        }
    ])
  return { success: true };
}


