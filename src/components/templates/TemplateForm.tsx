"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTemplate, updateTemplate } from "@/lib/actions/templates";
import type {
  PlantillaDocumento,
  TipoDocumento,
} from "@/lib/supabase/database.types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Plus } from "lucide-react";

const formSchema = z.object({
  nombre: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  tipo: z.enum([
    "Constancia de Servicios Escolares",
    "Constancia de Recursos Humanos",
    "Otro",
  ]),
  descripcion: z.string().optional(),
  contenido_html: z
    .string()
    .min(10, "El contenido debe tener al menos 10 caracteres"),
});

interface TemplateFormProps {
  template?: PlantillaDocumento;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export default function TemplateForm({
  template,
  onSuccess,
  onCancel,
}: TemplateFormProps) {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [camposDinamicos, setCamposDinamicos] = useState<string[]>(
    template?.campos_dinamicos || []
  );
  const [nuevoCampo, setNuevoCampo] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: template?.nombre || "",
      tipo: (template?.tipo as TipoDocumento) || "Otro",
      descripcion: template?.descripcion || "",
      contenido_html: template?.contenido_html || "",
    },
  });

  const handleAddCampo = () => {
    if (nuevoCampo.trim() && !camposDinamicos.includes(nuevoCampo.trim())) {
      setCamposDinamicos([...camposDinamicos, nuevoCampo.trim()]);
      setNuevoCampo("");
    }
  };

  const handleRemoveCampo = (campo: string) => {
    setCamposDinamicos(camposDinamicos.filter((c) => c !== campo));
  };

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setError(null);

    try {
      const templateData = {
        nombre: values.nombre,
        tipo: values.tipo as TipoDocumento,
        descripcion: values.descripcion,
        contenido_html: values.contenido_html,
        campos_dinamicos: camposDinamicos,
      };

      const result = template
        ? await updateTemplate(template.id, templateData)
        : await createTemplate(templateData);

      if (result.success) {
        onSuccess?.();
      } else {
        setError(result.error || "Error al guardar la plantilla");
      }
    } catch {
      setError("Error al conectar con el servidor");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {template ? "Editar Plantilla" : "Nueva Plantilla de Documento"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            {error && (
              <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
                {error}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre de la Plantilla</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ej: Constancia de Servicios"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tipo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Documento</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un tipo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Constancia de Servicios Escolares">
                          Constancia de Servicios Escolares
                        </SelectItem>
                        <SelectItem value="Constancia de Recursos Humanos">
                          Constancia de Recursos Humanos
                        </SelectItem>
                        <SelectItem value="Otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="descripcion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe el propósito de esta plantilla..."
                      rows={2}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <FormLabel>Campos Dinámicos</FormLabel>
              <FormDescription>
                Define los campos que serán reemplazados en el documento. Usa
                el formato {"{{campo}}"} en el contenido HTML.
              </FormDescription>
                <div className="flex space-x-2">
                <Input
                  placeholder="Nombre del campo"
                  value={nuevoCampo}
                  onChange={(e) => setNuevoCampo(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && (e.preventDefault(), handleAddCampo())
                  }
                />
                <Button type="button" variant="outline" onClick={handleAddCampo}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {camposDinamicos.map((campo) => (
                  <Badge
                    key={campo}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {`{{${campo}}}`}
                    <button
                      type="button"
                      onClick={() => handleRemoveCampo(campo)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            <FormField
              control={form.control}
              name="contenido_html"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contenido HTML</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="<div>Contenido del documento...</div>"
                      rows={10}
                      className="font-mono text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Escribe el HTML del documento. Usa {"{{campo}}"} para campos
                    dinámicos.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end space-x-2">
              {onCancel && (
                <Button type="button" variant="outline" onClick={onCancel}>
                  Cancelar
                </Button>
              )}
              <Button type="submit" disabled={isLoading}>
                {isLoading
                  ? "Guardando..."
                  : template
                  ? "Actualizar"
                  : "Crear Plantilla"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
