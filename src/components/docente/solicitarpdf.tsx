"use client";
import { useState } from "react";
import { FilePlus } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function Solicitarpdf({ nombretipo }: { nombretipo: string }) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setIsLoading(true);
    setError(null);

    fetch(`http://localhost:3000/api/pdf/${encodeURIComponent(nombretipo)}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        // AQUI VAMOS A MOSTRAR UN POPOVER CON LA OPCION DE VER EL URL,
        // NO DEBERIAMOS REDIRECCIONAR
        router.push(data.url);
      })
      .catch((err) => {
        setError(err.message);
      });

    setIsLoading(false);
  };

  return (
    <Button onClick={handleClick} variant="default" size="default">
      <FilePlus />
      {isLoading ? "Cargando..." : "Solicitar Documento"}
    </Button>
  );
}
