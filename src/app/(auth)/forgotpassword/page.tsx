"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowLeft, KeyRound, CheckCircle } from "lucide-react";
import Link from "next/link";
// import { resetPassword } from "@/lib/actions/auth";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // try {
    //   const result = await resetPassword(email);
    //   if (result.success) {
    //     setSuccess(true);
    //   } else {
    //     setError(result.error || "Error al enviar correo de recuperación");
    //   }
    // } catch {
    //   setError("Error al conectar con el servidor");
    // } finally {
      // }
    setIsLoading(false);
  };

  if (success) {
    return (
      <>
        <div className="mb-6 text-center">
          <CheckCircle size={80} className="mx-auto my-5 text-green-500" />
          <h1 className="text-2xl text-foreground mb-2">¡Correo enviado!</h1>
          <p className="text-sm text-muted-foreground">
            Revisa tu bandeja de entrada para continuar con la recuperación de
            tu contraseña.
          </p>
        </div>
        <div className="text-center">
          <Link href="/">
            <Button variant="outline">Volver al inicio de sesión</Button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Link href="/">
        <div className="flex gap-1 items-center mb-4 text-sm hover:underline">
          <ArrowLeft size={16} />
          Volver atrás
        </div>
      </Link>
      <div className="mb-6 text-center flex items-center gap-4">
        <KeyRound size={80} className="text-primary" />
        <div className="text-left">
          <h1 className="text-2xl text-foreground mb-2">Recuperar contraseña</h1>
          <p className="text-sm text-muted-foreground">
            Introduce tu correo electrónico y te enviaremos instrucciones para
            recuperar tu contraseña
          </p>
        </div>
      </div>

      {error && (
        <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow-2xl"
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Enviando..." : "Enviar instrucciones"}
        </Button>
      </form>
    </>
  );
}
