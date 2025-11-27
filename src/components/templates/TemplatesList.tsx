"use client";

import { useState, useEffect } from "react";
import { getTemplates, deleteTemplate } from "@/lib/actions/templates";
import type { PlantillaDocumento } from "@/lib/supabase/database.types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2, Edit, FileText } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface TemplatesListProps {
  onEdit?: (template: PlantillaDocumento) => void;
  onCreate?: () => void;
}

export default function TemplatesList({ onEdit, onCreate }: TemplatesListProps) {
  const [templates, setTemplates] = useState<PlantillaDocumento[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    
    async function fetchTemplates() {
      try {
        const result = await getTemplates();
        if (cancelled) return;
        
        if (result.success && result.data) {
          setTemplates(result.data as PlantillaDocumento[]);
        } else {
          setError(result.error || "Error al cargar plantillas");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }
    
    fetchTemplates();
    
    return () => {
      cancelled = true;
    };
  }, []);

  const handleDelete = async (id: string) => {
    const result = await deleteTemplate(id);
    if (result.success) {
      setTemplates(templates.filter((t) => t.id !== id));
    } else {
      setError(result.error || "Error al eliminar plantilla");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <p className="text-muted-foreground">Cargando plantillas...</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Plantillas de Documentos</h2>
        {onCreate && (
          <Button onClick={onCreate}>
            <Plus className="mr-2 h-4 w-4" />
            Nueva Plantilla
          </Button>
        )}
      </div>

      {error && (
        <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
          {error}
        </div>
      )}

      {templates.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-8">
            <FileText className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No hay plantillas disponibles</p>
            {onCreate && (
              <Button onClick={onCreate} className="mt-4">
                <Plus className="mr-2 h-4 w-4" />
                Crear primera plantilla
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <Card key={template.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="truncate">{template.nombre}</span>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {template.tipo}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {template.descripcion || "Sin descripción"}
                </p>
                <div className="text-xs text-muted-foreground mb-4">
                  Campos dinámicos: {template.campos_dinamicos?.length || 0}
                </div>
                <div className="flex justify-end space-x-2">
                  {onEdit && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onEdit(template)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  )}
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>¿Eliminar plantilla?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Esta acción no se puede deshacer. La plantilla &quot;
                          {template.nombre}&quot; será eliminada permanentemente.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(template.id)}
                        >
                          Eliminar
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
