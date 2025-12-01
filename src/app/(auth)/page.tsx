import LoginForm from "@/components/forms/LoginForm";
import Image from "next/image";

export default function Home({}: PageProps<"/">) {
  return (
    <>
      <div className="mb-6 text-center">
        <Image
          src="/img/logo-sgedd.png"
          alt="SGEDD"
          width={250}
          height={250}
          className="mx-auto my-5"
        />
        <h1 className="text-foreground text-5xl mb-8">SGEDD</h1>
        <p className="text-sm text-muted-foreground mb-3 font-bold">
          Sistema Gestor al Estímulo del Desempeño Docente
        </p>
      </div>
      <LoginForm />
    </>
  );
}
