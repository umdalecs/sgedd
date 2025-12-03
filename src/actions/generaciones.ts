"use server";
import { EventoGeneracion } from "@/types/EventoGeneracion";
import { getCurrentUser } from "./auth";
import { getSupabaseCookiesClient } from "../supabase/clients";
import { Result } from "@/types/Result";
import { Documento } from "@/types/Documento";

export async function getEventosGeneracion(): Promise<
  Result<EventoGeneracion[]>
> {
  const user = await getCurrentUser();
  const supabase = await getSupabaseCookiesClient();

  const { data, error } = await supabase
    .from("eventogeneracion")
    .select(
      `
      idevento,
      fechasolicitud,
      idsolicitante,
      generador_rfc,
      documento_id,
        documento!inner(
          documentoid,
          estadoactual,
          rutaarchivo,
          tipodocid,
          expedienteid,
          tipodocumento!inner(
            tipodocid,
            nombretipo,
            tipoinf,
            plantillaruta,
            docintegrado
          )
        )
      `
    )
    .eq("generador_rfc", user.rfc);

  if (error) {
    return { error: error.message };
  }

  return { data };
}

export async function marcarFinalizado(documento: Documento) {
  const supabase = await getSupabaseCookiesClient();

  const documento_actualizado = {
    documentoid: documento.documentoid,
    estadoactual: "FIRMADO",
    rutaarchivo: documento.rutaarchivo,
    tipodocid: documento.tipodocid,
    expedienteid: documento.expedienteid,
  };

  const { error } = await supabase
    .from("documento")
    .upsert(documento_actualizado);

  if (error) {
    return { error: error.message };
  }

  const {error: errorDel} = await supabase
    .from("eventogeneracion")
    .delete()
    .eq("documentoid", documento.documentoid);

  if (errorDel) {
    return { error: errorDel.message };
  } 

  return {};
}
