import { EventoGeneracion } from "@/types/EventoGeneracion";
import { getCurrentUser } from "./auth";
import { getSupabaseCookiesClient } from "../supabase/clients";
import { Result } from "@/types/Result";

export async function getEventos(): Promise<Result<EventoGeneracion[]>> {
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
