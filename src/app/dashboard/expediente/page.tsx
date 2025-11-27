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

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-2xl font-bold mt-4 mb-2">
        MI EXPEDIENTE - PERIODO 2025
      </h1>
      <div className="rounded-2xl border shadow-2xl">
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
      </div>
    </div>
  );
}

const documentos = [
  {
    id: 1,
    nombre: "Constancia de Recursos Humanos",
    solicitar: false,
    estado: "Aprobado",
    ultimaActualizacion: "24/10/2025",
    verPDF: true,
  },
  {
    id: 2,
    nombre: "Carta de Exclusividad  Laboral",
    solicitar: true,
    estado: "NoGen",
    ultimaActualizacion: "24/10/2025",
    verPDF: false,
  },
  {
    id: 3,
    nombre: "Carta de liberacion de Actividades",
    solicitar: false,
    estado: "Pendiente",
    ultimaActualizacion: "20/10/2025",
    verPDF: false,
  },
  {
    id: 4,
    nombre: "Constancia de servicios escolares",
    solicitar: true,
    estado: "Rechazado",
    ultimaActualizacion: "18/10/2025",
    verPDF: false,
  },
];

const getBadgeProps = (estado: string) => {
  switch (estado.toLowerCase()) {
    case "aprobado":
      return {
        variant: "secondary" as const,
        className: "bg-green-100 text-green-800",
      };

    case "pendiente":
      return {
        variant: "secondary" as const,
        className: "bg-yellow-100 text-yellow-800",
      };

    case "rechazado":
      return {
        variant: "destructive" as const,
        className: undefined,
      };

    case "nogen":
      return {
        variant: "secondary" as const,
        className: "bg-gray-300 text-white",
      };

    default:
      return {
        variant: "secondary" as const,
        className: undefined,
      };
  }
};
