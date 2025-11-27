"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createSignature } from "@/lib/actions/signatures";
import { Eraser, Save, RotateCcw } from "lucide-react";

interface SignaturePadProps {
  onSave?: (signatureBase64: string) => void;
  onCancel?: () => void;
  width?: number;
  height?: number;
}

export default function SignaturePad({
  onSave,
  onCancel,
  width = 400,
  height = 200,
}: SignaturePadProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }, []);

  useEffect(() => {
    initCanvas();
  }, [initCanvas]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
    setHasSignature(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
  };

  const handleSave = async () => {
    if (!hasSignature) {
      setError("Por favor, dibuja tu firma primero");
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    setIsLoading(true);
    setError(null);

    try {
      const signatureBase64 = canvas.toDataURL("image/png");

      const result = await createSignature(signatureBase64);

      if (result.success) {
        onSave?.(signatureBase64);
      } else {
        setError(result.error || "Error al guardar la firma");
      }
    } catch {
      setError("Error al conectar con el servidor");
    } finally {
      setIsLoading(false);
    }
  };

  // Touch support
  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const touch = e.touches[0];
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
    setHasSignature(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    if (!isDrawing) return;

    const touch = e.touches[0];
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Firma Digital</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
            {error}
          </div>
        )}

        <div className="border rounded-lg overflow-hidden">
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="cursor-crosshair touch-none"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={stopDrawing}
          />
        </div>

        <p className="text-sm text-muted-foreground text-center">
          Dibuja tu firma en el área de arriba
        </p>

        <div className="flex justify-between">
          <div className="space-x-2">
            <Button variant="outline" onClick={clearCanvas} disabled={!hasSignature}>
              <Eraser className="mr-2 h-4 w-4" />
              Borrar
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                clearCanvas();
                initCanvas();
              }}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reiniciar
            </Button>
          </div>

          <div className="space-x-2">
            {onCancel && (
              <Button variant="outline" onClick={onCancel}>
                Cancelar
              </Button>
            )}
            <Button
              onClick={handleSave}
              disabled={!hasSignature || isLoading}
            >
              <Save className="mr-2 h-4 w-4" />
              {isLoading ? "Guardando..." : "Guardar Firma"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
