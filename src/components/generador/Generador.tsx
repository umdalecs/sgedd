"use client";
import { EventoGeneracion } from "@/types/EventoGeneracion";
import { Button } from "../ui/button";
import { generarPdf } from "@/lib/actions/documents";
import { redirect } from "next/navigation";

export default function Generador({ evento }: { evento: EventoGeneracion }) {

  // TODO: Generar los pdfs
  const handleClick = async (evento: EventoGeneracion) => {
    const { data, error } = await generarPdf(evento);

    if (error) {
      redirect("/dashboard")
    }
  };

  return (
    <Button variant="default" onClick={() => handleClick(evento)}>
      Generar PDF
    </Button>
  );
}
