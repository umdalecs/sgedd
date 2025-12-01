import CardBase from "@/components/common/CardBase";
import { SupportForm } from "@/components/forms/SupportForm";
import { CardContent } from "@/components/ui/card";
import { Clock, Mail, Phone } from "lucide-react";

export default function Page() {
  return (
    <CardBase titulo="Enviar un ticket de soporte">
      <CardContent>
        <div className="grid grid-cols-2">
          <SupportForm />
          <div className="p-8 justify-self-center ">
            <h3 className="text-4xl text-foreground mb-4">Contacto</h3>
            <div className="flex gap-4">
              <Mail className="text-primary size-6" />
              <span className="text-base font-medium">
                soporte.sgedd@culiacan.tecnm.mx
              </span>
            </div>
            <div className="flex gap-4">
              <Phone className="text-primary size-6" />
              <span className="text-base font-medium">
                (667) 713-3804 Ext. 1234
              </span>
            </div>
            <div className="flex gap-4">
              <Clock className="text-primary size-6" />
              <span className="text-base font-medium">Lunes a Viernes 08:00 - 15:00 hrs</span>
            </div>
          </div>
        </div>
      </CardContent>
    </CardBase>
  );
}
