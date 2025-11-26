"use client";

import { useState, useEffect } from "react";
import { getUserSignatures, deleteSignature, setActiveSignature } from "@/app/actions/signatures";
import type { Firma } from "@/lib/supabase/database.types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Trash2, Edit } from "lucide-react";
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

interface SignaturesListProps {
  onCreateNew?: () => void;
}

export default function SignaturesList({ onCreateNew }: SignaturesListProps) {
  const [signatures, setSignatures] = useState<Firma[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    
    async function fetchSignatures() {
      try {
        const result = await getUserSignatures();
        if (cancelled) return;
        
        if (result.success && result.data) {
          setSignatures(result.data as Firma[]);
        } else {
          setError(result.error || "Error al cargar firmas");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }
    
    fetchSignatures();
    
    return () => {
      cancelled = true;
    };
  }, []);

  const handleDelete = async (id: string) => {
    const result = await deleteSignature(id);
    if (result.success) {
      setSignatures(signatures.filter((s) => s.id !== id));
    } else {
      setError(result.error || "Error al eliminar firma");
    }
  };

  const handleSetActive = async (id: string) => {
    const result = await setActiveSignature(id);
    if (result.success) {
      setSignatures(
        signatures.map((s) => ({
          ...s,
          activa: s.id === id,
        }))
      );
    } else {
      setError(result.error || "Error al activar firma");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <p className="text-muted-foreground">Cargando firmas...</p>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Mis Firmas Digitales</CardTitle>
        {onCreateNew && (
          <Button onClick={onCreateNew} size="sm">
            <Edit className="mr-2 h-4 w-4" />
            Nueva Firma
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {error && (
          <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md mb-4">
            {error}
          </div>
        )}

        {signatures.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">
              No tienes firmas guardadas
            </p>
            {onCreateNew && (
              <Button onClick={onCreateNew}>Crear primera firma</Button>
            )}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {signatures.map((signature) => (
              <div
                key={signature.id}
                className={`relative border rounded-lg p-4 ${
                  signature.activa ? "border-primary bg-primary/5" : ""
                }`}
              >
                {signature.activa && (
                  <div className="absolute top-2 right-2">
                    <span className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded-full flex items-center gap-1">
                      <Check className="h-3 w-3" />
                      Activa
                    </span>
                  </div>
                )}

                <div className="mt-6 mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={signature.firma_base64}
                    alt={`Firma digital creada el ${new Date(signature.created_at).toLocaleDateString()}`}
                    className="max-w-full h-auto border rounded"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">
                    Creada: {new Date(signature.created_at).toLocaleDateString()}
                  </span>

                  <div className="space-x-2">
                    {!signature.activa && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSetActive(signature.id)}
                      >
                        <Check className="h-4 w-4" />
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
                          <AlertDialogTitle>¿Eliminar firma?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Esta acción no se puede deshacer. La firma será
                            eliminada permanentemente.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancelar</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(signature.id)}
                          >
                            Eliminar
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
