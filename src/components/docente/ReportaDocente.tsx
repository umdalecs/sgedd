"use client";
import { FileWarning } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const ReportaDocente = ({exists, path}: {exists:boolean, path: string}) => {
  "use client";
  const router = useRouter();

  const handleClick= () => {
    router.push(path);
  }

  return (
    <Button variant="destructive" size="default" disabled={!exists} onClick={handleClick}>
      <FileWarning />
      Reportar
    </Button>
  );
};