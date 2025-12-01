
export interface Documento {
  documentoid: string;
  estadoactual: string;
  rutaarchivo: string;
  tipodocid: string;
  expedienteid: string;
}


export interface TipoDocumento {
  tipodocid: string;
  nombretipo: string;
  tipoinf: string;
  plantillaruta: string;
  docintegrado: string;
}
