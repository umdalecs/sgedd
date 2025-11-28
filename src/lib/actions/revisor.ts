import { Documento, Solicitante, RevisionData } from "@/types/revisor";

const docs: Record<string, Documento> = {
  cse1: {
    id: "doc1",
    nombre: "Constancia de Servicios Escolares",
    tipo: "Constancia de Servicios Escolares",
    urlPDF: "/pdf/constancia_servicios_1.pdf",
  },
  rh1: {
    id: "doc2",
    nombre: "Constancia de Recursos Humanos",
    tipo: "Constancia de Recursos Humanos",
    urlPDF: "/pdf/constancia_rh_1.pdf",
  },
  cse2: {
    id: "doc3",
    nombre: "Constancia de Servicios Escolares",
    tipo: "Constancia de Servicios Escolares",
    urlPDF: "/pdf/constancia_servicios_2.pdf",
  },
};

const base: Solicitante[] = [
  {
    id: "1",
    nombreCompleto: "Flores Saldaña Martín Alejandro",
    documentos: [docs.cse1, docs.rh1],
  },
  { id: "2", nombreCompleto: "Meza Quiñonez César Iván", documentos: [] },
  { id: "3", nombreCompleto: "Estrada Valenzuela Ernesto", documentos: [] },
];

export async function getRevisorData(): Promise<RevisionData> {
  return {
    pendientesFirma: base,
    pendientesVistoBueno: [
      { id: "4", nombreCompleto: "García López María Teresa", documentos: [docs.cse2] },
      { id: "5", nombreCompleto: "Ramírez Santos Juan Carlos", documentos: [] },
    ],
  };
}