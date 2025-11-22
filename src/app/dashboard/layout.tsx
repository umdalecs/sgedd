"use client";

import Header from "@/components/common/Header";
import { Usuario, asignarRol, UsuarioDocente } from "@/types/usuario";

export default function DashboardLayout({
  children,
}: LayoutProps<"/dashboard">) {
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
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header rol={usuarioTest.rol} />

      <main className="flex-1">{children}</main>
    </div>
  );
}
