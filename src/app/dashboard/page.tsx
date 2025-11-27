import CardBase from "@/components/common/CardBase";
import { CircleUserRound } from "lucide-react";
import { getCurrentUser } from "@/lib/actions/auth";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";

export default async function Page() {
  const usuario = await getCurrentUser();

  if (!usuario) {
    redirect("/");
  }

  return (
    <CardBase titulo="Perfil de Usuario">
      <CardContent className="p-8 m-auto flex w-xl">
        <div className="w-1/3 flex items-center justify-center">
          <div className="w-32 h-32 bg-secondary/50 rounded-full flex items-center justify-center">
            <Button variant="ghost" className="size-full rounded-full">
              <CircleUserRound className="text-primary size-full" />
            </Button>
          </div>
        </div>

        <div className="w-2/3 flex flex-col justify-center gap-8">
          <div className="flex gap-2">
            <p className="font-semibold w-1/3">Nombre:</p>
            <p className="w-2/3">
              {usuario.nombre} {usuario.apellido}
            </p>
          </div>

          <div className="flex gap-2">
            <p className="font-semibold w-1/3">Correo:</p>
            <p className="w-2/3">{usuario.email}</p>
          </div>

          {usuario.rol === "docente" && "estatusPlaza" in usuario && (
            <div className="flex gap-2">
              <p className="font-semibold w-1/3">Estatus plaza:</p>
              <p className="w-2/3">{usuario.estatusPlaza}</p>
            </div>
          )}

          {(usuario.rol === "generador" || usuario.rol === "revisor") && (
            <div className="flex gap-2">
              <p className="font-semibold w-1/3">Puesto:</p>
              <p className="w-2/3">{usuario.puesto}</p>
            </div>
          )}

          <div className="flex gap-2">
            <p className="font-semibold w-1/3">RFC:</p>
            <p className="w-2/3">{usuario.rfc}</p>
          </div>
        </div>
      </CardContent>
    </CardBase>
  );
}
