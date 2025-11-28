"use client";
import { FilePlus } from "lucide-react";
import { Button } from "../ui/button";
import { generaDocumento1 } from "@/lib/actions/getDoc1";

export default function Solicitarpdf({documentoId}:{documentoId:string}) {
  const handleClick = async () => {
    switch (documentoId) {
      case '068fe9fd-c111-4753-be14-a101729b2748':
        await generaDocumento1();
        break;
    
      default:
        break;
    }
  };
  return (
    <Button
      onClick={handleClick}
      variant="default"
      size="icon"
      className="rounded-2xl w-3/5"
    >
      <FilePlus className="h-4 w-4" />
    </Button>
  );
}
