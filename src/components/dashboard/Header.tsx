import Image from "next/image";
import { getCurrentUser } from "@/actions/auth";
import { headers } from "next/headers";
import NavBar from "./NavBar";
import NotificationsMenu from "./NotificationsMenu";
import UserMenu from "./UserMenu";
import { capitalize } from "@/lib/utils";
import Link from "next/link";

const notificaciones = [
  { id: 1, tipo: "aprobado", texto: "Documento Aprobado" },
  { id: 2, tipo: "rechazado", texto: "Acción requerida: Documento Rechazado" },
  { id: 3, tipo: "revision", texto: "Documento 'En Revisión'" },
];

export default async function Header() {
  const headerList = await headers();
  const pathname = headerList.get("x-invoke-path") || "";

  const usuario = await getCurrentUser();

  return (
    <header className="w-full">
      <div className="h-2/3 bg-primary flex justify-between px-5 py-3">
        <Link href="/dashboard" className="flex w-1/6 min-w-[175px] gap-4 items-center">
          <div className="bg-primary-foreground rounded-lg flex items-center justify-center">
            <Image
              src={"/img/logo-sgedd.png"}
              alt="SGEDD"
              width={100}
              height={100}
            />
          </div>
          <h1 className="font-bold text-2xl text-background">SGEDD</h1>
        </Link>
        <div className="flex items-center justify-end gap-2 flex-wrap ">
          <h2 className="text-2xl text-background text-center">
            {capitalize(usuario.rol)}
          </h2>
          <NotificationsMenu notificaciones={notificaciones} />
          <UserMenu />
        </div>
      </div>
      <NavBar usuario={usuario} pathname={pathname} />
    </header>
  );
}