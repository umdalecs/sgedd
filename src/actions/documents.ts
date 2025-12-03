"use server";

import { getSupabaseCookiesClient } from "../supabase/clients";
import { Result } from "@/types/Result";
import { Documento } from "@/types/Documento";
import { getCurrentUser } from "./auth";
import { PDFDocument } from "pdf-lib";

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

export async function getDocumentByID(
  documentId: string
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
    .eq("documentoid", documentId)
    .single();

  if (error) {
    console.log(error.message);
    return { error: error.message };
  }

  return { data };
}

export async function firmarDocumento(firmaBase64: string, url: string) {
  const supabase = await getSupabaseCookiesClient();

  // 1. Descargar PDF original
  const response = await fetch(url);
  const existingPdfBytes = await response.arrayBuffer();

  // 2. Cargar PDF
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // 3. Convertir firma Base64 → Uint8Array
  //    Remover encabezado "data:image/png;base64,"
  const base64Data = firmaBase64.replace(/^data:image\/png;base64,/, "");
  const firmaUint8 = Uint8Array.from(atob(base64Data), (c) => c.charCodeAt(0));

  // 4. Incrustar imagen PNG en el PDF
  const firmaPng = await pdfDoc.embedPng(firmaUint8);

  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // Ajusta tamaño de la firma (escala automática)
  const firmaWidth = 200;
  const firmaHeight = (firmaPng.height / firmaPng.width) * firmaWidth;

  // Coordenadas para colocar la firma
  firstPage.drawImage(firmaPng, {
    x: 50,
    y: 200,
    width: firmaWidth,
    height: firmaHeight,
  });

  // 5. Exportar PDF editado
  const signedPdfBytes = await pdfDoc.save();

  const { error: docError, data: document } = await supabase
    .from("documento")
    .select(
      `
        documentoid,
        estadoactual,
        rutaarchivo,
        tipodocid,
        expedienteid,
        expediente!inner(
          docente_rfc
        )
      `
    )
    .eq("rutaarchivo", url)
    .single();

  if (docError) {
    console.log("1" + docError.message);

    return { error: docError.message };
  }

  const filename = `${document.expediente.docente_rfc}-${Date.now()}.pdf`;

  // 6. Guardar en Supabase bucket
  const { data, error } = await supabase.storage
    .from("documentos")
    .upload(filename, signedPdfBytes, {
      upsert: true,
      contentType: "application/pdf",
    });

  if (error) {
    console.log("2" + error.message);

    return { error };
  }

  const { data: urlData } = supabase.storage
    .from("documentos")
    .getPublicUrl(filename);

  const updatedDocument = {
    documentoid: document.documentoid,
    rutaarchivo: urlData.publicUrl,
    estadoactual: document.estadoactual,
    tipodocid: document.tipodocid,
    expedienteid: document.expedienteid,
  };

  const { error: upsertError } = await supabase
    .from("documento")
    .upsert(updatedDocument);

  if (upsertError) {
    console.log("3" + upsertError.message);
    return { error: upsertError.message };
  }

  return {
    url: urlData.publicUrl,
  };
}
