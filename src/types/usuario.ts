export type Rol = "docente" | "generador" | "revisor";

export interface Usuario {
  nombre: string;
  apellido: string;
  correo: string;
  rfc: string;
  rol: Rol;
}

