"use client";
import { Documento } from "@/types/Documento";
import { CheckLine } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useState } from "react";
import { Spinner } from "../ui/spinner";
import { marcarFinalizado } from "@/actions/generaciones";

export default function MarcarFinalizado({
  documento,
}: {
  documento: Documento;
}) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);

    await marcarFinalizado(documento);

    setIsLoading(false);

    router.push("/dashboard/generaciones");
  };

  return (
    <Button
      className="flex text-2xl gap-2 font-bold w-3/4 h-15"
      onClick={handleClick}
    >
      <div>Finalizar</div>
      <div>{isLoading ? <Spinner /> : <CheckLine className="size-full" />}</div>
    </Button>
  );
}
