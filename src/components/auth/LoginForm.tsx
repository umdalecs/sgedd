"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "@/lib/actions/auth";

const formSchema = z.object({
  email: z.email("Introduce una dirección de correo válida"),
  password: z
    .string()
    .min(6, "La contraseña debe contener al menos 6 caracteres")
    .regex(/[a-zA-Z]/, "Debe tener al menos un caracter")
    .regex(/[0-9]/, "Debe tener al menos un número"),
});

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await login({
        email: values.email,
        password: values.password,
      });

      if (!result.success) {
        setError(result.error || "Error al iniciar sesión");
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
        className="w-full space-y-3"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        {error && (
          <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
            {error}
          </div>
        )}
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

        <div className="text-center">
          <Button type="submit" className="bg-primary w-full" disabled={isLoading}>
            {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
          </Button>

          <Link
            href="/forgotpassword"
            className="block mt-3 text-sm font-semibold text-foreground hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </Link>

          <Link
            href="/register"
            className="block mt-3 text-sm font-semibold text-foreground hover:underline"
          >
            ¿No tienes una cuenta aún? Registrate
          </Link>
        </div>
      </form>
    </Form>
  );
}
