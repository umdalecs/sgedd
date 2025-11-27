"use client";

import { PDFDocument } from "pdf-lib";
import { saveAs } from "file-saver";

function toArrayBuffer(u8: Uint8Array<ArrayBufferLike>): ArrayBuffer {
  const buffer = new ArrayBuffer(u8.length);
  const view = new Uint8Array(buffer);
  view.set(u8);
  return buffer;
}

export default function BotonPDF() {
  const generarPDF = async () => {
    const url = "/pdf/cambioH3.pdf";
    const arrayBuffer = await fetch(url).then(res => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(arrayBuffer);
    const form = pdfDoc.getForm();
    const fields = form.getFields();
    fields.forEach(f => console.log("Campo:", f.getName()));

    form.getTextField("Nombre").setText("César Meza");

    form.flatten();

    const pdfBytes = await pdfDoc.save();

    const fixedBuffer = toArrayBuffer(pdfBytes);

    const blob = new Blob([fixedBuffer], { type: "application/pdf" });

    saveAs(blob, "resultado.pdf");
  };

  return (
    <button onClick={generarPDF}>Generar PDF</button>
  );
}
