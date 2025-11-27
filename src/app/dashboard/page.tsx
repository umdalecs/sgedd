"use client";
import MainCard from "@/components/dashboard/MainCard";
import { Usuario } from "@/types/usuario";

export default function Page() {
  const usuarioTest: Usuario = {
    nombre: "Pedro",
    apellido: "Sanchez",
    correo: "pedro@example.com",
    rfc: "PEASXXX1231",
    rol: "docente",
  };
  return (
    <div className="min-h-70">
      <MainCard usuario={usuarioTest}/>
    </div>
  )
}