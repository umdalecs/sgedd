"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Documento {
  id: number;
  nombre: string;
  tipo: string;
}

interface Solicitante {
  id: number;
  nombre: string;
  documentos: Documento[];
  expanded: boolean;
}

export default function SolicitudesPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'firma' | 'vistoBueno'>('firma');
  
  const [solicitantesFirma, setSolicitantesFirma] = useState<Solicitante[]>([
    {
      id: 1,
      nombre: "Flores Saldaña Martín Alejandro",
      documentos: [
        { id: 1, nombre: "Constancia de Servicios Escolares", tipo: "firma" },
        { id: 2, nombre: "Constancia de Recursos Humanos", tipo: "firma" }
      ],
      expanded: true
    },
    {
      id: 2,
      nombre: "Meza Quiñonez César Iván",
      documentos: [
        { id: 3, nombre: "Certificado de Estudios", tipo: "firma" }
      ],
      expanded: false
    },
    {
      id: 3,
      nombre: "Estrada Valenzuela Ernesto",
      documentos: [
        { id: 4, nombre: "Título Profesional", tipo: "firma" }
      ],
      expanded: false
    }
  ]);

  const [solicitantesVistoBueno, setSolicitantesVistoBueno] = useState<Solicitante[]>([
    {
      id: 4,
      nombre: "García López María Teresa",
      documentos: [
        { id: 5, nombre: "Constancia de Servicios", tipo: "vistoBueno" }
      ],
      expanded: false
    },
    {
      id: 5,
      nombre: "Rodríguez Pérez Juan Carlos",
      documentos: [
        { id: 6, nombre: "Certificado de Antigüedad", tipo: "vistoBueno" }
      ],
      expanded: false
    }
  ]);

  const toggleSolicitante = (id: number) => {
    if (activeTab === 'firma') {
      setSolicitantesFirma(solicitantesFirma.map(s => 
        s.id === id ? { ...s, expanded: !s.expanded } : s
      ));
    } else {
      setSolicitantesVistoBueno(solicitantesVistoBueno.map(s => 
        s.id === id ? { ...s, expanded: !s.expanded } : s
      ));
    }
  };

  const handleVerPDF = (docId: number, solicitanteNombre: string, documentoNombre: string) => {
  router.push(`/dashboard/revisor/solicitudes/${docId}?solicitante=${encodeURIComponent(solicitanteNombre)}&documento=${encodeURIComponent(documentoNombre)}`);
  };

  const solicitantesActuales = activeTab === 'firma' ? solicitantesFirma : solicitantesVistoBueno;
  const totalDocumentos = solicitantesActuales.reduce((acc, s) => acc + s.documentos.length, 0);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('firma')}
            className={`flex-1 py-3 px-6 rounded-t-lg font-semibold transition ${
              activeTab === 'firma'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            Pendientes de firma({solicitantesFirma.reduce((acc, s) => acc + s.documentos.length, 0)})
          </button>
          <button
            onClick={() => setActiveTab('vistoBueno')}
            className={`flex-1 py-3 px-6 rounded-t-lg font-semibold transition ${
              activeTab === 'vistoBueno'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            Pendientes de visto bueno({solicitantesVistoBueno.reduce((acc, s) => acc + s.documentos.length, 0)})
          </button>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-lg shadow-lg border border-border overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-primary-foreground py-4 px-6 text-center">
            <h2 className="text-lg font-bold">Solicitantes:</h2>
          </div>

          {/* Solicitantes List */}
          <div className="p-4 space-y-3">
            {solicitantesActuales.map((solicitante) => (
              <div key={solicitante.id} className="border border-border rounded-lg overflow-hidden">
                {/* Solicitante Header */}
                <button
                  onClick={() => toggleSolicitante(solicitante.id)}
                  className="w-full bg-muted hover:bg-muted/80 py-3 px-4 flex items-center justify-between transition"
                >
                  <span className="font-medium text-foreground italic">{solicitante.nombre}</span>
                  {solicitante.expanded ? (
                    <ChevronUp className="w-5 h-5 text-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-foreground" />
                  )}
                </button>

                {/* Documentos (Collapsible) */}
                {solicitante.expanded && (
                  <div className="bg-white p-4 space-y-3">
                    {solicitante.documentos.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between py-2">
                        <span className="text-foreground italic">{doc.nombre}</span>
                        <button
                          onClick={() => handleVerPDF(doc.id, solicitante.nombre, doc.nombre)}
                          className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition shadow-sm"
                        >
                          Ver PDF
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {solicitantesActuales.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No hay solicitudes pendientes
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}