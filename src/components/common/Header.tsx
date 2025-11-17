"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Bell, UserRound, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ rol }: { rol: string }) {
  const pathname = usePathname();
  const rutaRol: Record<string, string> = {
  "Docente": "/dashboard/expediente",
  "Revisor": "/dashboard/revisiones",
  "Generador": "/dashboard/generaciones",
  };
  return (
    <>
      <div className="w-full">
        <div className="h-2/3 bg-primary flex justify-between px-5 py-3">
          <div className="flex w-1/6 min-w-[175px] gap-4 items-center">
            <div className="bg-primary-foreground w-2/3 rounded-2xl flex items-center justify-center">
              <Image
                src={"/img/logo-sgedd.png"}
                alt="SGEDD"
                width={100}
                height={100}
              ></Image>
            </div>
            <h1 className="font-bold text-2xl w-1/3 text-background">SGEDD</h1>
          </div>
          <div className="flex items-center justify-end gap-2 flex-wrap ">
            <h2 className="text-2xl text-background text-center">{rol}</h2>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <Bell className="text-primary-foreground size-fit" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-64 bg-sidebar-border space-y-2"
              >
                <DropdownMenuLabel>Notificaciones</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-accent-foreground" />

                {notificaciones.length > 0 ? (
                  notificaciones.map((n) => (
                    <DropdownMenuItem
                      className="bg-primary-foreground rounded-2xl border-b-3 border-b-primary data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground"
                      key={n.id}
                    >
                      {n.texto}
                    </DropdownMenuItem>
                  ))
                ) : (
                  <div className="text-sm text-gray-500 p-2">
                    No hay notificaciones
                  </div>
                )}

                <DropdownMenuSeparator />
                <DropdownMenuItem className="bg-primary rounded-lg justify-center data-[highlighted]:bg-secondary data-[highlighted]:text-primary-foreground">
                  <p className="text-sidebar-primary-foreground font-bold">
                    Ver todas
                  </p>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <UserRound className="text-primary-foreground size-fit" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-64 bg-sidebar-border space-y-2"
              >
                <DropdownMenuLabel>Perfil</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-accent-foreground" />
                <DropdownMenuItem className="bg-primary-foreground rounded-2xl border-b-3 border-b-primary data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">
                  Cambiar datos del perfil
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-primary-foreground rounded-2xl border-b-3 border-b-primary data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">
                  Cambiar contraseña
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/">
              <Button variant="ghost">
                <LogOut className="text-primary-foreground size-fit" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="h-1/3 bg-sidebar-border flex justify-between">
          <div className="flex items-center justify-start gap-5 px-8 h-full">
            <Link href="/dashboard">
              <Button
                variant="ghost"
                className={`rounded-2xl ${
                  pathname === "/dashboard"
                    ? "bg-secondary/50"
                    : "hover:bg-primary"
                }`}
              >
                <p>Inicio</p>
              </Button>
            </Link>
            <Link href="/dashboard/periodo">
              <Button
                variant="ghost"
                className={`rounded-2xl ${
                  pathname === "/dashboard/periodo"
                    ? "bg-secondary/50"
                    : "hover:bg-primary"
                }`}
              >
                <p>Período</p>
              </Button>
            </Link>
            <Link href={rutaRol[rol] || "#"}>
              <Button
                variant="ghost"
                className={`rounded-2xl ${
                  pathname === rutaRol[rol]
                    ? "bg-secondary/50"
                    : "hover:bg-primary"
                }`}
              >
                <p>
                  {rol === "Docente"
                    ? "Mi expediente"
                    : rol === "Revisor"
                    ? "Revisiones"
                    : "Generaciones"}
                </p>
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-end gap-5 px-8 h-full">
            <Link href="/dashboard/soporte">
              <Button
                variant="ghost"
                className={`rounded-2xl ${
                  pathname === "/dashboard/soporte"
                    ? "bg-secondary/50"
                    : "hover:bg-primary"
                }`}
              >
                <p>Soporte</p>
              </Button>
            </Link>
            <Link href="/guia_uso">
              <Button
                variant="ghost"
                className={`rounded-2xl ${
                  pathname === "/guia_uso"
                    ? "bg-secondary/50"
                    : "hover:bg-primary"
                }`}
              >
                <p>Guía de uso</p>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const notificaciones = [
  { id: 1, tipo: "aprobado", texto: "Documento Aprobado" },
  { id: 2, tipo: "rechazado", texto: "Acción requerida: Documento Rechazado" },
  { id: 3, tipo: "revision", texto: "Documento 'En Revisión'" },
];
