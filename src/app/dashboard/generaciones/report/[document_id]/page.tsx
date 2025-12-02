"use server";
import CardBase from "@/components/common/CardBase";
import { SupportForm } from "@/components/forms/SupportForm";
import { CardContent } from "@/components/ui/card";
import { getDocumentByID } from "@/lib/actions/documents";
import { redirect } from "next/navigation";

export default async function Page({ params }: PageProps<"/dashboard/generaciones/report/[document_id]">) {
  const { document_id } = await params;

  if (!document_id){
    redirect("/dashboard/expediente")
  }

  const {data: document, error} = await getDocumentByID(document_id);

  if (error) {
    redirect("/dashboard/expediente")
  }

  return (
    <CardBase titulo="Reportar error en documento" className="">
      <CardContent className="p-6 grid gap-6">
        <SupportForm document={document} />
      </CardContent>
    </CardBase>
  );
}
