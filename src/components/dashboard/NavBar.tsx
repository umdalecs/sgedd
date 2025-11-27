import Link from "next/link";
import { Button } from "../ui/button";

const rutaRol: Record<string, string> = {
  Docente: "/dashboard/expediente",
  Revisor: "/dashboard/revisiones",
  Generador: "/dashboard/generaciones",
};

export default function NavBar({
  usuario,
  pathname,
}: {
  usuario: { rol: string };
  pathname: string;
}) {
  return (
    <div className="h-1/3 bg-sidebar-border flex justify-between">
      <div className="flex items-center justify-start gap-5 p-2 pl-8">
        <Link
          href="/dashboard"
          className={`rounded-sm p-1 ${
            pathname === "/dashboard" ? "bg-secondary/50" : "hover:bg-accent"
          }`}
        >
          Inicio
        </Link>
        <Link
          href="/dashboard/periodo"
          className={`rounded-sm p-1 ${
            pathname === "/dashboard/periodo"
              ? "bg-secondary/50"
              : "hover:bg-accent"
          }`}
        >
          Período
        </Link>
        <Link
          href={rutaRol[usuario.rol] || "#"}
          className={`rounded-sm p-1 ${
            pathname === rutaRol[usuario.rol]
              ? "bg-secondary/50"
              : "hover:bg-accent"
          }`}
        >
          {usuario.rol === "docente"
            ? "Mi expediente"
            : usuario.rol === "revisor"
            ? "Revisiones"
            : "Generaciones"}
        </Link>
        {usuario.rol === "generador" && (
          <Link
            href="/dashboard/plantillas"
            className={`rounded-sm p-1 ${
              pathname === "/dashboard/plantillas"
                ? "bg-secondary/50"
                : "hover:bg-accent"
            }`}
          >
            Plantillas
          </Link>
        )}
        {usuario.rol === "revisor" && (
          <Link
            href="/dashboard/firmas"
            className={`rounded-sm p-1 ${
              pathname === "/dashboard/firmas"
                ? "bg-secondary/50"
                : "hover:bg-accent"
            }`}
          >
            Mis Firmas
          </Link>
        )}
      </div>
      <div className="flex items-center justify-start gap-5 p-2 pr-8">
        <Link
          href="/dashboard/soporte"
          className={`rounded-sm p-1 ${
            pathname === "/dashboard/soporte"
              ? "bg-secondary/50"
              : "hover:bg-accent"
          }`}
        >
          Soporte
        </Link>
        <Link
          href="/guia_uso"
          className={`rounded-sm p-1 ${
            pathname === "/guia_uso" ? "bg-secondary/50" : "hover:bg-accent"
          }`}
        >
          Guía de uso
        </Link>
      </div>
    </div>
  );
}
