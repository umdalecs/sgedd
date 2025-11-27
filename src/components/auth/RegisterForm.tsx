"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { register } from "@/lib/actions/auth";
import { Rol } from "@/types/usuario";


const roles: Record<string, Rol>=  {
  "Docente": "docente",
  "Vinculación": "generador",
  "Departamento Académico": "generador",
  "Subdirección": "revisor",
}

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe medir al menos 2 caracteres"),
  lastName: z.string().min(2, "El apellido debe medir al menos 2 caracteres"),
  rfc: z
    .string()
    .min(12, "El RFC debe tener al menos 12 caracteres")
    .max(13, "El RFC no puede tener más de 13 caracteres"),
  email: z.email("Introduce una dirección de correo válida"),
  password: z
    .string()
    .min(6, "La contraseña debe contener al menos 6 caracteres")
    .regex(/[a-zA-Z]/, "Debe tener al menos un caracter")
    .regex(/[0-9]/, "Debe tener al menos un número"),
  confirmPassword: z.string(),
  role: z.enum(["docente", "generador", "revisor"]),
  puesto: z.string().min(1, "Selecciona un puesto"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

export default function RegisterForm() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rfc: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "docente",
      puesto: "",
    },
  });

  const selectedRole = roles[form.watch("puesto")];

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await register({
        email: values.email,
        password: values.password,
        rfc: values.rfc,
        rol: selectedRole,
      });

      if (!result.success) {
        setError(result.error || "Error al registrar usuario");
      }
    } catch {
      setError("Error al conectar con el servidor");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-full space-y-3"
      >
        {error && (
          <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
            {error}
          </div>
        )}
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input type="text" {...field} className="shadow-2xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellido</FormLabel>
                <FormControl>
                  <Input type="text" {...field} className="shadow-2xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="rfc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>RFC</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  {...field}
                  className="shadow-2xl uppercase"
                  maxLength={13}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo</FormLabel>
              <FormControl>
                <Input type="email" {...field} className="shadow-2xl" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input type="password" {...field} className="shadow-2xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmar Contraseña</FormLabel>
                <FormControl>
                  <Input type="password" {...field} className="shadow-2xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
          
        <FormField
          control={form.control}
          name="puesto"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Puesto</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="shadow-2xl w-full">
                    <SelectValue placeholder="Selecciona un puesto" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.keys(roles).map((puesto) => (
                    <SelectItem key={puesto} value={puesto}>
                      {puesto}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="text-center">
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Registrando..." : "Registrarse"}
          </Button>

          <Link
            className="block mt-3 text-sm font-semibold text-foreground hover:underline"
            href="/"
          >
            ¿Ya tienes una cuenta? Inicia sesión
          </Link>
        </div>
      </form>
    </Form>
  );
}
