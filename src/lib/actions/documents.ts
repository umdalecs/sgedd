"use server";
import { PDFDocument } from "pdf-lib";
import { getSupabaseCookiesClient } from "../supabase/clients";
import path from "path";
import { getCurrentUser } from "./auth";
import { Result } from "@/types/Result";
import { EventoGeneracion } from "@/types/EventoGeneracion";
import { Documento } from "@/types/Documento";
import { file } from "zod";

export async function getDocumentByID(
  document_id: string
): Promise<Result<Documento>> {
  const supabase = await getSupabaseCookiesClient();

  const { data, error } = await supabase
    .from("documento")
    .select("*")
    .eq("documentoid", document_id)
    .single();

  if (error) {
    return { error: error.message };
  }

  return { data };
}

const TEMPLATES: Record<string, string> = {
  "068fe9fd-c111-4753-be14-a101729b2748": "Doc 1 - Constancia de Docente.pdf",
  "5f76042e-fffe-40ab-a950-8c083839e7b0": "Doc 3 - Carta de Exclusividad Laboral.pdf",
  "9d1749bd-0136-4b3b-8ff4-c686fcf0a766": "Doc 4 - Constancia Actualizacion Curriculum",
};

function getTemplatePath(tipoDocumentoId: number): string {
  const template = TEMPLATES[tipoDocumentoId];

  if (!template) {
    throw new Error(`No existe un template para tipoDocumentoId=${tipoDocumentoId}`);
  }

  return path.join(process.cwd(), "public", "pdf", template);
}


// export async function generarPdf(event: EventoGeneracion): Promise<Result<object>> {
//   try {
//     // const user = await getCurrentUser();

//     // // Leer el PDF template desde el sistema de archivos
//     // const templatePath = path.join(process.cwd(), "public", "pdf", "cambioH3.pdf");
//     // const arrayBuffer = await fs.readFile(templatePath);
//     // // Cargar y modificar el PDF
//     // const pdfDoc = await PDFDocument.load(arrayBuffer);
//     // const form = pdfDoc.getForm();
//     // // Opcional: ver todos los campos disponibles
//     // const fields = form.getFields();
//     // fields.forEach(f => console.log("Campo:", f.getName()));
//     // // Llenar el formulario
//     // // form.getTextField("Nombre").setText(nombreUsuario);
//     // // form.flatten();
//     // // Generar el PDF

//     // const pdfBytes = await pdfDoc.save();
//     // Crear nombre único para el archivo
//     const fileName = `documento-${Date.now()}.pdf`;

//     // Subir a Supabase Storage
//     const {data, error} = await savePdf(pdfBytes,fileName);

//     if (error) {
//       return {error}
//     }

//     return {
//       data: {
//         ...data,
//         fileName
//       }
//     };


//   } catch (error) {
//     console.error("Error generando PDF:", error);
//     return {
//       success: false,
//       error: error instanceof Error ? error.message : "Error desconocido",
//     };
//   } 
// }

async function savePdf(pdf: Uint8Array<ArrayBufferLike>, fileName: string): Promise<Result<{publicUrl: string}>> {
  const supabase = await getSupabaseCookiesClient();

  const { error } = await supabase.storage
    .from("documentos")
    .upload(fileName, pdf,{
        contentType: "application/pdf",
        upsert: false,
      });

  if (error) {
    return {error: error.message};
  }

  const { data: urlData } = supabase
      .storage
      .from('documentos')
      .getPublicUrl(fileName);

  return {data: urlData};
}
