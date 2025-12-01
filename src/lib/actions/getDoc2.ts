"use server";

import { Result } from "@/types/Result";
import { getCurrentUser } from "./auth";
import { getSupabaseCookiesClient } from "../supabase/clients";

export async function generarDocumento2(): Promise<Result<object>> {
  const user = await getCurrentUser();
  const supabase = await getSupabaseCookiesClient();

  //Busca el generador con el puesto responsable del documento, en este caso RH
  const { data: generador, error: genErr } = await supabase
    .from("usuarios")
    .select("*")
    .eq("puesto", "Recursos Humanos")
    .single();

  if (genErr || !generador) {
    console.error("INSERT ERROR:", genErr);
    return { error: "No existe un generador con ese puesto" };
  }
  //Genera el evento con el insert a eventoGeneracion
  const fechaActual = new Date().toISOString();
  const { error: evErr } = await supabase.from("eventogeneracion").insert([
    {
      fechasolicitud: fechaActual,
      tipodocumento: "5f76042e-fffe-40ab-a950-8c083839e7b0",
      idsolicitante: user.docente_rfc,
      generador_rfc: generador.generador_rfc,
    },
  ]);
  if (evErr) {
    console.error("INSERT ERROR:", evErr);
    return {  error: "No se pudo crear el evento" };
  }

  return { };
}
