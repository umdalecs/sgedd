import { Expediente } from "./Expediente";
import { TipoDocumento } from "./TipoDocumento";

export interface Documento {
  documentoid: string;
  estadoactual: string;
  rutaarchivo: string;
  tipodocid: string;
  expedienteid: string;
  tipodocumento?: TipoDocumento;
  expediente?: Expediente;
}
