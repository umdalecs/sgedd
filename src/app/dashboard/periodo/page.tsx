import CardBase from "@/components/common/CardBase";
import { CardContent } from "@/components/ui/card";
import { getConvocatorias } from "@/lib/actions/convocatorias";
import { Dot } from "lucide-react";
import { redirect } from "next/navigation";

export default async function Page() {
  const {data: convocatorias, error } = await getConvocatorias();

  if (error) {
    redirect("/")
  }

  const hoy = new Date();

  return (
    <CardBase titulo="Convocatoria">
      <CardContent className="flex-col w-full space-y-4 my-4 overflow-y-auto">
        {convocatorias!.length > 0 ? (
          convocatorias!.map((convocatoria) => {
            const fechaIni = new Date(
              convocatoria.fechainicio
            );
            const fechaFin = new Date(
              convocatoria.fechafin
            );

            const abierta = hoy >= fechaIni && hoy <= fechaFin;
            return (
              <div
                className="p-5 flex justify-around w-full h-25 items-center bg-sidebar-border rounded-2xl"
                key={convocatoria.convocatoriaid}
              >
                <div>{convocatoria.nombreconvocatoria}</div>
                <div className="flex items-center">
                  <div>
                    <Dot
                      className={`size-20 ${
                        abierta ? "text-green-500" : "text-red-500"
                      }`}
                    />
                  </div>
                  <div>{abierta ? "Abierta" : "Cerrada"}</div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-sm text-gray-500 p-2">
            No hay periodos registrados.
          </div>
        )}
      </CardContent>
    </CardBase>
  );
}
