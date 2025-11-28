import {z} from "zod";

export const RegisterSchema = z.object({
  rfc: z
    .string()
    .regex(/^[A-ZÑ&]{3,4}\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])[A-Z0-9]{2}[0-9A]$/
, "Introduce un RFC válido"),
  email: z.email("Introduce una dirección de correo válida"),
  password: z
    .string()
    .min(6, "La contraseña debe contener al menos 6 caracteres")
    .regex(/[a-zA-Z]/, "Debe tener al menos un caracter")
    .regex(/[0-9]/, "Debe tener al menos un número"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

export const LoginSchema = z.object({
  email: z.email("Introduce una dirección de correo válida"),
  password: z
    .string()
    .min(6, "La contraseña debe contener al menos 6 caracteres")
    .regex(/[a-zA-Z]/, "Debe tener al menos un caracter")
    .regex(/[0-9]/, "Debe tener al menos un número"),
});