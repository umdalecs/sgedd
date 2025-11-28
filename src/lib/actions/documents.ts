import { PDFDocument } from "pdf-lib";
import { getSupabaseCookiesClient } from "../supabase/clients";
import path from "path";
import { getCurrentUser } from "./auth";
import { Result } from "@/types/Result";
import { EventoGeneracion } from "@/types/EventoGeneracion";
import { Documento } from "@/types/Documento";
import { file } from "zod";

export async function getDocumentos() {
  return [
    {
      id: 1,
      nombre: "Constancia de Recursos Humanos",
      solicitar: false,
      estado: "Aprobado",
      ultimaActualizacion: "24/10/2025",
      verPDF: true,
    },
    {
      id: 2,
      nombre: "Carta de Exclusividad  Laboral",
      solicitar: true,
      estado: "NoGen",
      ultimaActualizacion: "24/10/2025",
      verPDF: false,
    },
    {
      id: 3,
      nombre: "Carta de liberacion de Actividades",
      solicitar: false,
      estado: "Pendiente",
      ultimaActualizacion: "20/10/2025",
      verPDF: false,
    },
    {
      id: 4,
      nombre: "Constancia de servicios escolares",
      solicitar: true,
      estado: "Rechazado",
      ultimaActualizacion: "18/10/2025",
      verPDF: false,
    },
  ];
}

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
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

export async function generarPdf(event: EventoGeneracion): Promise<Result<object>> {
  try {
    // const user = await getCurrentUser();

    // // Leer el PDF template desde el sistema de archivos
    // const templatePath = path.join(process.cwd(), "public", "pdf", "cambioH3.pdf");
    // const arrayBuffer = await fs.readFile(templatePath);
    // // Cargar y modificar el PDF
    // const pdfDoc = await PDFDocument.load(arrayBuffer);
    // const form = pdfDoc.getForm();
    // // Opcional: ver todos los campos disponibles
    // const fields = form.getFields();
    // fields.forEach(f => console.log("Campo:", f.getName()));
    // // Llenar el formulario
    // // form.getTextField("Nombre").setText(nombreUsuario);
    // // form.flatten();
    // // Generar el PDF

    // const pdfBytes = await pdfDoc.save();
    // Crear nombre único para el archivo
    const fileName = `documento-${Date.now()}.pdf`;

    // Subir a Supabase Storage
    const {data, error} = await savePdf(pdfBytes,fileName);

    if (error) {
      return {success: false, error}
    }

    return {
      success: true,
      data: {
        ...data,
        fileName
      }
    };


  } catch (error) {
    console.error("Error generando PDF:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Error desconocido",
    };
  } 
}

async function savePdf(pdf: Uint8Array<ArrayBufferLike>, fileName: string): Promise<Result<{publicUrl: string}>> {
  const supabase = await getSupabaseCookiesClient();

  const { error } = await supabase.storage
    .from("documentos")
    .upload(fileName, pdf,{
        contentType: "application/pdf",
        upsert: false,
      });

  if (error) {
    return {error: error.message, success: false};
  }

  const { data: urlData } = supabase
      .storage
      .from('documentos')
      .getPublicUrl(fileName);

  return {data: urlData, success: true};
}
