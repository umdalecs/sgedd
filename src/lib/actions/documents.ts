"use server";

import { getSupabaseCookiesClient } from "../supabase/clients";
import { Result } from "@/types/Result";
import { Documento } from "@/types/Documento";
import { getCurrentUser } from "./auth";

export async function getDocumentByTypeID(
  documentTypeId: string
): Promise<Result<Documento>> {
  const user = await getCurrentUser();
  const supabase = await getSupabaseCookiesClient();

  const { data, error } = await supabase
    .from("documento")
    .select(
    `
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
      ),
      expediente!inner(
        expedienteid,
        fechacreacion,
        estado,
        convocatoriaid,
        docente_rfc
      )
    `
    )
    .eq("tipodocumento.tipodocid", documentTypeId)
    .eq("expediente.docente_rfc", user.rfc)
    .single();

  if (error) {
    return { error: error.message };
  }

  return { data };
}
