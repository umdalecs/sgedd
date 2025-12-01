import { getSupabaseCookiesClient } from "../supabase/clients";
import { Result } from "@/types/Result";
import { TipoDocumento } from "@/types/TipoDocumento";

export async function getDocumentos(): Promise<Result<TipoDocumento[]>>{
    const supabase = await getSupabaseCookiesClient();

    const {data, error} = await supabase
    .from("tipodocumento")
    .select("*")

    if (error) {
        return {error: error.message}
    }

    return {data};
}