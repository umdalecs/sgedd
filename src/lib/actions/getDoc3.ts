"use server";

import { Result } from "@/types/Result";
import { getCurrentUser } from "./auth";
import { getSupabaseCookiesClient } from "../supabase/clients";

export async function generarDocumento3(): Promise<Result<object>> {
  const user = await getCurrentUser();
  const supabase = await getSupabaseCookiesClient();
  //El documento requiere existencia en la tabla de curriculum's
  const { data: curriculum, error: errCurr } = await supabase
    .from("curriculum")
    .select("*")
    .eq("docente_rfc", user.docente_rfc)
    .single();

  if (errCurr || !curriculum) {
    console.error("El docente no tiene registro de curriculum activo.")
    return {
      success: false,
      error:
        "No cuenta con un curriculum actualizado. Actualice su curriculum antes de generar este documento.",
    };
  }

  //Si si existió, se genera la solicitud, primero se busca al generador responsable
  const { data: generador, error: genErr } = await supabase
    .from("usuarios")
    .select("*")
    .eq("puesto", "Jefe del Departamento de Desarrollo Academico")
    .single();

  if (genErr || !generador) {
    console.error("INSERT ERROR:", genErr);
    return { success: false, error: "No existe un generador con ese puesto" };
  }
 //Genera el evento con el insert
  const fechaActual = new Date().toISOString();
  const { error: evErr } = await supabase.from("eventogeneracion").insert([
    {
      fechasolicitud: fechaActual,
      tipodocumento: "9d1749bd-0136-4b3b-8ff4-c686fcf0a766",
      idsolicitante: user.docente_rfc,
      generador_rfc: generador.generador_rfc,
    },
  ]);
  if (evErr) {
    console.error("INSERT ERROR:", evErr);
    return { success: false, error: "No se pudo crear el evento" };
  }
  return { success: true };
}
