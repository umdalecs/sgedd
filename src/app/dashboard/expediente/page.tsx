"use server";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CardContent } from "@/components/ui/card";

import { getDocumentos } from "@/actions/expediente";
import CardBase from "@/components/common/CardBase";
import Solicitarpdf from "@/components/docente/solicitarpdf";
import { getDocumentByTypeID } from "@/actions/documents";
import { TipoDocumento } from "@/types/TipoDocumento";
import { ReportaDocente } from "@/components/docente/ReportaDocente";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Page() {
  const { data: documentos } = await getDocumentos();

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
                Acción
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documentos!.map((tipoDoc) => (
              <Row tipoDoc={tipoDoc} key={tipoDoc.tipodocid} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </CardBase>
  );
}

async function Row({ tipoDoc }: { tipoDoc: TipoDocumento }) {
  const { data: document } = await getDocumentByTypeID(tipoDoc.tipodocid);

  const exists = !!document;

  return (
    <TableRow key={tipoDoc.tipodocid}>
      <TableCell>{tipoDoc.nombretipo}</TableCell>

      <TableCell className="space-x-8 text-center">
        <Solicitarpdf exists={exists} nombretipo={tipoDoc.nombretipo} />
        {document ? (
          <Button>
            <Link href={document.rutaarchivo} target="_blank">Ver PDF</Link>
          </Button>
        ) : (
          <Button disabled>Ver PDF</Button>
        )}
        <ReportaDocente
          exists={exists}
          path={`/dashboard/expediente/report/${tipoDoc.tipodocid}`}
        />
      </TableCell>
    </TableRow>
  );
}
