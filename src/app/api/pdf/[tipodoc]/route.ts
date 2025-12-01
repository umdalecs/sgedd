import { NextResponse } from "next/server";
import { PDFDocument, PDFForm } from "pdf-lib";
import fs from "fs/promises";
import path from "path";
import { getSupabaseCookiesClient } from "@/lib/supabase/clients";
import { getCurrentUser } from "@/lib/actions/auth";

type Usuario = {
  rol: string;
  nombre: string;
  ap_pat: string;
  ap_mat: string;
  puesto: string;
  docente_rfc: string;
};

type Docente = {
  rfc: string;
  fecha_ingreso: string;
  hrs_carga: string;
  estatus_plaza: string;
  clave_presupuestal: string;
  departamento: string;
  numero_afiliacion: string;
  categoria_plaza: string;
};

export async function GET(
  request: Request,
  context: { params: Promise<{ tipodoc: string }> }
) {
  try {
    const { tipodoc: rawTipodoc } = await context.params;
    const tipodoc = decodeURIComponent(rawTipodoc);

    console.log("Valor recibido de tipodoc:", tipodoc);

    const supabase = await getSupabaseCookiesClient();
    const usuario = await getCurrentUser();

    const { data: docente } = await supabase
      .from("docente")
      .select("*")
      .eq("rfc", usuario.docente_rfc)
      .single();

    if (!docente) {
      return NextResponse.json({ error: "Docente no encontrado" }, { status: 404 });
    }

    // Diccionario de documentos
    const documentHandlers: Record<
      string,
      { template: string; fill: (form: PDFForm, usuario: Usuario, docente: Docente) => void }
    > = {
      "Constancia Docente": {
        template: "Constancia Docente.pdf",
        fill: (form, usuario, docente) => {
          form.getTextField("Nombre_Docente").setText(usuario.nombre +' '+ usuario.ap_pat +' '+ usuario.ap_mat);
          form.getTextField("No_Afiliacion").setText(docente.numero_afiliacion);
          form.getTextField("Fecha_Ingreso").setText(docente.fecha_ingreso);
          form.getTextField("Categoria_Docente").setText(docente.categoria_plaza);
          form.getTextField("Horas").setText(String(docente.hrs_carga));
          form.getTextField("Estatus_Plaza").setText(docente.estatus_plaza);
          form.getTextField("Clave_Presupuestal").setText(docente.clave_presupuestal);
        },
      },

      "Carta de Exclusividad Laboral": {
        template: "Carta de Exclusividad Laboral.pdf",
        fill: (form, usuario, docente) => {
          form.getTextField("Nombre").setText(usuario.nombre);
          form.getTextField("Categoria").setText(docente.categoria_plaza);

        },
      },

      "Constancia Actualizacion Curriculum": {
        template: "Constancia Actualizacion Curriculum.pdf",
        fill: (form, usuario) => {
          form.getTextField("NombreEvaluado").setText(usuario.nombre);
          form.getTextField("Periodo").setText("2025");
        },
      },

      "Constancia Alumnos Atendidos": {
        template: "Constancia Alumnos Atendidos.pdf",
        fill: (form, usuario) => {
          form.getTextField("NombreEvaluado").setText(usuario.nombre);
          form.getTextField("Periodo").setText("2025");
        },
      },
    };

    const handler = documentHandlers[tipodoc];

    if (!handler) {
      return NextResponse.json(
        { error: "Tipo de documento no reconocido" },
        { status: 400 }
      );
    }

    // Leer PDF base
    const pdfPath = path.join(process.cwd(), "public", "pdf", handler.template);
    const pdfBytes = await fs.readFile(pdfPath);

    const pdfDoc = await PDFDocument.load(pdfBytes);
    const form = pdfDoc.getForm();

    // Llenar campos según documento
    handler.fill(form, usuario, docente);

    form.flatten();
    const finalPdf = await pdfDoc.save();

    return new NextResponse(Buffer.from(finalPdf), {
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
