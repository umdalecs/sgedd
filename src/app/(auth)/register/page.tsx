import RegisterForm from "@/components/forms/RegisterForm";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="mb-6 text-center">
        <Image
          src="/img/logo-sgedd.jpg"
          alt="SGEDD"
          width={150}
          height={150}
          className="mx-auto"
        />
        <h1 className="text-3xl text-foreground">SGEDD</h1>
        <p className="text-sm text-muted-foreground font-bold">
          Sistema Gestor al Estímulo del Desempeño Docente
        </p>
      </div>
      <RegisterForm />
    </>
  );
}
