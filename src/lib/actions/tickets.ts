"use server";

import { z } from "zod";
import { supportSchema as formSchema } from "../schemas/supportSchemas";
import { Result } from "@/types/Result";
import { getSupabaseCookiesClient } from "../supabase/clients";


export async function placeTicket(
  data: z.infer<typeof formSchema> & { document_id?: string }
): Promise<Result<object>> {
  const supabase = await getSupabaseCookiesClient();



  return {}
}
