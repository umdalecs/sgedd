"use client";
import { FileWarning } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const ReportaGenerador = ({path}: {path: string}) => {
  "use client";
  const router = useRouter();

  const handleClick= () => {
    router.push(path);
  }

  return (
    <Button className="w-3/4 h-15 text-2xl font-bold" variant="destructive" size="default" onClick={handleClick}>
      Reportar
      <FileWarning  />
    </Button>
  );
};