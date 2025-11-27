import CardBase from "@/components/common/CardBase";
import { Button } from "../ui/button";
import { CircleUserRound } from "lucide-react";
import { getCurrentUser } from "@/lib/actions/auth";
import { redirect } from "next/navigation";

// TODO: Este componente se va a romper

export default async function MainCard() {
  const usuario_supabase = await getCurrentUser();

  if(!usuario_supabase) {
    redirect("/");
  }
  
  return (
    <CardBase titulo="Perfil de Usuario">
      <div className="flex w-full h-full">
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
              {usuario_supabase.profile.nombre} {usuario_supabase.profile.apellido}
            </p>
          </div>

          <div className="flex gap-2">
            <p className="font-semibold w-1/3">Correo:</p>
            <p className="w-2/3">{usuario_supabase?.email}</p>
          </div>

          {usuario_supabase.user_metadata.role === "docente" && "estatusPlaza" in usuario_supabase && (
            <div className="flex gap-2">
              <p className="font-semibold w-1/3">Estatus plaza:</p>
              <p className="w-2/3">{usuario_supabase.profile.estatusPlaza}</p>
            </div>
          )}

          {(usuario_supabase.user_metadata.role === "generador" || usuario_supabase.user_metadata.role === "revisor") && (
            <div className="flex gap-2">
              <p className="font-semibold w-1/3">Puesto:</p>
              <p className="w-2/3">{usuario_supabase.profile.puesto}</p>
            </div>
          )}

          <div className="flex gap-2">
            <p className="font-semibold w-1/3">RFC:</p>
            <p className="w-2/3">{usuario_supabase.profile.rfc}</p>
          </div>
        </div>
      </div>
    </CardBase>
  );
}
