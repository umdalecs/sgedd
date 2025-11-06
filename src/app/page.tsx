import LoginForm from "@/components/login/LoginForm";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home({} : PageProps<'/'>) {
 
  return (
    <div className="flex items-center justify-center bg-primary size-full">
      <Card className="w-lg">
        <CardContent>
           <div className="mb-6 text-center">
            <Image src="/img/logo-sgedd.jpg" alt="SGEDD" width={250} height={250} className="mx-auto my-5"/>
            <h1 className="text-foreground text-5xl mb-8">SGEDD</h1>
            <p className="text-sm text-muted-foreground mb-3 font-bold">Sistema Gestor al Estímulo del Desempeño Docente</p>
          </div>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
