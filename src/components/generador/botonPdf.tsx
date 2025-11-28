"use client";

import { generarPdf } from "@/lib/actions/documents";

export default function BotonPDF() {
  const handleClick = async () => {
    await generarPdf();
  }

  return (
    <button onClick={handleClick}>Generar PDF</button>
  );
}
