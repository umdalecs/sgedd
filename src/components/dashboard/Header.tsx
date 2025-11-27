import Image from "next/image";
import { getCurrentUser, logout } from "@/lib/actions/auth";
import { headers } from "next/headers";
import NavBar from "./NavBar";
import NotificationsMenu from "./NotificationsMenu";
import UserMenu from "./UserMenu";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

const notificaciones = [
  { id: 1, tipo: "aprobado", texto: "Documento Aprobado" },
  { id: 2, tipo: "rechazado", texto: "Acción requerida: Documento Rechazado" },
  { id: 3, tipo: "revision", texto: "Documento 'En Revisión'" },
];

export default async function Header() {
  const headerList = await headers();
  const pathname = headerList.get("x-invoke-path") || "";

  const usuario = await getCurrentUser();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="w-full">
        <div className="h-2/3 bg-primary flex justify-between px-5 py-3">
          <div className="flex w-1/6 min-w-[175px] gap-4 items-center">
            <div className="bg-primary-foreground w-2/3 rounded-2xl flex items-center justify-center">
              <Image
                src={"/img/logo-sgedd.png"}
                alt="SGEDD"
                width={100}
                height={100}
              />
            </div>
            <h1 className="font-bold text-2xl w-1/3 text-background">SGEDD</h1>
          </div>
          <div className="flex items-center justify-end gap-2 flex-wrap ">
            <h2 className="text-2xl text-background text-center">{usuario.rol}</h2>
            <NotificationsMenu notificaciones={notificaciones}/>
            <UserMenu />
            {/* <Button variant="ghost" onClick={handleLogout}>
              <LogOut className="text-primary-foreground size-fit" />
            </Button> */}
          </div>
        </div>
        <NavBar usuario={usuario} pathname={pathname} />
    </header>
  );
}
