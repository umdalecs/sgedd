"use server";
import PDFViewerCard from "@/components/common/PDFViewerCard";
import Firmar from "@/components/generador/Firmar";
import { ReportaGenerador } from "@/components/generador/ReportaGenerador";
import { getDocumentByID } from "@/actions/documents";
import { redirect } from "next/navigation";
import MarcarFinalizado from "@/components/generador/MarcarFinalizado";

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
          <MarcarFinalizado documento={documento!}/>
          <ReportaGenerador
            path={`/dashboard/generaciones/report/${documento!.documentoid}`}
          />
        </div>
      </PDFViewerCard>
    </>
  );
}
