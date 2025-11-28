"use client";
import { FilePlus } from "lucide-react";
import { Button } from "../ui/button";
import { generaDocumento1 } from "@/lib/actions/getDoc1";
import { generarDocumento2 } from "@/lib/actions/getDoc2";
import { generarDocumento3 } from "@/lib/actions/getDoc3";

export default function Solicitarpdf({documentoId}:{documentoId:string}) {
  const handleClick = async () => {
    switch (documentoId) {
      case '068fe9fd-c111-4753-be14-a101729b2748':
        await generaDocumento1();
        break;
      case '5f76042e-fffe-40ab-a950-8c083839e7b0':
        await generarDocumento2();
      case '9d1749bd-0136-4b3b-8ff4-c686fcf0a766':
        await generarDocumento3();
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
