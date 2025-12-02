"use server";
import PDFViewerCard from "@/components/common/PDFViewerCard";
import Firmar from "@/components/generador/Firmar";
import { ReportaGenerador } from "@/components/generador/ReportaGenerador";
import SolicitarFirmas from "@/components/generador/SolicitarFirmas";
import { Button } from "@/components/ui/button";

import { getDocumentByID } from "@/lib/actions/documents";
import { CheckLine } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: PageProps<"/dashboard/generaciones/viewer/[documentoId]">) {
  const { documentoId } = await params;

  const { data: documento, error } = await getDocumentByID(documentoId);

  if (error) {
    redirect("/dashboard");
  }

  return (
    <>
      <div className="flex w-full justify-around p-5">
        <div className="flex flex-col items-center w-1/4">
          <div className="bg-sidebar-accent-foreground text-accent w-full text-center font-bold text-2xl rounded-2xl">
            Solicitante:
          </div>
          <div className="font-bold">{documento!.expediente!.docente_rfc}</div>
        </div>
        <div className="flex flex-col items-center w-1/4">
          <div className="bg-sidebar-accent-foreground text-accent w-full text-center font-bold text-2xl rounded-2xl">
            Estado:
          </div>
          <div className="font-bold">{documento?.estadoactual}</div>
        </div>
      </div>
      <PDFViewerCard url={documento!.rutaarchivo}>
        <div className="flex flex-col w-full h-full items-center justify-around">
          <Firmar documento={documento!} />
          <SolicitarFirmas />
          <Button className="w-3/4 h-15 ">
            <Link
              href="/dashboard/generaciones"
              className="flex text-2xl gap-2 font-bold"
            >
              <div>Finalizar</div>
              <div>
                <CheckLine className="size-full" />
              </div>
            </Link>
          </Button>
          <ReportaGenerador
            path={`/dashboard/generaciones/report/${documento!.documentoid}`}
          />
        </div>
      </PDFViewerCard>
    </>
  );
}
