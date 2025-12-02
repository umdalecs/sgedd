"use client";
import { FileWarning } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const NavigationButton = ({hasError: error, path}: {hasError:boolean, path: string}) => {
  "use client";
  const router = useRouter();

  const handleClick= () => {
    router.push(path);
  }

  return (
    <Button variant="destructive" size="default" disabled={error} onClick={handleClick}>
      <FileWarning />
      Reportar
    </Button>
  );
};