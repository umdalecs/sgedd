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
      await fetch(
        `http://localhost:3000/api/pdf/${encodeURIComponent(nombretipo)}`,
        {
          method: "POST",
        }
      );

      router.replace("/dashboard/expediente");

      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
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
