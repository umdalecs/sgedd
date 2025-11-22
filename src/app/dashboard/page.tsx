"use client";
import MainCard from "@/components/dashboard/MainCard";
import { Usuario, UsuarioDocente, asignarRol } from "@/types/usuario";

export default function Page() {
  const usuarioTest: Usuario = {
    nombre: "Pedro",
    apellido: "Sanchez",
    correo: "pedro@example.com",
    puesto: "Subdireccion",
    rfc: "PEASXXX1231",
    rol: asignarRol("Subdireccion"),
  };
  const usuarioTestD: UsuarioDocente = {
    nombre: "Pedro",
    apellido: "Sanchez",
    correo: "pedro@example.com",
    puesto: "Docente",
    rfc: "PEASXXX1231",
    estatusPlaza: "Activo",
    rol: asignarRol("Docente"),
  }
  return (
    <>
    <div className="min-h-70">
      <MainCard usuario={usuarioTest}/>
    </div>
    </>
  )
}