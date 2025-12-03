import CardBase from "@/components/common/CardBase";
import NavegarVerPDF from "@/components/generador/Generador";
import { CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getEventos } from "@/actions/generaciones";
import { redirect } from "next/navigation";

export default async function Page() {
  const { data: eventos, error } = await getEventos();

  if (error) {
    console.log(error);
    redirect("/dashboard");
  }

  return (
    <CardBase
      titulo="Generaciones - Periodo 2025"
      className="rounded-2xl border shadow-2xl"
    >
      <CardContent className="p-4 pt-0">
        <Table>
          <TableHeader className="sticky top-0 bg-background">
            <TableRow>
              <TableHead className="text-center text-gray-500">
                Estado
              </TableHead>
              <TableHead className="text-center text-gray-500">
                Fecha Solicitud
              </TableHead>
              <TableHead className="text-center text-gray-500">
                Documento
              </TableHead>
              <TableHead className="text-center text-gray-500">
                RFC Solicitante
              </TableHead>
              <TableHead className="text-center text-gray-500">
                Acción
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {eventos!.map((evento) => (
              <TableRow key={evento.idevento}>
                <TableCell>
                  {evento.documento!.estadoactual}
                </TableCell>
                <TableCell>{evento.fechasolicitud}</TableCell>
                <TableCell>
                  {evento.documento!.tipodocumento!.nombretipo}
                </TableCell>
                <TableCell>{evento.idsolicitante}</TableCell>
                <TableCell>
                  <NavegarVerPDF documentoid={evento.documento!.documentoid} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </CardBase>
  );
}
