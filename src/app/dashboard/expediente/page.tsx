import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FilePlus } from "lucide-react";
import Link from "next/link";
import CardBase from "@/components/common/CardBase";
import { CardContent } from "@/components/ui/card";
import Solicitarpdf from "@/components/docente/solicitarpdf";
import { getDocumentos } from "@/lib/actions/expediente";

const getBadgeProps = (estado: string) => {
  estado = estado.toLowerCase();

  const catalog: Record<
    string,
    {
      variant:
        | "secondary"
        | "destructive"
        | "default"
        | "outline"
        | null
        | undefined;
      className: string;
    }
  > = {
    aprobado: {
      variant: "secondary",
      className: "bg-green-100 text-green-800",
    },
    pendiente: {
      variant: "secondary",
      className: "bg-yellow-100 text-yellow-800",
    },
    rechazado: {
      variant: "destructive",
      className: "",
    },
    nogen: {
      variant: "secondary",
      className: "bg-gray-300 text-white",
    },
    default: {
      variant: "secondary",
      className: "",
    },
  };

  const result = catalog[estado];

  return result ?? catalog["default"];
};

export default async function Page() {
  //const documentos = await getDocumentos();
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
                  <Link href={`/pdf/${doc.nombretipo}.pdf`} target="_blank">
                    <Button
                      variant="default"
                      size="sm"
                      className="rounded-2xl w-1/4"
                    >
                      Ver PDF
                    </Button>
                  </Link>
                  <Link
                    href={`/dashboard/expediente/documento_soporte?doc=${encodeURIComponent(
                      doc.nombretipo
                    )}`}
                  >
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
