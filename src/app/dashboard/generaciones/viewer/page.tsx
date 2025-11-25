"use client";
import DocContent from "@/components/common/DocContent";
import PDFViewerCard from "@/components/common/PDFViewerCard";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CheckLine, CirclePlus, FilePen, TriangleAlert } from "lucide-react";
import React from "react";

export default function Page() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <>
      <DocContent />
      <PDFViewerCard>
        <div className="flex flex-col w-full h-full items-center justify-around">
          <Button className="flex w-3/4 h-15 text-2xl font-bold">
            <div>Firmar</div>
            <div>
              <FilePen className="size-full" />
            </div>
          </Button>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button className="flex w-3/4 h-15 text-2xl font-bold">
                <div>Solicitar Firma</div>
                <div>
                  <CirclePlus className="size-full" />
                </div>
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-80 max-h-80 overflow-y-auto">
              {departamentos.map((d) => (
                <div
                  key={d.id}
                  onClick={() => {
                    setValue(d.puesto);
                    setOpen(false);
                  }}
                  className={`
      cursor-pointer p-2 rounded-md transition-all

      ${
        value === d.puesto
          ? "bg-sidebar-accent-foreground text-white font-bold"
          : "hover:bg-accent"
      }                    
    `}
                >
                  <div className="font-semibold">{d.puesto}</div>
                </div>
              ))}
            </PopoverContent>
          </Popover>
          <Button className="flex w-3/4 h-15 text-2xl font-bold">
            <div>Finalizar</div>
            <div>
              <CheckLine className="size-full" />
            </div>
          </Button>
          <Button className="flex w-3/4 h-15 text-2xl font-bold">
            <div>Reportar</div>
            <div>
              <TriangleAlert className="size-full" />
            </div>
          </Button>
        </div>
      </PDFViewerCard>
    </>
  );
}

const departamentos = [
  { id: 1, puesto: "Departamento de Vinculacion" },
  { id: 2, puesto: "Subdireccion Academica" },
  { id: 3, puesto: "Departamento Ajeno" },
  { id: 4, puesto: "Subdireccion Academica 2" },
  { id: 5, puesto: "Departamento Ajeno 2" },
];
