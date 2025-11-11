import Link from "next/link";
import { Info, User2, Users, Shield } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const metadata = { title: "Guía de Uso" };

type FAQ = { q: string; a: string };
type Section = {
  id: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  faqs: FAQ[];
};

const sections: Section[] = [
  {
    id: "docentes",
    icon: User2,
    title: "Para Docentes",
    faqs: [
      { q: "¿Cómo consulto mi expediente?", a: "Ingresa a “Mi Expediente” desde la barra superior. Verás la lista de documentos y su estado." },
      { q: "¿Cómo reporto un error en un documento?", a: "En la fila del documento usa la acción “Reportar error” y describe el problema." },
      { q: "¿Dónde cambio mi contraseña?", a: "Abre el menú de usuario (arriba a la derecha) y selecciona “Cambiar contraseña”." },
    ],
  },
  {
    id: "comite",
    icon: Users,
    title: "Para Comité de Evaluación",
    faqs: [
      { q: "¿Cómo reviso solicitudes pendientes?", a: "En “Revisiones” verás pestañas con pendientes de firma y visto bueno." },
      { q: "¿Cómo firmo un documento?", a: "Abre el documento en “Revisiones”, revisa su contenido y pulsa “Firmar”." },
      { q: "¿Cómo veo el historial?", a: "En el detalle del documento, sección “Historial”, verás la trazabilidad." },
    ],
  },
  {
    id: "subdireccion",
    icon: Shield,
    title: "Para Subdirección Académica",
    faqs: [
      { q: "¿Cómo valido actas de resultados?", a: "En “Revisiones” filtra por Actas y usa aprobar o rechazar." },
      { q: "¿Cómo gestiono solicitudes?", a: "En “Generadores” → “Solicitudes” puedes aprobar, rechazar o pedir correcciones." },
      { q: "¿Dónde veo notificaciones globales?", a: "Haz clic en la campana de la barra superior para ver los mensajes." },
    ],
  },
];

export default function GuiaUsoPage() {
  return (
    <div className="w-full min-h-screen bg-primary flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-10">
      <div className="w-full max-w-[600px] sm:max-w-[680px] md:max-w-[760px] lg:max-w-[820px]">
        <Card className="bg-card text-card-foreground w-full rounded-lg shadow-lg">
          <CardHeader>
            <div className="flex items-start gap-3">
              <Info className="size-5 sm:size-6 text-primary mt-0.5 flex-shrink-0" aria-hidden />
              <div className="space-y-1">
                <CardTitle className="font-semibold text-base sm:text-lg md:text-xl">
                  Guía de Uso para el SGEDD
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                  Encuentra respuestas a las preguntas más comunes sobre el sistema, organizadas por rol.
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="px-0">
            <Accordion
              type="single"
              collapsible
              className="w-full divide-y divide-border"
            >
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <AccordionItem
                    key={section.id}
                    value={section.id}
                    className="px-4 sm:px-6"
                  >
                    <AccordionTrigger className="py-3 sm:py-4 text-sm sm:text-base hover:no-underline">
                      <span className="inline-flex items-center gap-2">
                        <Icon className="size-4 sm:size-5 text-primary flex-shrink-0" aria-hidden />
                        <span className="font-medium">{section.title}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 sm:space-y-5 pt-2">
                        {section.faqs.map((faq, i) => (
                          <div key={i} className="space-y-1.5">
                            <p className="font-medium text-sm sm:text-base">{faq.q}</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </CardContent>

          <CardFooter className="flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between text-[11px] sm:text-xs text-muted-foreground border-t pt-4">
            <Link
              href="/dashboard"
              className="hover:text-primary hover:underline transition-colors"
            >
              ← Volver al panel principal
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}