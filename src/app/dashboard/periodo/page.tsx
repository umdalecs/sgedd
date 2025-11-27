import CardBase from "@/components/common/CardBase";
import { CardContent } from "@/components/ui/card";
import { Dot } from "lucide-react";

const periodos = [
  {
    id: 1,
    nombre: "Ago-Dic 2024",
    fechaIni: "01/08/2024",
    fechaFin: "01/12/2024",
  },
  {
    id: 2,
    nombre: "Ene-Jun 2024",
    fechaIni: "01/01/2024",
    fechaFin: "01/6/2024",
  },
  {
    id: 3,
    nombre: "Ago-Dic 2025",
    fechaIni: "01/08/2025",
    fechaFin: "01/12/2025",
  },
  {
    id: 4,
    nombre: "Ago-Dic 2025",
    fechaIni: "01/08/2025",
    fechaFin: "01/12/2025",
  },
  {
    id: 5,
    nombre: "Ago-Dic 2025",
    fechaIni: "01/08/2025",
    fechaFin: "01/12/2025",
  },
  {
    id: 6,
    nombre: "Ago-Dic 2025",
    fechaIni: "01/08/2025",
    fechaFin: "01/12/2025",
  },

];

export default function Page() {
  const hoy = new Date();

  return (
    <CardBase titulo="Convocatoria">
      <CardContent className="flex-col w-full space-y-4 my-4 overflow-y-auto">
        {periodos.length > 0 ? (
          periodos.map((n) => {
            const fechaIni = new Date(
              n.fechaIni.split("/").reverse().join("-")
            );
            const fechaFin = new Date(
              n.fechaFin.split("/").reverse().join("-")
            );

            const abierta = hoy >= fechaIni && hoy <= fechaFin;
            return (
              <div
                className="p-5 flex justify-around w-full h-25 items-center bg-sidebar-border rounded-2xl"
                key={n.id}
              >
                <div>{n.nombre}</div>
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
