"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CardFooter } from "../ui/card";

export function SupportForm() {
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!asunto.trim() || !mensaje.trim()) {
      alert("Por favor completa todos los campos");
      return;
    }

    // Aquí iría la lógica para enviar el ticket
    console.log("Enviando ticket de soporte...", { asunto, mensaje });
    alert("Ticket enviado exitosamente");
    setAsunto("");
    setMensaje("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      <div className="space-y-3">
        <Label htmlFor="asunto" className="text-base font-medium">
          Asunto
        </Label>
        <Input
          id="asunto"
          type="text"
          value={asunto}
          onChange={(e) => setAsunto(e.target.value)}
          placeholder="Ej. Error al subir el archivo"
          className="w-full h-12 rounded-lg bg-gray-100 border-gray-200 px-4"
          required
        />
      </div>

      <div className="space-y-3">
        <Label htmlFor="mensaje" className="text-base font-medium">
          Mensaje
        </Label>
        <Textarea
          id="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Describe tu problema a  detalle..."
          className="w-full min-h-[200px] rounded-lg bg-gray-100 border-gray-200 px-4 py-3 resize-none"
          required
        />
      </div>
    </form>
  );
}
