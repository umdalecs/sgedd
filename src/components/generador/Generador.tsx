"use client";
import { EventoGeneracion } from "@/types/EventoGeneracion";
import { Button } from "../ui/button";
// import { generarPdf } from "@/lib/actions/documents";

export default function Generador({ evento }: { evento: EventoGeneracion }) {

  const handleClick = async (evento: EventoGeneracion) => {
    // await generarPdf(evento);
  };

  return (
    <Button variant="default" onClick={() => handleClick(evento)}>
      Generar PDF
    </Button>
  );
}
