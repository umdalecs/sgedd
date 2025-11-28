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
import { FilePlus } from "lucide-react"; // Importa el icono
import Link from "next/link";
import CardBase from "@/components/common/CardBase";
import { CardContent } from "@/components/ui/card";
import { getDocumentos } from "@/lib/actions/documents";

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
  const documentos = await getDocumentos();

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
                Estado
              </TableHead>
              <TableHead className="text-center text-gray-500">
                Ultima actualización
              </TableHead>
              <TableHead className="text-center text-gray-500">
                Acción
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documentos.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell>{doc.nombre}</TableCell>
                <TableCell className="text-center">
                  {doc.solicitar === true ? (
                    <Button
                      variant="default"
                      size="icon"
                      className="rounded-2xl w-3/5"
                    >
                      <FilePlus className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      variant="default"
                      size="icon"
                      className="rounded-2xl w-3/5 bg-primary/40"
                    >
                      <FilePlus className="h-4 w-4" />
                    </Button>
                  )}
                </TableCell>
                <TableCell className="text-center">
                  <Badge {...getBadgeProps(doc.estado)}>{doc.estado}</Badge>
                </TableCell>
                <TableCell className="text-center">
                  {doc.ultimaActualizacion}
                </TableCell>
                <TableCell className="space-x-8 text-center">
                  {doc.verPDF === true ? (
                    <Button
                      variant="default"
                      size="sm"
                      className="rounded-2xl w-1/4"
                    >
                      Ver PDF
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-2xl w-1/4"
                    >
                      Ver motivos
                    </Button>
                  )}
                  <Link href="/dashboard/expediente/documento_soporte">
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
