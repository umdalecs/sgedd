import { z } from "zod";

export const supportSchema = z.object({
  matter: z.string().max(50, "Asunto demasiado largo"),
  message: z.string().max(600, "Mensaje demasiado largo"),
});
