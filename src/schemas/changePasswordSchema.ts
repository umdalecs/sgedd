import { z } from "zod";

export const changePasswordSchema = z
  .object({
    password: z
      .string()
      .min(6, "La contraseña debe contener al menos 6 caracteres")
      .regex(/[a-zA-Z]/, "Debe tener al menos un caracter")
      .regex(/[0-9]/, "Debe tener al menos un número"),
    newPassword: z
      .string()
      .min(6, "La contraseña debe contener al menos 6 caracteres")
      .regex(/[a-zA-Z]/, "Debe tener al menos un caracter")
      .regex(/[0-9]/, "Debe tener al menos un número"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });
