import Link from "next/link";

const rutasRol: Record<string, {
  url: string,
  routeName: string
}> = {
  docente: {
    url: "/dashboard/expediente",
    routeName: "Expediente"
  },
  revisor: {
    url: "/dashboard/revisiones",
    routeName: "Revisiones"
  },
  generador: {
    url: "/dashboard/generaciones",
    routeName: "Generaciones"
  },
};

export default function NavBar({
  usuario,
  pathname,
}: {
  usuario: { rol: string };
  pathname: string;
}) {
  const {url, routeName} = rutasRol[usuario.rol];

  // const 

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
          href={url}
          className={`rounded-sm p-1 ${
            pathname === url
              ? "bg-secondary/50"
              : "hover:bg-accent"
          }`}
        >
          {routeName}
        </Link>
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