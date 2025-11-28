import CardBase from "@/components/common/CardBase";
import VerPdf from "@/components/revisor/VerPdf";
import { CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getRevisorData } from "@/lib/actions/revisor";
import { redirect } from "next/navigation";

export default async function Page() {
  const {data: documentos, error} = await getRevisorData();

  if(error) {
    redirect("/dashboard")
  }

  return (
    <CardBase titulo="Pendientes de visto bueno">
      <CardContent>
        <Table>
          <TableHeader className="sticky top-0 bg-background">
            <TableRow>
              <TableHead className="text-center text-gray-500">ID</TableHead>
              <TableHead className="text-center text-gray-500">
                Estado
              </TableHead>
              <TableHead className="text-center text-gray-500">
                Fecha Aprobacion
              </TableHead>
              <TableHead className="text-center text-gray-500">
                Observacion
              </TableHead>
              <TableHead className="text-center text-gray-500">
                Id Documento
              </TableHead>
              <TableHead className="text-center text-gray-500">
                Acción
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documentos!.map((event) => (
              <TableRow key={event.aprobacionid}>
                <TableCell>{event.aprobacionid}</TableCell>
                <TableCell>{event.vistobuenoedo}</TableCell>
                <TableCell>{event.fechaaprobacion}</TableCell>
                <TableCell>{event.observacion}</TableCell>
                <TableCell>{event.documentoid}</TableCell>
                <TableCell>
                  <VerPdf document_id={event.documentoid}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </CardBase>
  );
}
