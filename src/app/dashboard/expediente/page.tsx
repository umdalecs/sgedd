import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CardBase from "@/components/common/CardBase";
import { CardContent } from "@/components/ui/card";
import Solicitarpdf from "@/components/docente/solicitarpdf";
import { getDocumentos } from "@/lib/actions/expediente";

export default async function Page() {
  const { data: documentos, error } = await getDocumentos();

  return (
    <CardBase
      titulo="Mi Expediente - Periodo 2025"
      className="rounded-2xl border shadow-2xl"
    >
      <CardContent className="p-4 pt-0">
        <Table>
          <TableHeader className="sticky top-0 bg-background">
            <TableRow>
              <TableHead className="text-center text-gray-500">
                Documento
              </TableHead>
              <TableHead className="text-center text-gray-500">
                Solicitar
              </TableHead>
              <TableHead className="text-center text-gray-500">
                Acción
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documentos!.map((doc) => (
              <TableRow key={doc.tipodocid}>
                <TableCell>{doc.nombretipo}</TableCell>
                <TableCell className="text-center">
                  <Solicitarpdf documentoId={doc.tipodocid} />
                </TableCell>
                <TableCell className="space-x-8 text-center">
                  <Link
                    href={`/api/pdf/${encodeURIComponent(doc.nombretipo)}`}
                    target="_blank"
                  >
                    <Button
                      variant="default"
                      size="sm"
                      className="rounded-2xl w-1/4"
                    >
                      Ver PDF
                    </Button>
                  </Link>
                  <Link href={`/dashboard/expediente/${doc.tipodocid}`}>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="rounded-2xl w-1/4"
                    >
                      Reportar
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </CardBase>
  );
}
