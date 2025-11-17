import { Documento, Solicitante } from "@/types/generador";

const docs: Record<string, Documento> = {
  cse1: {
    id: "doc1",
    nombre: "Constancia de Servicios Escolares",
    tipo: "Constancia de Servicios Escolares",
    urlPDF: "/pdfs/constancia_servicios_1.pdf",
  },
  rh1: {
    id: "doc2",
    nombre: "Constancia de Recursos Humanos",
    tipo: "Constancia de Recursos Humanos",
    urlPDF: "/pdfs/constancia_rh_1.pdf",
  },
};

export const solicitantes: Solicitante[] = [
  {
    id: "1",
    nombreCompleto: "Flores Saldaña Martín Alejandro",
    documentos: [docs.cse1, docs.rh1],
  },
  { id: "2", nombreCompleto: "Meza Quiñonez César Iván", documentos: [] },
  { id: "3", nombreCompleto: "Estrada Valenzuela Ernesto", documentos: [] },
];