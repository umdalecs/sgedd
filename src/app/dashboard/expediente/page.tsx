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

import { getDocumentos } from "@/lib/actions/expediente";
import CardBase from "@/components/common/CardBase";
import Solicitarpdf from "@/components/docente/SolicitarPdf";
import { getDocumentByTypeID } from "@/lib/actions/documents";
import { TipoDocumento } from "@/types/TipoDocumento";
import { NavigationButton } from "@/components/docente/NavigationButton";

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
              {/* <TableHead className="text-center text-gray-500">
                Solicitar
              </TableHead> */}
              <TableHead className="text-center text-gray-500">
                Acción
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documentos!.map((doc) => (
              <Row tipoDoc={doc} key={doc.tipodocid} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </CardBase>
  );
}

async function Row({ tipoDoc }: { tipoDoc: TipoDocumento }) {
  const { data: document, error } = await getDocumentByTypeID(
    tipoDoc.tipodocid
  );

  return (
    <TableRow key={tipoDoc.tipodocid}>
      <TableCell>{tipoDoc.nombretipo}</TableCell>

      <TableCell className="space-x-8 text-center">
        <Solicitarpdf nombretipo={tipoDoc.nombretipo} />

        <NavigationButton hasError={!!error} path={`/dashboard/expediente/${tipoDoc.tipodocid}`}/>
      </TableCell>
    </TableRow>
  );
}


