"use server";

import { z } from "zod";
import { supportSchema as formSchema } from "../schemas/supportSchemas";
import { Result } from "@/types/Result";
import { getSupabaseCookiesClient } from "../supabase/clients";
import { getCurrentUser } from "./auth";


export async function placeTicket(
  data: z.infer<typeof formSchema> & { document_id?: string }
): Promise<Result<object>> {
  const { user, error: userError }= await getCurrentUser();

  if (userError) {
    return {error: userError.message};
  }

  const supabase = await getSupabaseCookiesClient();

  const { data: _, error} = await supabase
  .from("tickets")
  .insert(data);

  if (error) {
    return {error: error.message};
  }

  return {}
}
