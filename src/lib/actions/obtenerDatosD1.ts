"use server";

import { EventoGeneracion } from "@/types/EventoGeneracion";
import { getSupabaseCookiesClient } from "../supabase/clients";
import { getCurrentUser } from "./auth";

async function obtenerDatosD1(event: EventoGeneracion){
    const supabase = await getSupabaseCookiesClient();

    const {data} = await supabase
    .from("docente")
    .select("*")
    .eq("rfc", event.idsolicitante)
    .single();

    return {
        nombre: data.nombre,

    }
}