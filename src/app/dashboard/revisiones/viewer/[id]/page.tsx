"use server";
import DocContent from "@/components/common/DocContent";
import PDFViewerCard from "@/components/common/PDFViewerCard";
import { Button } from "@/components/ui/button";
import { getDocumentByID } from "@/lib/actions/documents";
import { CheckLine, TriangleAlert, X } from "lucide-react";
import { redirect } from "next/navigation";

export default async function Page({params}: PageProps<"/dashboard/revisiones/viewer/[id]">) {
  const { id } = await params;

  const {data: document, error} = await getDocumentByID(id);

  if (error) {
    redirect("/dashboard")
  }

  return (
    <>
      <DocContent />
      <PDFViewerCard url={document!.rutaarchivo}>
        <div className="flex flex-col w-full h-full items-center justify-around">
          <Button className="flex w-3/4 h-15 text-2xl font-bold">
            <div>Aprobar</div>
            <div>
              <CheckLine className="size-full" />
            </div>
          </Button>
          <Button className="flex w-3/4 h-15 text-2xl font-bold">
            <div>Rechazar</div>
            <div>
              <X className="size-full" />
            </div>
          </Button>
          <Button className="flex w-3/4 h-15 text-2xl font-bold">
            <div>Reportar</div>
            <div>
              <TriangleAlert className="size-full" />
            </div>
          </Button>
        </div>
      </PDFViewerCard>
    </>
  );
}
