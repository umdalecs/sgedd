"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(5, "El nombre debe medir al menos 5 caracteres"),
  lastName: z.string(),
  rfc: z.string(),
  email: z.email(),
  password: z.string(),
  role: z.string(),
});

export default function RegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      rfc: "",
      email: "",
      password: "",
      role: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {};

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-full space-y-3"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  {...field}
                  className="shadow-2xl"
                />
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
                <Input
                  type="text"
                  {...field}
                  className="shadow-2xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
                  className="shadow-2xl"
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
                <Input
                  type="email"
                  {...field}
                  className="shadow-2xl"
                />
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
                <Input
                  type="password"
                  {...field}
                  className="shadow-2xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rol</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  {...field}
                  className="shadow-2xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="text-center">
          <Button type="submit" className="w-full">
            Registrarse
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
