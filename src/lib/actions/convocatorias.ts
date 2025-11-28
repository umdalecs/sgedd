import { Result } from "@/types/Result";
import { getSupabaseCookiesClient } from "../supabase/clients";
import { Convocatoria } from "@/types/Convocatoria";

export async function getConvocatorias(): Promise<Result<Convocatoria[]>> {
  const supabase = await getSupabaseCookiesClient();

  const {data, error} = await supabase
    .from("convocatoria")
    .select("*");

  if (error) {
    return {success: false, error: error.message}
  }

  return { data, success: true};
}
