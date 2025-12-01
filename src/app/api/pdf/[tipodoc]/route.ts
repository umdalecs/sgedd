import { NextResponse } from "next/server";
import { PDFDocument, PDFForm } from "pdf-lib";
import fs from "fs/promises";
import path from "path";
import { getSupabaseCookiesClient } from "@/lib/supabase/clients";
import { getCurrentUser } from "@/lib/actions/auth";

//Tipos usados de momento

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

//Ruta GET

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

    //Cargar datos del docente
    const { data: docente } = await supabase
      .from("docente")
      .select("*")
      .eq("rfc", usuario.docente_rfc)
      .single();

    if (!docente) {
      return NextResponse.json(
        { error: "Docente no encontrado" },
        { status: 404 }
      );
    }

    // Handlers del PDF
    const documentHandlers: Record<
      string,
      {
        template: string;
        fill: (form: PDFForm, usuario: Usuario, docente: Docente) => void;
      }
    > = {
      "Constancia Docente": {
        template: "Constancia Docente.pdf",
        fill: (form, usuario, docente) => {
          form
            .getTextField("Nombre_Docente")
            .setText(
              usuario.nombre + " " + usuario.ap_pat + " " + usuario.ap_mat
            );
          form.getTextField("No_Afiliacion").setText(docente.numero_afiliacion);
          form.getTextField("Fecha_Ingreso").setText(docente.fecha_ingreso);
          form
            .getTextField("Categoria_Docente")
            .setText(docente.categoria_plaza);
          form.getTextField("Horas").setText(String(docente.hrs_carga));
          form.getTextField("Estatus_Plaza").setText(docente.estatus_plaza);
          form
            .getTextField("Clave_Presupuestal")
            .setText(docente.clave_presupuestal);
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

    //Handlers del Evento (Para insertar a tabla)
    const eventHandlers = {
      "Constancia Docente": {
        documentoUUID: "068fe9fd-c111-4753-be14-a101729b2748",
        puestoGenerador: "Jefe de Departamento de Administración",
        validar: async () => true,
      },

      "Carta de Exclusividad Laboral": {
        documentoUUID: "5f76042e-fffe-40ab-a950-8c083839e7b0",
        puestoGenerador: "Recursos Humanos",
        validar: async () => true,
      },

      "Constancia Actualizacion Curriculum": {
        documentoUUID: "9d1749bd-0136-4b3b-8ff4-c686fcf0a766",
        puestoGenerador: "Jefe del Departamento de Desarrollo Academico",

        validar: async () => {
          const { data: curriculum } = await supabase
            .from("curriculum")
            .select("*")
            .eq("docente_rfc", usuario.docente_rfc)
            .single();

          return Boolean(curriculum);
        },
      },
    } as const;

    const eventHandler = eventHandlers[tipodoc as keyof typeof eventHandlers];

    //Validacion de reglas especiales

    if (!(await eventHandler.validar())) {
      return NextResponse.json(
        {
          error:
            "No cumple los requisitos para generar este documento (ej. curriculum no actualizado)",
        },
        { status: 400 }
      );
    }

    const { data: generador } = await supabase
      .from("usuarios")
      .select("*")
      .eq("puesto", eventHandler.puestoGenerador)
      .single();

    if (!generador) {
      return NextResponse.json(
        { error: "No se encontró un generador asignado para este documento" },
        { status: 400 }
      );
    }

    //Insertar eventoGeneracion
    await supabase.from("eventogeneracion").insert([
      {
        fechasolicitud: new Date().toISOString(),
        tipodocumento: eventHandler.documentoUUID,
        idsolicitante: usuario.docente_rfc,
        generador_rfc: generador.generador_rfc,
      },
    ]);

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
