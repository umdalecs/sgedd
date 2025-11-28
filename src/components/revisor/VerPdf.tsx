"use client";
import { getDocumentLink } from "@/lib/actions/documents";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";

export default function VerPdf({ document_id }: { document_id: string }) {
  const handleClick = async () => {
    const { data: link, error } = await getDocumentLink();

    if(error) {
      redirect("/dashboard")
    }

    redirect(link!);
  };

  return <Button onClick={handleClick}>Ver PDF</Button>;
}
