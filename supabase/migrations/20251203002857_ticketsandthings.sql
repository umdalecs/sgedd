alter table "public"."eventogeneracion" drop constraint "eventogeneracion_tipodocumento_fkey";

  create table "public"."tickets" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "matter" character varying,
    "message" character varying,
    "document_id" uuid null
      );


alter table "public"."tickets" enable row level security;

alter table "public"."eventogeneracion" drop column "tipodocumento";

alter table "public"."eventogeneracion" add column "documento_id" uuid not null;

CREATE UNIQUE INDEX tickets_pkey ON public.tickets USING btree (id);

alter table "public"."tickets" add constraint "tickets_pkey" PRIMARY KEY using index "tickets_pkey";

alter table "public"."eventogeneracion" add constraint "eventogeneracion_documento_id_fkey" FOREIGN KEY (documento_id) REFERENCES public.documento(documentoid) not valid;

alter table "public"."eventogeneracion" validate constraint "eventogeneracion_documento_id_fkey";

alter table "public"."tickets" add constraint "tickets_document_id_fkey" FOREIGN KEY (document_id) REFERENCES public.documento(documentoid) not valid;

alter table "public"."tickets" validate constraint "tickets_document_id_fkey";

grant delete on table "public"."tickets" to "anon";

grant insert on table "public"."tickets" to "anon";

grant references on table "public"."tickets" to "anon";

grant select on table "public"."tickets" to "anon";

grant trigger on table "public"."tickets" to "anon";

grant truncate on table "public"."tickets" to "anon";

grant update on table "public"."tickets" to "anon";

grant delete on table "public"."tickets" to "authenticated";

grant insert on table "public"."tickets" to "authenticated";

grant references on table "public"."tickets" to "authenticated";

grant select on table "public"."tickets" to "authenticated";

grant trigger on table "public"."tickets" to "authenticated";

grant truncate on table "public"."tickets" to "authenticated";

grant update on table "public"."tickets" to "authenticated";

grant delete on table "public"."tickets" to "postgres";

grant insert on table "public"."tickets" to "postgres";

grant references on table "public"."tickets" to "postgres";

grant select on table "public"."tickets" to "postgres";

grant trigger on table "public"."tickets" to "postgres";

grant truncate on table "public"."tickets" to "postgres";

grant update on table "public"."tickets" to "postgres";

grant delete on table "public"."tickets" to "service_role";

grant insert on table "public"."tickets" to "service_role";

grant references on table "public"."tickets" to "service_role";

grant select on table "public"."tickets" to "service_role";

grant trigger on table "public"."tickets" to "service_role";

grant truncate on table "public"."tickets" to "service_role";

grant update on table "public"."tickets" to "service_role";


