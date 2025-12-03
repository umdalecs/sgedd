"use client";

import { useState } from "react";
import { FilePlus } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Spinner } from "../ui/spinner";

export default function Solicitarpdf({
  nombretipo,
  exists,
}: {
  nombretipo: string;
  exists: boolean;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const resp = await fetch(
        `/api/pdf/${encodeURIComponent(nombretipo)}`,
        { method: "POST" }
      );

      const data = await resp.json();

      if (!resp.ok) {
        alert(data.error || "Ocurrió un error al generar el PDF");
        setIsLoading(false);
        return;
      }

      alert("Documento generado correctamente");
      router.replace("/dashboard/expediente");
      
    } catch (err) {
      console.log(err);
      alert("Error inesperado al generar el PDF");
    }

    setIsLoading(false);
  };

  return (
    <Button
      onClick={handleClick}
      variant="default"
      size="default"
      disabled={exists}
    >
      {isLoading ? (
        <>
          <Spinner /> Cargando...
        </>
      ) : (
        <>
          <FilePlus />
          Solicitar Documento
        </>
      )}
    </Button>
  );
}
