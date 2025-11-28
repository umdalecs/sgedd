"use client";
import { EventoGeneracion } from "@/types/EventoGeneracion";
import { Button } from "../ui/button";

export default function Generador({ evento }: { evento: EventoGeneracion }) {
  const generarPdf = (evento: EventoGeneracion) => {
    // await generarDocumento(evento);
  };

  return (
    <Button variant="default" onClick={() => generarPdf(evento)}>
      Generar PDF
    </Button>
  );
}
