"use client";

import { useState } from "react";
import type { RevisionData, Solicitante } from "@/types/revisor";
import { ChevronDown, Minus, FileText } from "lucide-react";

export default function RevisionesPanel({ data }: { data: RevisionData }) {
  const solicitantes = data.pendientesVistoBueno;

  return (
      <div className="pb-8">
        <div className="w-full flex justify-center mb-4">
          <span className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-1 text-sm font-semibold">
            Solicitantes:
          </span>
        </div>
        <SolicitantesAccordion solicitantes={solicitantes} />
      </div>
  );
}

function SolicitantesAccordion({ solicitantes }: { solicitantes: Solicitante[] }) {
  const [open, setOpen] = useState<Record<string, boolean>>({ "1": true });
  const toggle = (id: string) => setOpen((s) => ({ ...s, [id]: !s[id] }));

  return (
    <div className="space-y-3">
      {solicitantes.map((s) => {
        const expanded = !!open[s.id];
        return (
          <div key={s.id} className="rounded-2xl">
           
            <div className="flex items-center justify-between bg-muted rounded-full px-4 py-3">
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
              <div className="mt-2 rounded-2xl bg-muted border border-input p-3 sm:p-4 space-y-3">
                {s.documentos.length ? (
                  s.documentos.map((d) => (
                    <div
                      key={d.id}
                      className="flex items-center justify-between gap-3 rounded-lg bg-background px-3 py-2 border border-input"
                    >
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm sm:text-base text-foreground/90">
                          {d.nombre}
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