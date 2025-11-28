
  create table "public"."docente" (
    "rfc" text not null,
    "fecha_ingreso" date not null,
    "hrs_carga" integer not null,
    "estatus_plaza" text not null,
    "clave_presupuestal" text not null,
    "departamento" text not null,
    "numero_afiliacion" text,
    "categoria_plaza" text
      );



  create table "public"."generador" (
    "rfc" text not null
      );



  create table "public"."revisor" (
    "rfc" text not null
      );



  create table "public"."usuarios" (
    "id" text not null,
    "rol" text not null,
    "nombre" text not null,
    "ap_pat" text not null,
    "ap_mat" text not null,
    "puesto" text not null,
    "supabase_user" uuid,
    "docente_rfc" text,
    "generador_rfc" text,
    "revisor_rfc" text
      );


CREATE UNIQUE INDEX docente_pkey ON public.docente USING btree (rfc);

CREATE UNIQUE INDEX generador_pkey ON public.generador USING btree (rfc);

CREATE UNIQUE INDEX revisor_pkey ON public.revisor USING btree (rfc);

CREATE UNIQUE INDEX usuarios_pkey ON public.usuarios USING btree (id);

alter table "public"."docente" add constraint "docente_pkey" PRIMARY KEY using index "docente_pkey";

alter table "public"."generador" add constraint "generador_pkey" PRIMARY KEY using index "generador_pkey";

alter table "public"."revisor" add constraint "revisor_pkey" PRIMARY KEY using index "revisor_pkey";

alter table "public"."usuarios" add constraint "usuarios_pkey" PRIMARY KEY using index "usuarios_pkey";

alter table "public"."usuarios" add constraint "usuarios_docente_rfc_fkey" FOREIGN KEY (docente_rfc) REFERENCES public.docente(rfc) not valid;

alter table "public"."usuarios" validate constraint "usuarios_docente_rfc_fkey";

alter table "public"."usuarios" add constraint "usuarios_generador_rfc_fkey" FOREIGN KEY (generador_rfc) REFERENCES public.generador(rfc) not valid;

alter table "public"."usuarios" validate constraint "usuarios_generador_rfc_fkey";

alter table "public"."usuarios" add constraint "usuarios_revisor_rfc_fkey" FOREIGN KEY (revisor_rfc) REFERENCES public.revisor(rfc) not valid;

alter table "public"."usuarios" validate constraint "usuarios_revisor_rfc_fkey";

alter table "public"."usuarios" add constraint "usuarios_supabase_user_fkey" FOREIGN KEY (supabase_user) REFERENCES auth.users(id) not valid;

alter table "public"."usuarios" validate constraint "usuarios_supabase_user_fkey";

grant delete on table "public"."docente" to "anon";

grant insert on table "public"."docente" to "anon";

grant references on table "public"."docente" to "anon";

grant select on table "public"."docente" to "anon";

grant trigger on table "public"."docente" to "anon";

grant truncate on table "public"."docente" to "anon";

grant update on table "public"."docente" to "anon";

grant delete on table "public"."docente" to "authenticated";

grant insert on table "public"."docente" to "authenticated";

grant references on table "public"."docente" to "authenticated";

grant select on table "public"."docente" to "authenticated";

grant trigger on table "public"."docente" to "authenticated";

grant truncate on table "public"."docente" to "authenticated";

grant update on table "public"."docente" to "authenticated";

grant delete on table "public"."docente" to "postgres";

grant insert on table "public"."docente" to "postgres";

grant references on table "public"."docente" to "postgres";

grant select on table "public"."docente" to "postgres";

grant trigger on table "public"."docente" to "postgres";

grant truncate on table "public"."docente" to "postgres";

grant update on table "public"."docente" to "postgres";

grant delete on table "public"."docente" to "service_role";

grant insert on table "public"."docente" to "service_role";

grant references on table "public"."docente" to "service_role";

grant select on table "public"."docente" to "service_role";

grant trigger on table "public"."docente" to "service_role";

grant truncate on table "public"."docente" to "service_role";

grant update on table "public"."docente" to "service_role";

grant delete on table "public"."generador" to "anon";

grant insert on table "public"."generador" to "anon";

grant references on table "public"."generador" to "anon";

grant select on table "public"."generador" to "anon";

grant trigger on table "public"."generador" to "anon";

grant truncate on table "public"."generador" to "anon";

grant update on table "public"."generador" to "anon";

grant delete on table "public"."generador" to "authenticated";

grant insert on table "public"."generador" to "authenticated";

grant references on table "public"."generador" to "authenticated";

grant select on table "public"."generador" to "authenticated";

grant trigger on table "public"."generador" to "authenticated";

grant truncate on table "public"."generador" to "authenticated";

grant update on table "public"."generador" to "authenticated";

grant delete on table "public"."generador" to "postgres";

grant insert on table "public"."generador" to "postgres";

grant references on table "public"."generador" to "postgres";

grant select on table "public"."generador" to "postgres";

grant trigger on table "public"."generador" to "postgres";

grant truncate on table "public"."generador" to "postgres";

grant update on table "public"."generador" to "postgres";

grant delete on table "public"."generador" to "service_role";

grant insert on table "public"."generador" to "service_role";

grant references on table "public"."generador" to "service_role";

grant select on table "public"."generador" to "service_role";

grant trigger on table "public"."generador" to "service_role";

grant truncate on table "public"."generador" to "service_role";

grant update on table "public"."generador" to "service_role";

grant delete on table "public"."revisor" to "anon";

grant insert on table "public"."revisor" to "anon";

grant references on table "public"."revisor" to "anon";

grant select on table "public"."revisor" to "anon";

grant trigger on table "public"."revisor" to "anon";

grant truncate on table "public"."revisor" to "anon";

grant update on table "public"."revisor" to "anon";

grant delete on table "public"."revisor" to "authenticated";

grant insert on table "public"."revisor" to "authenticated";

grant references on table "public"."revisor" to "authenticated";

grant select on table "public"."revisor" to "authenticated";

grant trigger on table "public"."revisor" to "authenticated";

grant truncate on table "public"."revisor" to "authenticated";

grant update on table "public"."revisor" to "authenticated";

grant delete on table "public"."revisor" to "postgres";

grant insert on table "public"."revisor" to "postgres";

grant references on table "public"."revisor" to "postgres";

grant select on table "public"."revisor" to "postgres";

grant trigger on table "public"."revisor" to "postgres";

grant truncate on table "public"."revisor" to "postgres";

grant update on table "public"."revisor" to "postgres";

grant delete on table "public"."revisor" to "service_role";

grant insert on table "public"."revisor" to "service_role";

grant references on table "public"."revisor" to "service_role";

grant select on table "public"."revisor" to "service_role";

grant trigger on table "public"."revisor" to "service_role";

grant truncate on table "public"."revisor" to "service_role";

grant update on table "public"."revisor" to "service_role";

grant delete on table "public"."usuarios" to "anon";

grant insert on table "public"."usuarios" to "anon";

grant references on table "public"."usuarios" to "anon";

grant select on table "public"."usuarios" to "anon";

grant trigger on table "public"."usuarios" to "anon";

grant truncate on table "public"."usuarios" to "anon";

grant update on table "public"."usuarios" to "anon";

grant delete on table "public"."usuarios" to "authenticated";

grant insert on table "public"."usuarios" to "authenticated";

grant references on table "public"."usuarios" to "authenticated";

grant select on table "public"."usuarios" to "authenticated";

grant trigger on table "public"."usuarios" to "authenticated";

grant truncate on table "public"."usuarios" to "authenticated";

grant update on table "public"."usuarios" to "authenticated";

grant delete on table "public"."usuarios" to "postgres";

grant insert on table "public"."usuarios" to "postgres";

grant references on table "public"."usuarios" to "postgres";

grant select on table "public"."usuarios" to "postgres";

grant trigger on table "public"."usuarios" to "postgres";

grant truncate on table "public"."usuarios" to "postgres";

grant update on table "public"."usuarios" to "postgres";

grant delete on table "public"."usuarios" to "service_role";

grant insert on table "public"."usuarios" to "service_role";

grant references on table "public"."usuarios" to "service_role";

grant select on table "public"."usuarios" to "service_role";

grant trigger on table "public"."usuarios" to "service_role";

grant truncate on table "public"."usuarios" to "service_role";

grant update on table "public"."usuarios" to "service_role";


