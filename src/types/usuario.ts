export type Rol = "docente" | "generador" | "revisor";

export type Usuario = {
  rol: string;
  nombre: string;
  ap_pat: string;
  ap_mat: string;
  puesto: string;
  docente_rfc: string;
};
