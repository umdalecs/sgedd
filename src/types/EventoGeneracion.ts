import { Documento } from "./Documento";

export interface EventoGeneracion {
  idevento: string;
  fechasolicitud: string;
  idsolicitante: string;
  generador_rfc: string;
  documento_id: string;
  documento: Documento | null;
}
