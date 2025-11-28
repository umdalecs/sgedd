
  create table "public"."actividadcomplementaria" (
    "actividadcomplementid" uuid not null default gen_random_uuid(),
    "descripcionactividad" text,
    "periodo" text,
    "noalumnos" integer,
    "noalumnosconcredito" integer,
    "docente_rfc" text not null
      );



  create table "public"."actividadesadministrativas" (
    "actadministrativaid" uuid not null default gen_random_uuid(),
    "puesto" text,
    "descripcionactividades" text,
    "unidadeshora" integer,
    "docente_rfc" text not null
      );



  create table "public"."apoyoadocencia" (
    "apoyodocid" uuid not null default gen_random_uuid(),
    "nombreactividad" text,
    "meta" text,
    "horas" integer,
    "docente_rfc" text not null
      );



  create table "public"."asignaciongenerador" (
    "asignacionid" uuid not null default gen_random_uuid(),
    "nombrerol" text,
    "generador_rfc" text not null,
    "tipodocid" uuid not null
      );



  create table "public"."cargamaterias" (
    "cargaid" uuid not null default gen_random_uuid(),
    "periodo" text,
    "grupo" text,
    "aula" text,
    "noalumnos" integer,
    "modalidad" text,
    "materiaid" uuid,
    "docente_rfc" text not null
      );



  create table "public"."convocatoria" (
    "convocatoriaid" uuid not null default gen_random_uuid(),
    "nombreconvocatoria" text,
    "fechainicio" date,
    "fechafin" date
      );



  create table "public"."curriculum" (
    "noderegistro" uuid not null default gen_random_uuid(),
    "fechaactualizacion" date,
    "docente_rfc" text not null
      );



  create table "public"."documento" (
    "documentoid" uuid not null default gen_random_uuid(),
    "fechasolicitud" date,
    "estadoactual" text,
    "rutaarchivo" text,
    "tipodocid" uuid not null,
    "expedienteid" uuid not null
      );



  create table "public"."documentoinfoextra" (
    "docinfoextraid" uuid not null default gen_random_uuid(),
    "infoid" text,
    "documentoid" uuid not null
      );



  create table "public"."estrategiadidactica" (
    "estrategiadidactid" uuid not null default gen_random_uuid(),
    "descripcionestrategia" text,
    "materiaid" uuid,
    "docente_rfc" text not null
      );



  create table "public"."eventogeneracion" (
    "generacionid" uuid not null default gen_random_uuid(),
    "fechageneracion" date,
    "documentoid" uuid not null,
    "generador_rfc" text
      );



  create table "public"."eventovistobueno" (
    "aprobacionid" uuid not null default gen_random_uuid(),
    "vistobuenoedo" text,
    "fechaaprobacion" date,
    "observacion" text,
    "documentoid" uuid not null,
    "revisor_rfc" text
      );



  create table "public"."expediente" (
    "expedienteid" uuid not null default gen_random_uuid(),
    "fechacreacion" date,
    "estado" text,
    "convocatoriaid" uuid,
    "docente_rfc" text
      );



  create table "public"."materia" (
    "materiaid" uuid not null default gen_random_uuid(),
    "clavemateria" text,
    "nombre" text,
    "creditos" integer,
    "carrera" text
      );



  create table "public"."programa" (
    "programaid" uuid not null default gen_random_uuid(),
    "periodovalidez" text,
    "docente_rfc" text not null
      );



  create table "public"."recursoeducativo" (
    "recursoeduid" uuid not null default gen_random_uuid(),
    "semestreelaboracion" text,
    "programaeducativo" text,
    "materialid" uuid,
    "docente_rfc" text not null
      );



  create table "public"."tipodocumento" (
    "tipodocid" uuid not null default gen_random_uuid(),
    "nombretipo" text,
    "tipoinf" text,
    "plantillaruta" text,
    "docintegrado" boolean
      );



  create table "public"."tutores" (
    "tutoriaid" uuid not null default gen_random_uuid(),
    "periodo" text,
    "notutorados" integer,
    "carreratutorados" text,
    "docente_rfc" text not null
      );


CREATE UNIQUE INDEX actividadcomplementaria_pkey ON public.actividadcomplementaria USING btree (actividadcomplementid);

CREATE UNIQUE INDEX actividadesadministrativas_pkey ON public.actividadesadministrativas USING btree (actadministrativaid);

CREATE UNIQUE INDEX apoyoadocencia_pkey ON public.apoyoadocencia USING btree (apoyodocid);

CREATE UNIQUE INDEX asignaciongenerador_pkey ON public.asignaciongenerador USING btree (asignacionid);

CREATE UNIQUE INDEX cargamaterias_pkey ON public.cargamaterias USING btree (cargaid);

CREATE UNIQUE INDEX convocatoria_pkey ON public.convocatoria USING btree (convocatoriaid);

CREATE UNIQUE INDEX curriculum_pkey ON public.curriculum USING btree (noderegistro);

CREATE UNIQUE INDEX documento_pkey ON public.documento USING btree (documentoid);

CREATE UNIQUE INDEX documentoinfoextra_pkey ON public.documentoinfoextra USING btree (docinfoextraid);

CREATE UNIQUE INDEX estrategiadidactica_pkey ON public.estrategiadidactica USING btree (estrategiadidactid);

CREATE UNIQUE INDEX eventogeneracion_pkey ON public.eventogeneracion USING btree (generacionid);

CREATE UNIQUE INDEX eventovistobueno_pkey ON public.eventovistobueno USING btree (aprobacionid);

CREATE UNIQUE INDEX expediente_pkey ON public.expediente USING btree (expedienteid);

CREATE UNIQUE INDEX materia_pkey ON public.materia USING btree (materiaid);

CREATE UNIQUE INDEX programa_pkey ON public.programa USING btree (programaid);

CREATE UNIQUE INDEX recursoeducativo_pkey ON public.recursoeducativo USING btree (recursoeduid);

CREATE UNIQUE INDEX tipodocumento_pkey ON public.tipodocumento USING btree (tipodocid);

CREATE UNIQUE INDEX tutores_pkey ON public.tutores USING btree (tutoriaid);

alter table "public"."actividadcomplementaria" add constraint "actividadcomplementaria_pkey" PRIMARY KEY using index "actividadcomplementaria_pkey";

alter table "public"."actividadesadministrativas" add constraint "actividadesadministrativas_pkey" PRIMARY KEY using index "actividadesadministrativas_pkey";

alter table "public"."apoyoadocencia" add constraint "apoyoadocencia_pkey" PRIMARY KEY using index "apoyoadocencia_pkey";

alter table "public"."asignaciongenerador" add constraint "asignaciongenerador_pkey" PRIMARY KEY using index "asignaciongenerador_pkey";

alter table "public"."cargamaterias" add constraint "cargamaterias_pkey" PRIMARY KEY using index "cargamaterias_pkey";

alter table "public"."convocatoria" add constraint "convocatoria_pkey" PRIMARY KEY using index "convocatoria_pkey";

alter table "public"."curriculum" add constraint "curriculum_pkey" PRIMARY KEY using index "curriculum_pkey";

alter table "public"."documento" add constraint "documento_pkey" PRIMARY KEY using index "documento_pkey";

alter table "public"."documentoinfoextra" add constraint "documentoinfoextra_pkey" PRIMARY KEY using index "documentoinfoextra_pkey";

alter table "public"."estrategiadidactica" add constraint "estrategiadidactica_pkey" PRIMARY KEY using index "estrategiadidactica_pkey";

alter table "public"."eventogeneracion" add constraint "eventogeneracion_pkey" PRIMARY KEY using index "eventogeneracion_pkey";

alter table "public"."eventovistobueno" add constraint "eventovistobueno_pkey" PRIMARY KEY using index "eventovistobueno_pkey";

alter table "public"."expediente" add constraint "expediente_pkey" PRIMARY KEY using index "expediente_pkey";

alter table "public"."materia" add constraint "materia_pkey" PRIMARY KEY using index "materia_pkey";

alter table "public"."programa" add constraint "programa_pkey" PRIMARY KEY using index "programa_pkey";

alter table "public"."recursoeducativo" add constraint "recursoeducativo_pkey" PRIMARY KEY using index "recursoeducativo_pkey";

alter table "public"."tipodocumento" add constraint "tipodocumento_pkey" PRIMARY KEY using index "tipodocumento_pkey";

alter table "public"."tutores" add constraint "tutores_pkey" PRIMARY KEY using index "tutores_pkey";

alter table "public"."actividadcomplementaria" add constraint "fk_actcompl_docente" FOREIGN KEY (docente_rfc) REFERENCES public.docente(rfc) ON DELETE CASCADE not valid;

alter table "public"."actividadcomplementaria" validate constraint "fk_actcompl_docente";

alter table "public"."actividadesadministrativas" add constraint "fk_actadmin_docente" FOREIGN KEY (docente_rfc) REFERENCES public.docente(rfc) ON DELETE CASCADE not valid;

alter table "public"."actividadesadministrativas" validate constraint "fk_actadmin_docente";

alter table "public"."apoyoadocencia" add constraint "fk_apoyo_docente" FOREIGN KEY (docente_rfc) REFERENCES public.docente(rfc) ON DELETE CASCADE not valid;

alter table "public"."apoyoadocencia" validate constraint "fk_apoyo_docente";

alter table "public"."asignaciongenerador" add constraint "fk_asignacion_generador" FOREIGN KEY (generador_rfc) REFERENCES public.generador(rfc) ON DELETE CASCADE not valid;

alter table "public"."asignaciongenerador" validate constraint "fk_asignacion_generador";

alter table "public"."asignaciongenerador" add constraint "fk_asignacion_tipodoc" FOREIGN KEY (tipodocid) REFERENCES public.tipodocumento(tipodocid) ON DELETE CASCADE not valid;

alter table "public"."asignaciongenerador" validate constraint "fk_asignacion_tipodoc";

alter table "public"."cargamaterias" add constraint "fk_carga_docente" FOREIGN KEY (docente_rfc) REFERENCES public.docente(rfc) ON DELETE CASCADE not valid;

alter table "public"."cargamaterias" validate constraint "fk_carga_docente";

alter table "public"."cargamaterias" add constraint "fk_carga_materia" FOREIGN KEY (materiaid) REFERENCES public.materia(materiaid) ON DELETE RESTRICT not valid;

alter table "public"."cargamaterias" validate constraint "fk_carga_materia";

alter table "public"."curriculum" add constraint "fk_curriculum_docente" FOREIGN KEY (docente_rfc) REFERENCES public.docente(rfc) ON DELETE CASCADE not valid;

alter table "public"."curriculum" validate constraint "fk_curriculum_docente";

alter table "public"."documento" add constraint "fk_documento_expediente" FOREIGN KEY (expedienteid) REFERENCES public.expediente(expedienteid) ON DELETE CASCADE not valid;

alter table "public"."documento" validate constraint "fk_documento_expediente";

alter table "public"."documento" add constraint "fk_documento_tipodoc" FOREIGN KEY (tipodocid) REFERENCES public.tipodocumento(tipodocid) ON DELETE RESTRICT not valid;

alter table "public"."documento" validate constraint "fk_documento_tipodoc";

alter table "public"."documentoinfoextra" add constraint "fk_docinfo_documento" FOREIGN KEY (documentoid) REFERENCES public.documento(documentoid) ON DELETE CASCADE not valid;

alter table "public"."documentoinfoextra" validate constraint "fk_docinfo_documento";

alter table "public"."estrategiadidactica" add constraint "fk_estdid_docente" FOREIGN KEY (docente_rfc) REFERENCES public.docente(rfc) ON DELETE CASCADE not valid;

alter table "public"."estrategiadidactica" validate constraint "fk_estdid_docente";

alter table "public"."estrategiadidactica" add constraint "fk_estdid_materia" FOREIGN KEY (materiaid) REFERENCES public.materia(materiaid) ON DELETE SET NULL not valid;

alter table "public"."estrategiadidactica" validate constraint "fk_estdid_materia";

alter table "public"."eventogeneracion" add constraint "fk_evgen_documento" FOREIGN KEY (documentoid) REFERENCES public.documento(documentoid) ON DELETE CASCADE not valid;

alter table "public"."eventogeneracion" validate constraint "fk_evgen_documento";

alter table "public"."eventogeneracion" add constraint "fk_evgen_generador" FOREIGN KEY (generador_rfc) REFERENCES public.generador(rfc) ON DELETE SET NULL not valid;

alter table "public"."eventogeneracion" validate constraint "fk_evgen_generador";

alter table "public"."eventovistobueno" add constraint "fk_vb_documento" FOREIGN KEY (documentoid) REFERENCES public.documento(documentoid) ON DELETE CASCADE not valid;

alter table "public"."eventovistobueno" validate constraint "fk_vb_documento";

alter table "public"."eventovistobueno" add constraint "fk_vb_revisor" FOREIGN KEY (revisor_rfc) REFERENCES public.revisor(rfc) ON DELETE SET NULL not valid;

alter table "public"."eventovistobueno" validate constraint "fk_vb_revisor";

alter table "public"."expediente" add constraint "fk_expediente_convocatoria" FOREIGN KEY (convocatoriaid) REFERENCES public.convocatoria(convocatoriaid) ON DELETE SET NULL not valid;

alter table "public"."expediente" validate constraint "fk_expediente_convocatoria";

alter table "public"."expediente" add constraint "fk_expediente_docente" FOREIGN KEY (docente_rfc) REFERENCES public.docente(rfc) ON DELETE SET NULL not valid;

alter table "public"."expediente" validate constraint "fk_expediente_docente";

alter table "public"."programa" add constraint "fk_programa_docente" FOREIGN KEY (docente_rfc) REFERENCES public.docente(rfc) ON DELETE CASCADE not valid;

alter table "public"."programa" validate constraint "fk_programa_docente";

alter table "public"."recursoeducativo" add constraint "fk_recurso_docente" FOREIGN KEY (docente_rfc) REFERENCES public.docente(rfc) ON DELETE CASCADE not valid;

alter table "public"."recursoeducativo" validate constraint "fk_recurso_docente";

alter table "public"."recursoeducativo" add constraint "fk_recurso_materia" FOREIGN KEY (materialid) REFERENCES public.materia(materiaid) ON DELETE SET NULL not valid;

alter table "public"."recursoeducativo" validate constraint "fk_recurso_materia";

alter table "public"."tutores" add constraint "fk_tutor_docente" FOREIGN KEY (docente_rfc) REFERENCES public.docente(rfc) ON DELETE CASCADE not valid;

alter table "public"."tutores" validate constraint "fk_tutor_docente";

grant delete on table "public"."actividadcomplementaria" to "anon";

grant insert on table "public"."actividadcomplementaria" to "anon";

grant references on table "public"."actividadcomplementaria" to "anon";

grant select on table "public"."actividadcomplementaria" to "anon";

grant trigger on table "public"."actividadcomplementaria" to "anon";

grant truncate on table "public"."actividadcomplementaria" to "anon";

grant update on table "public"."actividadcomplementaria" to "anon";

grant delete on table "public"."actividadcomplementaria" to "authenticated";

grant insert on table "public"."actividadcomplementaria" to "authenticated";

grant references on table "public"."actividadcomplementaria" to "authenticated";

grant select on table "public"."actividadcomplementaria" to "authenticated";

grant trigger on table "public"."actividadcomplementaria" to "authenticated";

grant truncate on table "public"."actividadcomplementaria" to "authenticated";

grant update on table "public"."actividadcomplementaria" to "authenticated";

grant delete on table "public"."actividadcomplementaria" to "postgres";

grant insert on table "public"."actividadcomplementaria" to "postgres";

grant references on table "public"."actividadcomplementaria" to "postgres";

grant select on table "public"."actividadcomplementaria" to "postgres";

grant trigger on table "public"."actividadcomplementaria" to "postgres";

grant truncate on table "public"."actividadcomplementaria" to "postgres";

grant update on table "public"."actividadcomplementaria" to "postgres";

grant delete on table "public"."actividadcomplementaria" to "service_role";

grant insert on table "public"."actividadcomplementaria" to "service_role";

grant references on table "public"."actividadcomplementaria" to "service_role";

grant select on table "public"."actividadcomplementaria" to "service_role";

grant trigger on table "public"."actividadcomplementaria" to "service_role";

grant truncate on table "public"."actividadcomplementaria" to "service_role";

grant update on table "public"."actividadcomplementaria" to "service_role";

grant delete on table "public"."actividadesadministrativas" to "anon";

grant insert on table "public"."actividadesadministrativas" to "anon";

grant references on table "public"."actividadesadministrativas" to "anon";

grant select on table "public"."actividadesadministrativas" to "anon";

grant trigger on table "public"."actividadesadministrativas" to "anon";

grant truncate on table "public"."actividadesadministrativas" to "anon";

grant update on table "public"."actividadesadministrativas" to "anon";

grant delete on table "public"."actividadesadministrativas" to "authenticated";

grant insert on table "public"."actividadesadministrativas" to "authenticated";

grant references on table "public"."actividadesadministrativas" to "authenticated";

grant select on table "public"."actividadesadministrativas" to "authenticated";

grant trigger on table "public"."actividadesadministrativas" to "authenticated";

grant truncate on table "public"."actividadesadministrativas" to "authenticated";

grant update on table "public"."actividadesadministrativas" to "authenticated";

grant delete on table "public"."actividadesadministrativas" to "postgres";

grant insert on table "public"."actividadesadministrativas" to "postgres";

grant references on table "public"."actividadesadministrativas" to "postgres";

grant select on table "public"."actividadesadministrativas" to "postgres";

grant trigger on table "public"."actividadesadministrativas" to "postgres";

grant truncate on table "public"."actividadesadministrativas" to "postgres";

grant update on table "public"."actividadesadministrativas" to "postgres";

grant delete on table "public"."actividadesadministrativas" to "service_role";

grant insert on table "public"."actividadesadministrativas" to "service_role";

grant references on table "public"."actividadesadministrativas" to "service_role";

grant select on table "public"."actividadesadministrativas" to "service_role";

grant trigger on table "public"."actividadesadministrativas" to "service_role";

grant truncate on table "public"."actividadesadministrativas" to "service_role";

grant update on table "public"."actividadesadministrativas" to "service_role";

grant delete on table "public"."apoyoadocencia" to "anon";

grant insert on table "public"."apoyoadocencia" to "anon";

grant references on table "public"."apoyoadocencia" to "anon";

grant select on table "public"."apoyoadocencia" to "anon";

grant trigger on table "public"."apoyoadocencia" to "anon";

grant truncate on table "public"."apoyoadocencia" to "anon";

grant update on table "public"."apoyoadocencia" to "anon";

grant delete on table "public"."apoyoadocencia" to "authenticated";

grant insert on table "public"."apoyoadocencia" to "authenticated";

grant references on table "public"."apoyoadocencia" to "authenticated";

grant select on table "public"."apoyoadocencia" to "authenticated";

grant trigger on table "public"."apoyoadocencia" to "authenticated";

grant truncate on table "public"."apoyoadocencia" to "authenticated";

grant update on table "public"."apoyoadocencia" to "authenticated";

grant delete on table "public"."apoyoadocencia" to "postgres";

grant insert on table "public"."apoyoadocencia" to "postgres";

grant references on table "public"."apoyoadocencia" to "postgres";

grant select on table "public"."apoyoadocencia" to "postgres";

grant trigger on table "public"."apoyoadocencia" to "postgres";

grant truncate on table "public"."apoyoadocencia" to "postgres";

grant update on table "public"."apoyoadocencia" to "postgres";

grant delete on table "public"."apoyoadocencia" to "service_role";

grant insert on table "public"."apoyoadocencia" to "service_role";

grant references on table "public"."apoyoadocencia" to "service_role";

grant select on table "public"."apoyoadocencia" to "service_role";

grant trigger on table "public"."apoyoadocencia" to "service_role";

grant truncate on table "public"."apoyoadocencia" to "service_role";

grant update on table "public"."apoyoadocencia" to "service_role";

grant delete on table "public"."asignaciongenerador" to "anon";

grant insert on table "public"."asignaciongenerador" to "anon";

grant references on table "public"."asignaciongenerador" to "anon";

grant select on table "public"."asignaciongenerador" to "anon";

grant trigger on table "public"."asignaciongenerador" to "anon";

grant truncate on table "public"."asignaciongenerador" to "anon";

grant update on table "public"."asignaciongenerador" to "anon";

grant delete on table "public"."asignaciongenerador" to "authenticated";

grant insert on table "public"."asignaciongenerador" to "authenticated";

grant references on table "public"."asignaciongenerador" to "authenticated";

grant select on table "public"."asignaciongenerador" to "authenticated";

grant trigger on table "public"."asignaciongenerador" to "authenticated";

grant truncate on table "public"."asignaciongenerador" to "authenticated";

grant update on table "public"."asignaciongenerador" to "authenticated";

grant delete on table "public"."asignaciongenerador" to "postgres";

grant insert on table "public"."asignaciongenerador" to "postgres";

grant references on table "public"."asignaciongenerador" to "postgres";

grant select on table "public"."asignaciongenerador" to "postgres";

grant trigger on table "public"."asignaciongenerador" to "postgres";

grant truncate on table "public"."asignaciongenerador" to "postgres";

grant update on table "public"."asignaciongenerador" to "postgres";

grant delete on table "public"."asignaciongenerador" to "service_role";

grant insert on table "public"."asignaciongenerador" to "service_role";

grant references on table "public"."asignaciongenerador" to "service_role";

grant select on table "public"."asignaciongenerador" to "service_role";

grant trigger on table "public"."asignaciongenerador" to "service_role";

grant truncate on table "public"."asignaciongenerador" to "service_role";

grant update on table "public"."asignaciongenerador" to "service_role";

grant delete on table "public"."cargamaterias" to "anon";

grant insert on table "public"."cargamaterias" to "anon";

grant references on table "public"."cargamaterias" to "anon";

grant select on table "public"."cargamaterias" to "anon";

grant trigger on table "public"."cargamaterias" to "anon";

grant truncate on table "public"."cargamaterias" to "anon";

grant update on table "public"."cargamaterias" to "anon";

grant delete on table "public"."cargamaterias" to "authenticated";

grant insert on table "public"."cargamaterias" to "authenticated";

grant references on table "public"."cargamaterias" to "authenticated";

grant select on table "public"."cargamaterias" to "authenticated";

grant trigger on table "public"."cargamaterias" to "authenticated";

grant truncate on table "public"."cargamaterias" to "authenticated";

grant update on table "public"."cargamaterias" to "authenticated";

grant delete on table "public"."cargamaterias" to "postgres";

grant insert on table "public"."cargamaterias" to "postgres";

grant references on table "public"."cargamaterias" to "postgres";

grant select on table "public"."cargamaterias" to "postgres";

grant trigger on table "public"."cargamaterias" to "postgres";

grant truncate on table "public"."cargamaterias" to "postgres";

grant update on table "public"."cargamaterias" to "postgres";

grant delete on table "public"."cargamaterias" to "service_role";

grant insert on table "public"."cargamaterias" to "service_role";

grant references on table "public"."cargamaterias" to "service_role";

grant select on table "public"."cargamaterias" to "service_role";

grant trigger on table "public"."cargamaterias" to "service_role";

grant truncate on table "public"."cargamaterias" to "service_role";

grant update on table "public"."cargamaterias" to "service_role";

grant delete on table "public"."convocatoria" to "anon";

grant insert on table "public"."convocatoria" to "anon";

grant references on table "public"."convocatoria" to "anon";

grant select on table "public"."convocatoria" to "anon";

grant trigger on table "public"."convocatoria" to "anon";

grant truncate on table "public"."convocatoria" to "anon";

grant update on table "public"."convocatoria" to "anon";

grant delete on table "public"."convocatoria" to "authenticated";

grant insert on table "public"."convocatoria" to "authenticated";

grant references on table "public"."convocatoria" to "authenticated";

grant select on table "public"."convocatoria" to "authenticated";

grant trigger on table "public"."convocatoria" to "authenticated";

grant truncate on table "public"."convocatoria" to "authenticated";

grant update on table "public"."convocatoria" to "authenticated";

grant delete on table "public"."convocatoria" to "postgres";

grant insert on table "public"."convocatoria" to "postgres";

grant references on table "public"."convocatoria" to "postgres";

grant select on table "public"."convocatoria" to "postgres";

grant trigger on table "public"."convocatoria" to "postgres";

grant truncate on table "public"."convocatoria" to "postgres";

grant update on table "public"."convocatoria" to "postgres";

grant delete on table "public"."convocatoria" to "service_role";

grant insert on table "public"."convocatoria" to "service_role";

grant references on table "public"."convocatoria" to "service_role";

grant select on table "public"."convocatoria" to "service_role";

grant trigger on table "public"."convocatoria" to "service_role";

grant truncate on table "public"."convocatoria" to "service_role";

grant update on table "public"."convocatoria" to "service_role";

grant delete on table "public"."curriculum" to "anon";

grant insert on table "public"."curriculum" to "anon";

grant references on table "public"."curriculum" to "anon";

grant select on table "public"."curriculum" to "anon";

grant trigger on table "public"."curriculum" to "anon";

grant truncate on table "public"."curriculum" to "anon";

grant update on table "public"."curriculum" to "anon";

grant delete on table "public"."curriculum" to "authenticated";

grant insert on table "public"."curriculum" to "authenticated";

grant references on table "public"."curriculum" to "authenticated";

grant select on table "public"."curriculum" to "authenticated";

grant trigger on table "public"."curriculum" to "authenticated";

grant truncate on table "public"."curriculum" to "authenticated";

grant update on table "public"."curriculum" to "authenticated";

grant delete on table "public"."curriculum" to "postgres";

grant insert on table "public"."curriculum" to "postgres";

grant references on table "public"."curriculum" to "postgres";

grant select on table "public"."curriculum" to "postgres";

grant trigger on table "public"."curriculum" to "postgres";

grant truncate on table "public"."curriculum" to "postgres";

grant update on table "public"."curriculum" to "postgres";

grant delete on table "public"."curriculum" to "service_role";

grant insert on table "public"."curriculum" to "service_role";

grant references on table "public"."curriculum" to "service_role";

grant select on table "public"."curriculum" to "service_role";

grant trigger on table "public"."curriculum" to "service_role";

grant truncate on table "public"."curriculum" to "service_role";

grant update on table "public"."curriculum" to "service_role";

grant delete on table "public"."documento" to "anon";

grant insert on table "public"."documento" to "anon";

grant references on table "public"."documento" to "anon";

grant select on table "public"."documento" to "anon";

grant trigger on table "public"."documento" to "anon";

grant truncate on table "public"."documento" to "anon";

grant update on table "public"."documento" to "anon";

grant delete on table "public"."documento" to "authenticated";

grant insert on table "public"."documento" to "authenticated";

grant references on table "public"."documento" to "authenticated";

grant select on table "public"."documento" to "authenticated";

grant trigger on table "public"."documento" to "authenticated";

grant truncate on table "public"."documento" to "authenticated";

grant update on table "public"."documento" to "authenticated";

grant delete on table "public"."documento" to "postgres";

grant insert on table "public"."documento" to "postgres";

grant references on table "public"."documento" to "postgres";

grant select on table "public"."documento" to "postgres";

grant trigger on table "public"."documento" to "postgres";

grant truncate on table "public"."documento" to "postgres";

grant update on table "public"."documento" to "postgres";

grant delete on table "public"."documento" to "service_role";

grant insert on table "public"."documento" to "service_role";

grant references on table "public"."documento" to "service_role";

grant select on table "public"."documento" to "service_role";

grant trigger on table "public"."documento" to "service_role";

grant truncate on table "public"."documento" to "service_role";

grant update on table "public"."documento" to "service_role";

grant delete on table "public"."documentoinfoextra" to "anon";

grant insert on table "public"."documentoinfoextra" to "anon";

grant references on table "public"."documentoinfoextra" to "anon";

grant select on table "public"."documentoinfoextra" to "anon";

grant trigger on table "public"."documentoinfoextra" to "anon";

grant truncate on table "public"."documentoinfoextra" to "anon";

grant update on table "public"."documentoinfoextra" to "anon";

grant delete on table "public"."documentoinfoextra" to "authenticated";

grant insert on table "public"."documentoinfoextra" to "authenticated";

grant references on table "public"."documentoinfoextra" to "authenticated";

grant select on table "public"."documentoinfoextra" to "authenticated";

grant trigger on table "public"."documentoinfoextra" to "authenticated";

grant truncate on table "public"."documentoinfoextra" to "authenticated";

grant update on table "public"."documentoinfoextra" to "authenticated";

grant delete on table "public"."documentoinfoextra" to "postgres";

grant insert on table "public"."documentoinfoextra" to "postgres";

grant references on table "public"."documentoinfoextra" to "postgres";

grant select on table "public"."documentoinfoextra" to "postgres";

grant trigger on table "public"."documentoinfoextra" to "postgres";

grant truncate on table "public"."documentoinfoextra" to "postgres";

grant update on table "public"."documentoinfoextra" to "postgres";

grant delete on table "public"."documentoinfoextra" to "service_role";

grant insert on table "public"."documentoinfoextra" to "service_role";

grant references on table "public"."documentoinfoextra" to "service_role";

grant select on table "public"."documentoinfoextra" to "service_role";

grant trigger on table "public"."documentoinfoextra" to "service_role";

grant truncate on table "public"."documentoinfoextra" to "service_role";

grant update on table "public"."documentoinfoextra" to "service_role";

grant delete on table "public"."estrategiadidactica" to "anon";

grant insert on table "public"."estrategiadidactica" to "anon";

grant references on table "public"."estrategiadidactica" to "anon";

grant select on table "public"."estrategiadidactica" to "anon";

grant trigger on table "public"."estrategiadidactica" to "anon";

grant truncate on table "public"."estrategiadidactica" to "anon";

grant update on table "public"."estrategiadidactica" to "anon";

grant delete on table "public"."estrategiadidactica" to "authenticated";

grant insert on table "public"."estrategiadidactica" to "authenticated";

grant references on table "public"."estrategiadidactica" to "authenticated";

grant select on table "public"."estrategiadidactica" to "authenticated";

grant trigger on table "public"."estrategiadidactica" to "authenticated";

grant truncate on table "public"."estrategiadidactica" to "authenticated";

grant update on table "public"."estrategiadidactica" to "authenticated";

grant delete on table "public"."estrategiadidactica" to "postgres";

grant insert on table "public"."estrategiadidactica" to "postgres";

grant references on table "public"."estrategiadidactica" to "postgres";

grant select on table "public"."estrategiadidactica" to "postgres";

grant trigger on table "public"."estrategiadidactica" to "postgres";

grant truncate on table "public"."estrategiadidactica" to "postgres";

grant update on table "public"."estrategiadidactica" to "postgres";

grant delete on table "public"."estrategiadidactica" to "service_role";

grant insert on table "public"."estrategiadidactica" to "service_role";

grant references on table "public"."estrategiadidactica" to "service_role";

grant select on table "public"."estrategiadidactica" to "service_role";

grant trigger on table "public"."estrategiadidactica" to "service_role";

grant truncate on table "public"."estrategiadidactica" to "service_role";

grant update on table "public"."estrategiadidactica" to "service_role";

grant delete on table "public"."eventogeneracion" to "anon";

grant insert on table "public"."eventogeneracion" to "anon";

grant references on table "public"."eventogeneracion" to "anon";

grant select on table "public"."eventogeneracion" to "anon";

grant trigger on table "public"."eventogeneracion" to "anon";

grant truncate on table "public"."eventogeneracion" to "anon";

grant update on table "public"."eventogeneracion" to "anon";

grant delete on table "public"."eventogeneracion" to "authenticated";

grant insert on table "public"."eventogeneracion" to "authenticated";

grant references on table "public"."eventogeneracion" to "authenticated";

grant select on table "public"."eventogeneracion" to "authenticated";

grant trigger on table "public"."eventogeneracion" to "authenticated";

grant truncate on table "public"."eventogeneracion" to "authenticated";

grant update on table "public"."eventogeneracion" to "authenticated";

grant delete on table "public"."eventogeneracion" to "postgres";

grant insert on table "public"."eventogeneracion" to "postgres";

grant references on table "public"."eventogeneracion" to "postgres";

grant select on table "public"."eventogeneracion" to "postgres";

grant trigger on table "public"."eventogeneracion" to "postgres";

grant truncate on table "public"."eventogeneracion" to "postgres";

grant update on table "public"."eventogeneracion" to "postgres";

grant delete on table "public"."eventogeneracion" to "service_role";

grant insert on table "public"."eventogeneracion" to "service_role";

grant references on table "public"."eventogeneracion" to "service_role";

grant select on table "public"."eventogeneracion" to "service_role";

grant trigger on table "public"."eventogeneracion" to "service_role";

grant truncate on table "public"."eventogeneracion" to "service_role";

grant update on table "public"."eventogeneracion" to "service_role";

grant delete on table "public"."eventovistobueno" to "anon";

grant insert on table "public"."eventovistobueno" to "anon";

grant references on table "public"."eventovistobueno" to "anon";

grant select on table "public"."eventovistobueno" to "anon";

grant trigger on table "public"."eventovistobueno" to "anon";

grant truncate on table "public"."eventovistobueno" to "anon";

grant update on table "public"."eventovistobueno" to "anon";

grant delete on table "public"."eventovistobueno" to "authenticated";

grant insert on table "public"."eventovistobueno" to "authenticated";

grant references on table "public"."eventovistobueno" to "authenticated";

grant select on table "public"."eventovistobueno" to "authenticated";

grant trigger on table "public"."eventovistobueno" to "authenticated";

grant truncate on table "public"."eventovistobueno" to "authenticated";

grant update on table "public"."eventovistobueno" to "authenticated";

grant delete on table "public"."eventovistobueno" to "postgres";

grant insert on table "public"."eventovistobueno" to "postgres";

grant references on table "public"."eventovistobueno" to "postgres";

grant select on table "public"."eventovistobueno" to "postgres";

grant trigger on table "public"."eventovistobueno" to "postgres";

grant truncate on table "public"."eventovistobueno" to "postgres";

grant update on table "public"."eventovistobueno" to "postgres";

grant delete on table "public"."eventovistobueno" to "service_role";

grant insert on table "public"."eventovistobueno" to "service_role";

grant references on table "public"."eventovistobueno" to "service_role";

grant select on table "public"."eventovistobueno" to "service_role";

grant trigger on table "public"."eventovistobueno" to "service_role";

grant truncate on table "public"."eventovistobueno" to "service_role";

grant update on table "public"."eventovistobueno" to "service_role";

grant delete on table "public"."expediente" to "anon";

grant insert on table "public"."expediente" to "anon";

grant references on table "public"."expediente" to "anon";

grant select on table "public"."expediente" to "anon";

grant trigger on table "public"."expediente" to "anon";

grant truncate on table "public"."expediente" to "anon";

grant update on table "public"."expediente" to "anon";

grant delete on table "public"."expediente" to "authenticated";

grant insert on table "public"."expediente" to "authenticated";

grant references on table "public"."expediente" to "authenticated";

grant select on table "public"."expediente" to "authenticated";

grant trigger on table "public"."expediente" to "authenticated";

grant truncate on table "public"."expediente" to "authenticated";

grant update on table "public"."expediente" to "authenticated";

grant delete on table "public"."expediente" to "postgres";

grant insert on table "public"."expediente" to "postgres";

grant references on table "public"."expediente" to "postgres";

grant select on table "public"."expediente" to "postgres";

grant trigger on table "public"."expediente" to "postgres";

grant truncate on table "public"."expediente" to "postgres";

grant update on table "public"."expediente" to "postgres";

grant delete on table "public"."expediente" to "service_role";

grant insert on table "public"."expediente" to "service_role";

grant references on table "public"."expediente" to "service_role";

grant select on table "public"."expediente" to "service_role";

grant trigger on table "public"."expediente" to "service_role";

grant truncate on table "public"."expediente" to "service_role";

grant update on table "public"."expediente" to "service_role";

grant delete on table "public"."materia" to "anon";

grant insert on table "public"."materia" to "anon";

grant references on table "public"."materia" to "anon";

grant select on table "public"."materia" to "anon";

grant trigger on table "public"."materia" to "anon";

grant truncate on table "public"."materia" to "anon";

grant update on table "public"."materia" to "anon";

grant delete on table "public"."materia" to "authenticated";

grant insert on table "public"."materia" to "authenticated";

grant references on table "public"."materia" to "authenticated";

grant select on table "public"."materia" to "authenticated";

grant trigger on table "public"."materia" to "authenticated";

grant truncate on table "public"."materia" to "authenticated";

grant update on table "public"."materia" to "authenticated";

grant delete on table "public"."materia" to "postgres";

grant insert on table "public"."materia" to "postgres";

grant references on table "public"."materia" to "postgres";

grant select on table "public"."materia" to "postgres";

grant trigger on table "public"."materia" to "postgres";

grant truncate on table "public"."materia" to "postgres";

grant update on table "public"."materia" to "postgres";

grant delete on table "public"."materia" to "service_role";

grant insert on table "public"."materia" to "service_role";

grant references on table "public"."materia" to "service_role";

grant select on table "public"."materia" to "service_role";

grant trigger on table "public"."materia" to "service_role";

grant truncate on table "public"."materia" to "service_role";

grant update on table "public"."materia" to "service_role";

grant delete on table "public"."programa" to "anon";

grant insert on table "public"."programa" to "anon";

grant references on table "public"."programa" to "anon";

grant select on table "public"."programa" to "anon";

grant trigger on table "public"."programa" to "anon";

grant truncate on table "public"."programa" to "anon";

grant update on table "public"."programa" to "anon";

grant delete on table "public"."programa" to "authenticated";

grant insert on table "public"."programa" to "authenticated";

grant references on table "public"."programa" to "authenticated";

grant select on table "public"."programa" to "authenticated";

grant trigger on table "public"."programa" to "authenticated";

grant truncate on table "public"."programa" to "authenticated";

grant update on table "public"."programa" to "authenticated";

grant delete on table "public"."programa" to "postgres";

grant insert on table "public"."programa" to "postgres";

grant references on table "public"."programa" to "postgres";

grant select on table "public"."programa" to "postgres";

grant trigger on table "public"."programa" to "postgres";

grant truncate on table "public"."programa" to "postgres";

grant update on table "public"."programa" to "postgres";

grant delete on table "public"."programa" to "service_role";

grant insert on table "public"."programa" to "service_role";

grant references on table "public"."programa" to "service_role";

grant select on table "public"."programa" to "service_role";

grant trigger on table "public"."programa" to "service_role";

grant truncate on table "public"."programa" to "service_role";

grant update on table "public"."programa" to "service_role";

grant delete on table "public"."recursoeducativo" to "anon";

grant insert on table "public"."recursoeducativo" to "anon";

grant references on table "public"."recursoeducativo" to "anon";

grant select on table "public"."recursoeducativo" to "anon";

grant trigger on table "public"."recursoeducativo" to "anon";

grant truncate on table "public"."recursoeducativo" to "anon";

grant update on table "public"."recursoeducativo" to "anon";

grant delete on table "public"."recursoeducativo" to "authenticated";

grant insert on table "public"."recursoeducativo" to "authenticated";

grant references on table "public"."recursoeducativo" to "authenticated";

grant select on table "public"."recursoeducativo" to "authenticated";

grant trigger on table "public"."recursoeducativo" to "authenticated";

grant truncate on table "public"."recursoeducativo" to "authenticated";

grant update on table "public"."recursoeducativo" to "authenticated";

grant delete on table "public"."recursoeducativo" to "postgres";

grant insert on table "public"."recursoeducativo" to "postgres";

grant references on table "public"."recursoeducativo" to "postgres";

grant select on table "public"."recursoeducativo" to "postgres";

grant trigger on table "public"."recursoeducativo" to "postgres";

grant truncate on table "public"."recursoeducativo" to "postgres";

grant update on table "public"."recursoeducativo" to "postgres";

grant delete on table "public"."recursoeducativo" to "service_role";

grant insert on table "public"."recursoeducativo" to "service_role";

grant references on table "public"."recursoeducativo" to "service_role";

grant select on table "public"."recursoeducativo" to "service_role";

grant trigger on table "public"."recursoeducativo" to "service_role";

grant truncate on table "public"."recursoeducativo" to "service_role";

grant update on table "public"."recursoeducativo" to "service_role";

grant delete on table "public"."tipodocumento" to "anon";

grant insert on table "public"."tipodocumento" to "anon";

grant references on table "public"."tipodocumento" to "anon";

grant select on table "public"."tipodocumento" to "anon";

grant trigger on table "public"."tipodocumento" to "anon";

grant truncate on table "public"."tipodocumento" to "anon";

grant update on table "public"."tipodocumento" to "anon";

grant delete on table "public"."tipodocumento" to "authenticated";

grant insert on table "public"."tipodocumento" to "authenticated";

grant references on table "public"."tipodocumento" to "authenticated";

grant select on table "public"."tipodocumento" to "authenticated";

grant trigger on table "public"."tipodocumento" to "authenticated";

grant truncate on table "public"."tipodocumento" to "authenticated";

grant update on table "public"."tipodocumento" to "authenticated";

grant delete on table "public"."tipodocumento" to "postgres";

grant insert on table "public"."tipodocumento" to "postgres";

grant references on table "public"."tipodocumento" to "postgres";

grant select on table "public"."tipodocumento" to "postgres";

grant trigger on table "public"."tipodocumento" to "postgres";

grant truncate on table "public"."tipodocumento" to "postgres";

grant update on table "public"."tipodocumento" to "postgres";

grant delete on table "public"."tipodocumento" to "service_role";

grant insert on table "public"."tipodocumento" to "service_role";

grant references on table "public"."tipodocumento" to "service_role";

grant select on table "public"."tipodocumento" to "service_role";

grant trigger on table "public"."tipodocumento" to "service_role";

grant truncate on table "public"."tipodocumento" to "service_role";

grant update on table "public"."tipodocumento" to "service_role";

grant delete on table "public"."tutores" to "anon";

grant insert on table "public"."tutores" to "anon";

grant references on table "public"."tutores" to "anon";

grant select on table "public"."tutores" to "anon";

grant trigger on table "public"."tutores" to "anon";

grant truncate on table "public"."tutores" to "anon";

grant update on table "public"."tutores" to "anon";

grant delete on table "public"."tutores" to "authenticated";

grant insert on table "public"."tutores" to "authenticated";

grant references on table "public"."tutores" to "authenticated";

grant select on table "public"."tutores" to "authenticated";

grant trigger on table "public"."tutores" to "authenticated";

grant truncate on table "public"."tutores" to "authenticated";

grant update on table "public"."tutores" to "authenticated";

grant delete on table "public"."tutores" to "postgres";

grant insert on table "public"."tutores" to "postgres";

grant references on table "public"."tutores" to "postgres";

grant select on table "public"."tutores" to "postgres";

grant trigger on table "public"."tutores" to "postgres";

grant truncate on table "public"."tutores" to "postgres";

grant update on table "public"."tutores" to "postgres";

grant delete on table "public"."tutores" to "service_role";

grant insert on table "public"."tutores" to "service_role";

grant references on table "public"."tutores" to "service_role";

grant select on table "public"."tutores" to "service_role";

grant trigger on table "public"."tutores" to "service_role";

grant truncate on table "public"."tutores" to "service_role";

grant update on table "public"."tutores" to "service_role";


