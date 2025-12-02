import { Result } from "@/types/Result";
import { getCurrentUser } from "./auth";
import { getSupabaseCookiesClient } from "../supabase/clients";
import { EventoVistoBueno } from "@/types/EventoVistoBueno";

export async function getRevisorData(): Promise<Result<EventoVistoBueno[]>> {
  const user = await getCurrentUser();
  const supabase = await getSupabaseCookiesClient();

  const { data, error } = await supabase
    .from("eventovistobueno")
    .select("*")
    .eq("revisor_rfc", user.rfc);

  if (error) {
    return { error: error.message };
  }

  return {
    
    data,
  };
}
