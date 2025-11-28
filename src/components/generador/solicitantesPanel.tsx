"use client";

import { useState } from "react";
import type { Solicitante } from "@/types/generador";
import { ChevronDown, Minus, Plus } from "lucide-react";

export default function Solicitantes({
  solicitantes,
}: {
  solicitantes: Solicitante[];
}) {
  const [open, setOpen] = useState<Record<string, boolean>>({ "1": true });
  const toggle = (id: string) => setOpen((s) => ({ ...s, [id]: !s[id] }));

  return (
    <div className="divide-y px-3 sm:px-5 pb-5">
      {solicitantes.map((s) => {
        const expanded = !!open[s.id];

        return (
          <div key={s.id} className="py-2">
            <div className="flex items-center justify-between px-4 py-3 bg-muted rounded-xl">
              <span className="font-semibold italic text-foreground">
                {s.nombreCompleto}
              </span>

              <button
                type="button"
                onClick={() => toggle(s.id)}
                className="inline-flex items-center justify-center w-10 h-8 rounded-full bg-background border border-input shadow-xs hover:bg-muted transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                aria-expanded={expanded}
                aria-label={expanded ? "Colapsar" : "Expandir"}
              >
                {expanded ? (
                  <Minus className="w-5 h-5 text-foreground/80" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-foreground/80" />
                )}
              </button>
            </div>
            {expanded && (
              <div className="mx-4 mt-2 rounded-xl bg-muted border border-input p-3 sm:p-4 space-y-3">
                {s.documentos.length ? (
                  s.documentos.map((d) => (
                    <div
                      key={d.id}
                      className="flex items-center justify-between gap-3 rounded-lg bg-background px-3 py-2 border border-input"
                    >
                      <div className="flex-1 text-sm sm:text-base text-foreground/90 text-center sm:text-left">
                        {d.nombre}
                      </div>

                      <div className="hidden sm:flex items-center">
                        <span className="inline-flex items-center gap-1 rounded-full bg-secondary text-accent-foreground px-2 py-1 text-xs font-semibold">
                          <Plus className="w-3.5 h-3.5 " />
                        </span>
                      </div>

                      <button
                        onClick={() => window.open(d.urlPDF, "_blank")}
                        className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs sm:text-sm font-semibold px-4 py-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                      >
                        Ver PDF
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-muted-foreground italic text-center py-2">
                    No hay documentos
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
