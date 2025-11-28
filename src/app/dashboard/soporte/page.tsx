import CardBase from "@/components/common/CardBase";
import { SupportForm } from "@/components/dashboard/support-form";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Clock, Mail, Phone } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <CardBase titulo="Enviar un ticket de soporte">
        <CardContent>
          <SupportForm />
        </CardContent>
        <CardFooter className="p-4">
          <Button
            type="submit"
            className="bg-primary mx-auto hover:bg-primary/90 text-primary-foreground h-12 rounded-l font-medium italic"
          >
            Enviar Mensaje
          </Button>
        </CardFooter>
      </CardBase>

      <CardBase titulo="Información de contacto">
<<<<<<< Updated upstream
        <CardContent className="p-8">
=======
        <CardContent className="p-4 pt-0">
>>>>>>> Stashed changes
          <div className="flex items-center gap-4">
            <Mail className="text-primary size-6" />
            <span className="text-base font-medium">
              soporte.sgedd@culiacan.tecnm.mx
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-primary size-6" />
            <span className="text-base font-medium">
              (667) 713-3804 Ext. 1234
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Clock className="text-primary size-6" />
            <div className="flex flex-col">
              <span className="text-base font-medium">Lunes a Viernes</span>
              <span className="text-sm text-gray-600">08:00 - 15:00 hrs</span>
            </div>
          </div>
        </CardContent>
      </CardBase>
    </div>
  );
}
