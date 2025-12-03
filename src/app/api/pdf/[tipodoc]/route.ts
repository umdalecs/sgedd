import { Docente } from "@/types/Docente";
import { Expediente } from "@/types/Expediente";
import { getCurrentUser } from "@/actions/auth";
import { getSupabaseCookiesClient } from "@/supabase/clients";
import { NextResponse } from "next/server";
import { PDFDocument, PDFForm } from "pdf-lib";
import { Usuario } from "@/types/usuario";
import fs from "fs/promises";
import path from "path";

function obtenerFechaFormateada() {
  const hoy = new Date();
  const opciones = {
    year: "numeric",
    month: "long",
    day: "numeric",
  } as Intl.DateTimeFormatOptions;

  return hoy.toLocaleDateString("es-ES", opciones);
}

export async function POST(
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

    //Cargar datos del expediente
    const { data: expediente } = await supabase
      .from("expediente")
      .select("*")
      .eq("docente_rfc", docente.rfc)
      .single();

    if (!expediente) {
      return NextResponse.json(
        { error: "Expediente no encontrado" },
        { status: 404 }
      );
    }

    //Cargar datos del personal
    const { data: desarrolloAcademico } = await supabase
      .from("usuarios")
      .select("*")
      .eq("puesto", "Jefe del Departamento de Desarrollo Academico")
      .single();

    const { data: coordinador } = await supabase
      .from("usuarios")
      .select("*")
      .eq("puesto", "Coordinador de Carrera")
      .single();

    //Cargar datos del curriculum
    const { data: curriculum } = await supabase
      .from("curriculum")
      .select("*")
      .eq("docente_rfc", usuario.docente_rfc)
      .single();

    //Cargar datos de la carga de materia
    const { data: materias } = await supabase
      .from("cargamaterias")
      .select(
        `
    *,
    materia (
      materiaid,
      clavemateria,
      nombre,
      creditos,
      carrera
    )
  `
      )
      .eq("docente_rfc", usuario.docente_rfc);

    //Cargar datos de datos de recursos
    const { data: recursos } = await supabase
      .from("recursoeducativo")
      .select(
        `
    *,
    materia (
      materiaid,
      clavemateria,
      nombre,
      creditos,
      carrera
    )
  `
      )
      .eq("docente_rfc", usuario.docente_rfc)
      .single();

    //Cargar datos de apoyo a la docencia
    const { data: apoyos } = await supabase
      .from("apoyoadocencia")
      .select("*")
      .eq("docente_rfc", usuario.docente_rfc);

    //Cargar datos de tutorias del docente
    const { data: tutorias } = await supabase
      .from("tutores")
      .select("*")
      .eq("docente_rfc", usuario.docente_rfc);

    console.log(materias);
    console.log(apoyos);
    console.log(recursos);
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
          form.getTextField("Fecha").setText(obtenerFechaFormateada());
          form
            .getTextField("Nombre_Docente")
            .setText(
              usuario.nombre + " " + usuario.ap_pat + " " + usuario.ap_mat
            );
          form
            .getTextField("Num_Afiliacion")
            .setText(docente.numero_afiliacion);
          form
            .getTextField("Clave_Presupuestal")
            .setText(docente.clave_presupuestal);
          form
            .getTextField("Nombre_Docente2")
            .setText(
              usuario.nombre + " " + usuario.ap_pat + " " + usuario.ap_mat
            );
        },
      },

      "Constancia Actualizacion Curriculum": {
        template: "Constancia Actualizacion Curriculum.pdf",
        fill: (form, usuario) => {
          form
            .getTextField("Nombre_Depto")
            .setText(
              desarrolloAcademico.nombre +
                " " +
                desarrolloAcademico.ap_pat +
                " " +
                desarrolloAcademico.ap_mat
            );
          form
            .getTextField("Nombre_Docente")
            .setText(
              usuario.nombre + " " + usuario.ap_pat + " " + usuario.ap_mat
            );
          form.getTextField("No_Registro").setText(curriculum.noderegistro);
          form
            .getTextField("Año_Act")
            .setText(curriculum.fechaactualizacion.substring(0, 4));
          form
            .getTextField("Nombre_Depto2")
            .setText(
              usuario.nombre + " " + usuario.ap_pat + " " + usuario.ap_mat
            );
        },
      },

      "Constancia Alumnos Atendidos": {
        template: "Constancia Alumnos Atendidos.pdf",
        fill: (form, usuario, docente) => {
          if (!materias || materias.length === 0) return;
          form
            .getTextField("Nombre_Docente")
            .setText(
              usuario.nombre + " " + usuario.ap_pat + " " + usuario.ap_mat
            );
          form.getTextField("No_Expediente").setText(curriculum.noderegistro);
          materias.forEach((carga, index) => {
            const idx = index + 1;

            form.getTextField(`Periodo_${idx}`).setText(carga.periodo ?? "");

            form
              .getTextField(`ClaveM_${idx}`)
              .setText(carga.materia?.clavemateria ?? "");

            form
              .getTextField(`Materia_${idx}`)
              .setText(carga.materia?.nombre ?? "");

            form
              .getTextField(`Alumnos_${idx}`)
              .setText(String(carga.noalumnos ?? ""));
          });
        },
      },

      "Formato de Actividades": {
        template: "Formato de Actividades.pdf",
        fill: (form, usuario, docente) => {
          if (!materias || materias.length === 0) return;
          form
            .getTextField("Nombre_Docente")
            .setText(
              usuario.nombre + " " + usuario.ap_pat + " " + usuario.ap_mat
            );
          form.getTextField("Carrera").setText(docente.departamento);
          form
            .getTextField("Clave_Presupuestal")
            .setText(docente.clave_presupuestal);
          form.getTextField("Estatus_Plaza").setText(docente.estatus_plaza);
          form.getTextField("Fecha_Ingreso").setText(docente.fecha_ingreso);
          form.getTextField("Departamento").setText(docente.departamento);
          form
            .getTextField("Nombre_Coordinador")
            .setText(
              coordinador.nombre +
                " " +
                coordinador.ap_pat +
                " " +
                coordinador.ap_mat
            );

          materias.forEach((carga, index) => {
            const idx = index + 1;
            form
              .getTextField(`Asign_${idx}`)
              .setText(carga.materia?.nombre ?? "");

            form
              .getTextField(`Grupo_${idx}`)
              .setText(String(carga.grupo ?? ""));
            form
              .getTextField(`Estudiantes_${idx}`)
              .setText(String(carga.noalumnos ?? ""));
            form.getTextField(`Aula_${idx}`).setText(carga.aula ?? "");
            form.getTextField(`Carrera_${idx}`).setText(carga.carrera ?? "");
            form.getTextField(`Horario_${idx}`).setText(carga.horario ?? "");
          });
          apoyos?.forEach((apoyo, index) => {
            const idx = index + 1;
            form
              .getTextField(`Apoyo_${idx}`)
              .setText(apoyo.nombreactividad ?? "");
          });
        },
      },
      "Constancia de Cumplimiento de Actividades": {
        template: "Constancia de Cumplimiento de Actividades.pdf",
        fill: (form, usuario, docente) => {
          form
            .getTextField("Nombre_Docente")
            .setText(
              usuario.nombre + " " + usuario.ap_pat + " " + usuario.ap_mat
            );
          form.getTextField("Numero_Afiliacion").setText(docente.estatus_plaza);
          form
            .getTextField("Categoria_Plaza")
            .setText(docente.clave_presupuestal);
          let totalAlumnos = 0;
          materias?.forEach((carga, index) => {
            const idx = index + 1;
            const alumnos = carga.noalumnos ?? 0;
            totalAlumnos += alumnos;
          });
          form.getTextField("Sum_Alumnos").setText(String(totalAlumnos));
          form.getTextField("Fecha").setText(obtenerFechaFormateada());
        },
      },
      "Carta de Liberacion de Actividades": {
        template: "Carta de Liberacion de Actividades.pdf",
        fill: (form, usuario, docente) => {
          form.getTextField("Fecha").setText(obtenerFechaFormateada());
          form
            .getTextField("Nombre_Docente")
            .setText(
              usuario.nombre + " " + usuario.ap_pat + " " + usuario.ap_mat
            );
          form.getTextField("Categoria_Plaza").setText(docente.categoria_plaza);
          form
            .getTextField("Nombre_Docente2")
            .setText(
              usuario.nombre + " " + usuario.ap_pat + " " + usuario.ap_mat
            );
          form
            .getTextField("Numero_Afiliacion")
            .setText(docente.numero_afiliacion);
          form
            .getTextField("Clave_Presupuestal")
            .setText(docente.clave_presupuestal);
          form
            .getTextField("Nombre_Docente3")
            .setText(
              usuario.nombre + " " + usuario.ap_pat + " " + usuario.ap_mat
            );
        },
      },
      "Carta de Grupos Licenciatura": {
        template: "Carta de Grupos Licenciatura.pdf",
        fill: (form, usuario, docente) => {
          form.getTextField("Fecha").setText(obtenerFechaFormateada());
          form
            .getTextField("Nombre_Docente")
            .setText(
              usuario.nombre + " " + usuario.ap_pat + " " + usuario.ap_mat
            );
          form
            .getTextField("Numero_Afiliacion")
            .setText(docente.numero_afiliacion);
          form
            .getTextField("Clave_Presupuestal")
            .setText(docente.clave_presupuestal);

          let textoConcatenadoAsignatura = "";
          let textoConcatenadoGrupo = "";
          let textoConcatenadoCarrera = "";
          let textoConcatenadoHoras = "";
          materias?.forEach((carga, index) => {
            const idx = index + 1;
            const textoAsignatura = carga.materia?.nombre ?? "";
            if (textoAsignatura.length > 0) {
              textoConcatenadoAsignatura +=
                (textoConcatenadoAsignatura ? ", " : "") + textoAsignatura;
            }
            const textoGrupo = carga.grupo ?? "";
            if (textoGrupo.length > 0) {
              textoConcatenadoGrupo +=
                (textoConcatenadoGrupo ? ", " : "") + textoGrupo;
            }
            const textoCarrera = carga.materia?.carrera ?? "";
            if (textoCarrera.length > 0) {
              textoConcatenadoCarrera +=
                (textoConcatenadoCarrera ? ", " : "") + textoCarrera;
            }
            const textoHoras = carga.horario ?? "";
            if (textoHoras.length > 0) {
              textoConcatenadoHoras +=
                (textoConcatenadoHoras ? ", " : "") + textoHoras;
            }
          });
          form.getTextField("Asignatura").setText(textoConcatenadoAsignatura);
          form.getTextField("Grupo").setText(textoConcatenadoGrupo);
          form.getTextField("Carrera").setText(textoConcatenadoCarrera);
          form.getTextField("Creditos").setText(textoConcatenadoHoras);
          form
            .getTextField("Nombre_Docente2")
            .setText(
              usuario.nombre + " " + usuario.ap_pat + " " + usuario.ap_mat
            );
        },
      },
      "Carta de Evaluacion": {
        template: "Carta de Evaluacion.pdf",
        fill: (form, usuario, docente) => {
          form.getTextField("Fecha").setText(obtenerFechaFormateada());
          form
            .getTextField("Nombre_Docente")
            .setText(
              usuario.nombre + " " + usuario.ap_pat + " " + usuario.ap_mat
            );
          form
            .getTextField("Nombre_Docente2")
            .setText(
              usuario.nombre + " " + usuario.ap_pat + " " + usuario.ap_mat
            );
          form
            .getTextField("Numero_Afiliacion")
            .setText(docente.numero_afiliacion);
          form
            .getTextField("Nombre_Docente3")
            .setText(
              usuario.nombre + " " + usuario.ap_pat + " " + usuario.ap_mat
            );
        },
      },
      "Constancia Tutorias": {
        template: "Constancia Tutorias.pdf",
        fill: (form, usuario, docente) => {
          form
            .getTextField("Nombre_Docente")
            .setText(
              usuario.nombre + " " + usuario.ap_pat + " " + usuario.ap_mat
            );
          let totalAlumnos = 0;
          tutorias?.forEach((carga, index) => {
            const idx = index + 1;
            const alumnos = carga.notutorados ?? 0;
            totalAlumnos += alumnos;
          });
          form.getTextField("Total_Tutorados").setText(String(totalAlumnos));
        },
      },
      "Constancia de Recursos": {
        template: "Constancia de Recursos.pdf",
        fill: (form, usuario, docente) => {
          form
            .getTextField("Nombre_Docente")
            .setText(
              usuario.nombre + " " + usuario.ap_pat + " " + usuario.ap_mat
            );
          form.getTextField("Semestre_Recurso").setText(recursos.semestreelaboracion);
          form.getTextField("Materia").setText(recursos.materia.nombre);
          form.getTextField("Programa_Educativo").setText(recursos.programaeducativo);
          form.getTextField("Fecha").setText(obtenerFechaFormateada());
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

      "Constancia Alumnos Atendidos": {
        documentoUUID: "a0473e8a-832f-4565-8a84-71a25a263930",
        puestoGenerador: "Jefe del Departamento de Servicios Escolares",
        validar: async () => {
          const { data: materias } = await supabase
            .from("cargamaterias")
            .select(
              `
    *,
    materia (
      materiaid,
      clavemateria,
      nombre,
      creditos,
      carrera
    )
  `
            )
            .eq("docente_rfc", usuario.docente_rfc);

          return Array.isArray(materias) && materias.length > 0;
        },
      },

      "Formato de Actividades": {
        documentoUUID: "879017b6-aa3a-450c-84f0-a106dc5bca3f",
        puestoGenerador: "Coordinador de Carrera",
        validar: async () => {
          const { data: materias } = await supabase
            .from("cargamaterias")
            .select(
              `
    *,
    materia (
      materiaid,
      clavemateria,
      nombre,
      creditos,
      carrera
    )
  `
            )
            .eq("docente_rfc", usuario.docente_rfc);
          const { data: apoyos } = await supabase
            .from("apoyoadocencia")
            .select("*")
            .eq("docente_rfc", usuario.docente_rfc);
          const tieneMaterias = Array.isArray(materias) && materias.length > 0;
          const tieneApoyos = Array.isArray(apoyos) && apoyos.length > 0;

          return tieneMaterias || tieneApoyos;
        },
      },
      "Constancia de Cumplimiento de Actividades": {
        documentoUUID: "d417fd2c-0874-4156-9092-2172f266390f",
        puestoGenerador: "Subdireccion Academica",
        validar: async () => {
          const { data: materias } = await supabase
            .from("cargamaterias")
            .select(
              `
    *,
    materia (
      materiaid,
      clavemateria,
      nombre,
      creditos,
      carrera
    )
  `
            )
            .eq("docente_rfc", usuario.docente_rfc);

          return Array.isArray(materias) && materias.length > 0;
        },
      },
      "Carta de Liberacion de Actividades": {
        documentoUUID: "e9c608c6-2d8e-4c0d-819b-8151e7c797ea",
        puestoGenerador: "Recursos Humanos",
        validar: async () => true,
      },
      "Carta de Grupos Licenciatura": {
        documentoUUID: "d2c89db2-3c03-48f3-8838-5ce9c92cbc22",
        puestoGenerador: "Recursos Humanos",
        validar: async () => {
          const { data: materias } = await supabase
            .from("cargamaterias")
            .select(
              `
    *,
    materia (
      materiaid,
      clavemateria,
      nombre,
      creditos,
      carrera
    )
  `
            )
            .eq("docente_rfc", usuario.docente_rfc);

          return Array.isArray(materias) && materias.length > 0;
        },
      },
      "Carta de Evaluacion": {
        documentoUUID: "35c6b0d1-b2d4-4f0e-9f6d-2a53d143b349",
        puestoGenerador: "Recursos Humanos",
        validar: async () => true,
      },
      "Constancia Tutorias": {
        documentoUUID: "4afd2ad2-0450-44b4-8ef1-6082ae40fc76",
        puestoGenerador: "Jefe del Departamento de Desarrollo Academico",
        validar: async () => {
          const { data: tutorias } = await supabase
            .from("tutores")
            .select("*")
            .eq("docente_rfc", usuario.docente_rfc);

          return Array.isArray(tutorias) && tutorias.length > 0;
        },
      },
      "Constancia de Recursos": {
        documentoUUID: "2a28acbd-afe5-41ae-8bb4-cc5406ed1a50",
        puestoGenerador: "Jefe del Departamento de Sistemas",
        validar: async () => {
          const { data: recursos } = await supabase
            .from("recursoeducativo")
            .select(
              `
    *,
    materia (
      materiaid,
      clavemateria,
      nombre,
      creditos,
      carrera
    )
  `
            )
            .eq("docente_rfc", usuario.docente_rfc);
          return Array.isArray(recursos) && recursos.length > 0;
        },
      },
    } as const;

    const eventHandler = eventHandlers[tipodoc as keyof typeof eventHandlers];

    //Validacion de reglas especiales

    if (!(await eventHandler.validar())) {
      return NextResponse.json(
        {
          error: "No cumple los requisitos para generar este documento",
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

    // Leer PDF base
    const pdfPath = path.join(process.cwd(), "public", "pdf", handler.template);
    const pdfBytes = await fs.readFile(pdfPath);

    const pdfDoc = await PDFDocument.load(pdfBytes);
    const form = pdfDoc.getForm();

    // Llenar campos según documento
    handler.fill(form, usuario, docente);

    form.flatten();
    const finalPdf = await pdfDoc.save();

    const fileName = `${usuario.docente_rfc}-${Date.now()}.pdf`;

    const { error: uploadErr } = await supabase.storage
      .from("documentos")
      .upload(fileName, finalPdf, {
        contentType: "application/pdf",
        upsert: false,
      });

    if (uploadErr) {
      console.error(uploadErr);
      return NextResponse.json(
        { error: "No se pudo almacenar el PDF" },
        { status: 500 }
      );
    }

    const { data: publicUrlData } = supabase.storage
      .from("documentos")
      .getPublicUrl(fileName);

    const pdfUrl = publicUrlData.publicUrl;

    const tipoDocumentoUUID = eventHandler.documentoUUID;

    // Insertar Documento
    const { error: insertDocErr, data } = await supabase
      .from("documento")
      .insert({
        estadoactual: "Generado",
        rutaarchivo: pdfUrl,
        tipodocid: tipoDocumentoUUID,
        expedienteid: expediente.expedienteid,
      })
      .select()
      .single();

    if (insertDocErr) {
      console.error("Error al insertar documento:", insertDocErr);
      return NextResponse.json(
        { error: "No se pudo insertar en tabla documento" },
        { status: 500 }
      );
    }

    //Insertar eventoGeneracion
    const { error: insertEvErr } = await supabase
      .from("eventogeneracion")
      .insert([
        {
          fechasolicitud: new Date().toISOString(),
          idsolicitante: usuario.docente_rfc,
          generador_rfc: generador.generador_rfc,
          documento_id: data.documentoid,
        },
      ]);

    if (insertEvErr) {
      console.error("Error al insertar documento:", insertEvErr);
      return NextResponse.json(
        { error: "No se pudo insertar en tabla documento" },
        { status: 500 }
      );
    }

    return Response.json({ status: 200, error: null });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Error desconocido" },
      { status: 500 }
    );
  }
}
