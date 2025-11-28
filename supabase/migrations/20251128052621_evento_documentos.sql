alter table "public"."eventogeneracion" drop constraint "fk_evgen_documento";

alter table "public"."eventogeneracion" drop constraint "fk_evgen_generador";

alter table "public"."eventogeneracion" drop constraint "eventogeneracion_pkey";

drop index if exists "public"."eventogeneracion_pkey";

alter table "public"."documento" drop column "fechasolicitud";

alter table "public"."eventogeneracion" drop column "documentoid";

alter table "public"."eventogeneracion" drop column "fechageneracion";

alter table "public"."eventogeneracion" drop column "generacionid";

alter table "public"."eventogeneracion" add column "fechasolicitud" date;

alter table "public"."eventogeneracion" add column "idevento" uuid not null default gen_random_uuid();

alter table "public"."eventogeneracion" add column "idsolicitante" text;

alter table "public"."eventogeneracion" add column "tipodocumento" uuid not null;

CREATE UNIQUE INDEX eventogeneracion_pkey ON public.eventogeneracion USING btree (idevento);

alter table "public"."eventogeneracion" add constraint "eventogeneracion_pkey" PRIMARY KEY using index "eventogeneracion_pkey";

alter table "public"."eventogeneracion" add constraint "eventogeneracion_generador_rfc_fkey" FOREIGN KEY (generador_rfc) REFERENCES public.generador(rfc) not valid;

alter table "public"."eventogeneracion" validate constraint "eventogeneracion_generador_rfc_fkey";

alter table "public"."eventogeneracion" add constraint "eventogeneracion_idsolicitante_fkey" FOREIGN KEY (idsolicitante) REFERENCES public.docente(rfc) not valid;

alter table "public"."eventogeneracion" validate constraint "eventogeneracion_idsolicitante_fkey";

alter table "public"."eventogeneracion" add constraint "eventogeneracion_tipodocumento_fkey" FOREIGN KEY (tipodocumento) REFERENCES public.tipodocumento(tipodocid) not valid;

alter table "public"."eventogeneracion" validate constraint "eventogeneracion_tipodocumento_fkey";


