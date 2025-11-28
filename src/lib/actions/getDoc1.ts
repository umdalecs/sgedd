"use server";

import { Result } from "@/types/Result";
import { getCurrentUser } from "./auth";
import { getSupabaseCookiesClient } from "../supabase/clients";

export async function generaDocumento1(): Promise<Result<object>> {
  console.log("entro");
  const user = await getCurrentUser();
  const supabase = await getSupabaseCookiesClient();
  //Busca el generador con el puesto responsable del documento
  const { data: generador, error: genErr } = await supabase
    .from("usuarios")
    .select("*")
    .eq("puesto", "Jefe de Departamento de Administración")
    .single();

  if (genErr || !generador) {
    console.error("INSERT ERROR:", genErr);
    return { success: false, error: "No existe un generador con ese puesto" };
  }
  //Genera el evento con el insert a eventoGeneracion
  const fechaActual = new Date().toISOString();
  const { error: evErr } = await supabase.from("eventogeneracion").insert([
    {
      fechasolicitud: fechaActual,
      tipodocumento: "068fe9fd-c111-4753-be14-a101729b2748",
      idsolicitante: user.docente_rfc,
      generador_rfc: generador.generador_rfc,
    },
  ])
  if (evErr) {
    console.error("INSERT ERROR:", evErr);
    return { success: false, error: "No se pudo crear el evento" };
  }
  return { success: true };
}
