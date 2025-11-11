export type Rol = "Docente" | "Generador" | "Revisor" | "";

export interface Usuario {
  nombre: string;
  apellido: string;
  correo: string;
  puesto: string;
  rfc: string;
  rol: Rol;
}

export function asignarRol(puesto: string): Rol {
  if (puesto === "Docente") return "Docente";
  if (puesto === "Vinculacion" || puesto === "Departamento Academico")
    return "Generador";
  if (puesto === "Subdireccion") return "Revisor";
  return "";
}

export interface UsuarioDocente extends Usuario {
  estatusPlaza: string;
}
