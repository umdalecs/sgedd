import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Usuario, UsuarioDocente } from "@/types/usuario";
import { Button } from "../ui/button";
import { CircleUserRound } from "lucide-react";

type Props = {
  usuario: Usuario | UsuarioDocente;
};

export default function DashboardCards({ usuario }: Props) {
  return (
    <>
      <div className="flex justify-center items-center w-full py-22">
        <Card className="flex-col w-1/2 min-w-lg h-full py-0 gap-0 min-h-90">
          <CardHeader className="bg-primary text-primary-foreground rounded-t-xl py-3 text-center gap-0">
            <CardTitle className="text-3xl font-bold">
              Perfil de Usuario
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex items-center justify-center gap-0">
            <div className="flex w-full h-full">
              <div className="w-1/3 flex items-center justify-center">
                <div className="w-32 h-32 bg-sidebar-border rounded-full flex items-center justify-center">
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
                  <p className="w-2/3">{usuario.correo}</p>
                </div>
                {usuario.rol === "Docente" && "estatusPlaza" in usuario && (
                  <div className="flex gap-2">
                    <p className="font-semibold w-1/3">Estatus plaza:</p>
                    <p className="w-2/3">{usuario.estatusPlaza}</p>
                  </div>
                )}
                {(usuario.rol === "Generador" || usuario.rol === "Revisor") && (
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
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
