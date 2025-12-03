"use client";

import { File, FilePen } from "lucide-react";
import { Button } from "../ui/button";
import { Documento } from "@/types/Documento";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useRef, useState } from "react";
import { firmarDocumento } from "@/actions/documents";
import { Spinner } from "../ui/spinner";
import { useRouter } from "next/navigation";

export default function Firmar({ documento }: { documento: Documento }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const pdfCanvasRef = useRef<HTMLCanvasElement>(null);
  const firmaCanvasRef = useRef<HTMLCanvasElement>(null);

  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = () => setIsDrawing(true);
  const stopDrawing = () => {
    setIsDrawing(false);
    const ctx = firmaCanvasRef.current!.getContext("2d")!;
    ctx.beginPath();
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = firmaCanvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const rect = canvas.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const limpiarFirma = () => {
    const canvas = firmaCanvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleClick = async () => {
    setIsLoading(true);

    if (!firmaCanvasRef.current) return;

    const firmaCanvas = firmaCanvasRef.current;
    const firmaBase64 = firmaCanvas.toDataURL("image/png");

    // Crear un enlace temporal
    // const link = document.createElement("a");
    // link.href = firmaBase64;
    // link.download = "firma.png"; // nombre del archivo

    // // Simular el click para descargar
    // link.click();

    const result = await firmarDocumento(firmaBase64, documento.rutaarchivo);

    if (result.error) {
      // console.error(result.error);
    }

    setIsLoading(false);

    router.refresh();
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="flex w-3/4 h-15 text-2xl font-bold">
          <div>Firmar</div>
          <div>
            <FilePen className="size-full" />
          </div>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[420px]">
        <div className="text-center">
          <h2 className="font-bold mb-2">Firmar PDF</h2>

          <div
            style={{
              position: "relative",
              display: "inline-block",
              marginTop: 20,
            }}
          >
            {/* PDF */}
            <canvas ref={pdfCanvasRef} style={{ border: "1px solid #ccc" }} />

            {/* Firma */}
            <canvas
              ref={firmaCanvasRef}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                cursor: "crosshair",
              }}
              onMouseDown={startDrawing}
              onMouseUp={stopDrawing}
              onMouseMove={draw}
              onMouseLeave={stopDrawing}
            />
          </div>

          <br />

          <Button onClick={limpiarFirma} variant="secondary" className="mt-4">
            Limpiar Firma
          </Button>

          <Button
            onClick={handleClick}
            className="w-full mt-4"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                Cargando...
                <Spinner />
              </>
            ) : (
              <>
                Guardar Firma en PDF
                <File className="ml-2" />
              </>
            )}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
