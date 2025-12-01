import { EventoGeneracion } from "@/types/EventoGeneracion";
import { getCurrentUser } from "./auth";
import { getSupabaseCookiesClient } from "../supabase/clients";
import { Result } from "@/types/Result";

export async function getEventos(): Promise<Result<EventoGeneracion[]>> {
  const user = await getCurrentUser();
  const supabase = await getSupabaseCookiesClient();

  const { data, error } = await supabase
    .from("eventogeneracion")
    .select("*")
    .eq("generador_rfc", user.rfc);

  if (error) {
    return { error: error.message };
  }

  return {
    data
  };
}

