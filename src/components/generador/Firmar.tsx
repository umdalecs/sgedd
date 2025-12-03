import { FilePen } from "lucide-react";
import { Button } from "../ui/button";
import { Documento } from "@/types/Documento";

export default function Firmar({ documento }: { documento: Documento }) {
  return (
    <Button className="flex w-3/4 h-15 text-2xl font-bold">
      <div>Firmar</div>
      <div>
        <FilePen className="size-full" />
      </div>
    </Button>
  );
}
