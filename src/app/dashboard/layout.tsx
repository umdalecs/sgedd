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
    puesto: "Vinculacion",
    rfc: "PEASXXX1231",
    rol: asignarRol("Vinculacion"),
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
      <Header rol={usuarioTestD.rol} />

      <main className="flex-1">{children}</main>
    </div>
  );
}
