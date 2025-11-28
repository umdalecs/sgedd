import { NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";
import fs from "fs/promises";
import path from "path";
import { getSupabaseCookiesClient } from "@/lib/supabase/clients";
import { getCurrentUser } from "@/lib/actions/auth";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ tipodoc: string }> }
) {
  try {
    const { tipodoc } = await params;

    const supabase = await getSupabaseCookiesClient();
    const usuario = await getCurrentUser();

    const { data: docente } = await supabase
      .from("docente")
      .select("*")
      .eq("rfc", usuario.docente_rfc)
      .single();

    if (!docente)
      return NextResponse.json(
        { error: "Docente no encontrado" },
        { status: 404 }
      );

    // Elección del PDF
    const templateFile =
      {
        "Constancia Docente": "Constancia Docente.pdf",
        nombramiento: "nombramiento.pdf",
        evaluacion: "evaluacion.pdf",
      }[tipodoc] ?? "default.pdf";
    console.log("tipo solicitado:", tipodoc);

    const pdfPath = path.join(process.cwd(), "public", "pdf", templateFile);
    const pdfBytes = await fs.readFile(pdfPath);

    const pdfDoc = await PDFDocument.load(pdfBytes);
    const form = pdfDoc.getForm();

    // Campos de ejemplo
    form.getTextField("Nombre_Docente").setText(usuario.nombre+' '+usuario.ap_pat+' '+usuario.ap_mat);

    form.flatten();

    const finalPdf = await pdfDoc.save(); // Uint8Array
    const finalPdfBuffer = Buffer.from(finalPdf); // Convertir a Buffer

    return new NextResponse(finalPdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${tipodoc}.pdf"`,
      },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Error desconocido" },
      { status: 500 }
    );
  }
}
