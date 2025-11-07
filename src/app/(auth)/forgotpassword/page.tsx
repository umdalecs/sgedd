import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, KeyRound } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Link href="/">
        <div className="flex gap-1 items-center">
          <ArrowLeft size={16}/>
          Volver atrás
        </div>
      </Link>
      <div className="mb-6 text-center flex items-center">
        <KeyRound size={100} className="mx-auto my-5" />
        <div>
          <h1 className="text-3xl text-foreground mb-2">SGEDD</h1>
          <p className="text-sm text-muted-foreground font-bold">
            ¿Olvidaste tu contraseña?, no te preocupes, introduce tu correo 
            electrónico y se te enviarán instrucciones para recuperarlo
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <Label htmlFor="email">Correo</Label>
        <Input id="email" type="email" className="shadow-2xl"></Input>
      </div>
    </>
  );
}
