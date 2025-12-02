"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardFooter } from "../ui/card";
import { useForm } from "react-hook-form";
import { supportSchema as formSchema } from "@/lib/schemas/supportSchemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { placeTicket } from "@/lib/actions/tickets";
import { TipoDocumento } from "@/types/Documento";

export function SupportForm({ document }: { document?: TipoDocumento }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      matter: "",
      message: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setError(null);

    const payload: typeof values & { document_id?: string } = {
      ...values,
    };

    if (document) {
      payload.document_id = document.tipodocid;
    }

    const { error } = await placeTicket(payload);

    if (error) {
      setError(error || "Error al mandar el ticket");
      return;
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form className="space-y-3" onSubmit={form.handleSubmit(handleSubmit)}>
        {error && (
          <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
            {error}
          </div>
        )}
        <FormField
          control={form.control}
          name="matter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{document && "Documento: " + document.nombretipo + ", " } Asunto</FormLabel>
              <FormControl>
                <Input type="text" {...field} className="shadow-2xl" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea {...field} className="shadow-2xl min-h-[200px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <CardFooter className="p-4">
          <Button
            type="submit"
            className="bg-primary mx-auto hover:bg-primary/90 text-primary-foreground h-12 rounded-l font-medium italic"
          >
            {isLoading ? "Enviando mensaje..." : "Enviar Mensaje"}
          </Button>
        </CardFooter>
      </form>
    </Form>
  );
}
