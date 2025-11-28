import CardBase from "@/components/common/CardBase";
import Generador from "@/components/generador/Generador";
import { CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getEventos } from "@/lib/actions/generaciones";
import { redirect } from "next/navigation";

export default async function Page() {
  const { data: eventos, error } = await getEventos();

  if (error) {
    redirect("/dashboard")
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
              <TableHead className="text-center text-gray-500">ID</TableHead>
              <TableHead className="text-center text-gray-500">
                Fecha Solicitud
              </TableHead>
              <TableHead className="text-center text-gray-500">
                Tipo Documento
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
            {eventos!.map((event) => (
              <TableRow key={event.idevento}>
                <TableCell>{event.idevento}</TableCell>
                <TableCell>{event.fechasolicitud}</TableCell>
                <TableCell>{event.tipodocumento}</TableCell>
                <TableCell>{event.idsolicitante}</TableCell>
                <TableCell>
                  <Generador evento={event}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </CardBase>
  );
}
