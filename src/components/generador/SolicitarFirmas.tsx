"use client";

import React from "react";
import { Button } from "../ui/button";
import { CirclePlus } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const departamentos = [
  { id: 1, puesto: "Departamento de Vinculacion" },
  { id: 2, puesto: "Subdireccion Academica" },
  { id: 3, puesto: "Departamento Ajeno" },
  { id: 4, puesto: "Subdireccion Academica 2" },
  { id: 5, puesto: "Departamento Ajeno 2" },
];

export default function SolicitarFirmas() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
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
  );
}
