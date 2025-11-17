export type DocumentoTipo =
  | "Constancia de Servicios Escolares"
  | "Constancia de Recursos Humanos";

export interface Documento {
  id: string;
  nombre: string;
  tipo: DocumentoTipo;
  urlPDF: string;
}

export interface Solicitante {
  id: string;
  nombreCompleto: string;
  documentos: Documento[];
}