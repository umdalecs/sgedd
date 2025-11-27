import Header from "@/components/common/Header";
import { Usuario } from "@/types/usuario";

export default function DashboardLayout({
  children,
}: LayoutProps<"/dashboard">) {
  const usuarioTest: Usuario = {
    nombre: "Pedro",
    apellido: "Sanchez",
    correo: "pedro@example.com",
    rfc: "PEASXXX1231",
    rol: "revisor",
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header rol={usuarioTest.rol} />

      <main className="flex-1">{children}</main>
    </div>
  );
}
