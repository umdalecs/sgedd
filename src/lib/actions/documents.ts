import { PDFDocument } from "pdf-lib";
import { getSupabaseCookiesClient } from "../supabase/clients";
import path from "path";
import { getCurrentUser } from "./auth";
import { Result } from "@/types/Result";
import { EventoGeneracion } from "@/types/EventoGeneracion";


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

export async function generarDocumento(
  evento: EventoGeneracion
): Promise<Result<object>> {
  return { success: true };
}

export async function getDocumentLink(document_id: string): Promise<Result<string>> {
  return {success: true, data: "/pdf/sample.pdf"}
}


export async function generarPdf() {
  // try {
  //   const user = getCurrentUser();
  //   const supabase = getSupabaseCookiesClient();


  //   // Leer el PDF template desde el sistema de archivos
  //   const templatePath = path.join(process.cwd(), "public", "pdf", "cambioH3.pdf");
  //   const arrayBuffer = await fs.readFile(templatePath);

  //   // Cargar y modificar el PDF
  //   const pdfDoc = await PDFDocument.load(arrayBuffer);
  //   const form = pdfDoc.getForm();
    
  //   // Opcional: ver todos los campos disponibles
  //   const fields = form.getFields();
  //   fields.forEach(f => console.log("Campo:", f.getName()));

  //   // Llenar el formulario
  //   // form.getTextField("Nombre").setText(nombreUsuario);
  //   // form.flatten();

  //   // Generar el PDF
  //   const pdfBytes = await pdfDoc.save();

  //   // Crear nombre único para el archivo
  //   const fileName = `documento-${Date.now()}.pdf`;

  //   // Subir a Supabase Storage
  //   const { data, error } = await supabase
  //     .storage
  //     .from("documentos")
  //     .upload(fileName, pdfBytes, {
  //       contentType: "application/pdf",
  //       upsert: false,
  //     });

  //   if (error) {
  //     console.error("Error subiendo a Supabase:", error);
  //     throw new Error("Error al subir el archivo a Supabase");
  //   }

  //   // Obtener URL pública
  //   const { data: urlData } = supabase
  //     .storage
  //     .from("documentos")
  //     .getPublicUrl(fileName);

  //   console.log("PDF generado exitosamente:", urlData.publicUrl);

  //   return {
  //     success: true,
  //     url: urlData.publicUrl,
  //     fileName: fileName,
  //   };

  // } catch (error) {
  //   console.error("Error generando PDF:", error);
  //   return {
  //     success: false,
  //     error: error instanceof Error ? error.message : "Error desconocido",
  //   };
  // }
}
