"use client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function NavegarVerPDF({ documentoid }: { documentoid: string }) {
  const router = useRouter();

  const handleClick = async () => {
    router.push(`/dashboard/generaciones/viewer/${documentoid}`)
  };

  return (
    <Button variant="default" onClick={handleClick}>
      Firmar PDF
    </Button>
  );
}
