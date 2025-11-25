"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  CheckCircle2,
  AlertCircle,
  Send,
  CalendarDays,
} from "lucide-react";

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto mt-18">
      <Card className="bg-primary *:overflow-hidden shadow-lg">
        <CardHeader className="text-primary-foreground">
          <CardTitle className="text-center text-4xl font-bold uppercase tracking-wider">
            Notificaciones
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 bg-white">
          <ScrollArea className="h-[450px]">
            <div className="divide-y divide-gray-200">
              {notifications.map((notification) => {
                const Icon = notification.icon;
                return (
                  <div key={notification.id} className="flex items-start space-x-4 p-4">
                    <div className="flex-shrink-0">
                      <div className="p-2 bg-slate-100 rounded-full">
                        <Icon className={`h-6 w-6 ${notification.iconColor}`} />
                      </div>
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="font-semibold text-sm">{notification.title}</p>
                      <p className="text-sm text-muted-foreground">{notification.description}</p>
                    </div>
                    <div className="flex-shrink-0 ml-auto">
                      <p className="text-xs text-muted-foreground whitespace-nowrap">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}

const notifications = [
  {
    id: 1,
    icon: CheckCircle2,
    iconColor: "text-green-500",
    title: "¡Documento Aprobado!",
    description: 'Tu "Constancia de Recursos Humanos" fue revisada y aprobada.',
    time: "hace 1 día",
  },
  {
    id: 2,
    icon: AlertCircle,
    iconColor: "text-red-500",
    title: "Acción Requerida: Documento Rechazado",
    description: 'Tu "Carta de Liberación de Actividades" tiene observaciones.',
    time: "hace 1 día",
  },
  {
    id: 3,
    icon: Send,
    iconColor: "text-blue-500",
    title: 'Documento "En Revisión"',
    description: 'Tu "Constancia de Acción Tutorial" se envió al comité para revisión.',
    time: "hace 2 días",
  },
  {
    id: 4,
    icon: CalendarDays,
    iconColor: "text-blue-500",
    title: "¡Bienvenido al Periodo 2025!",
    description:
      "La convocatoria 2025 ya está abierta. Puedes comenzar a subir tus documentos.",
    time: "hace 1 semana",
  },
  {
    id: 5,
    icon: CheckCircle2,
    iconColor: "text-green-500",
    title: "¡Documento Aprobado!",
    description: 'Tu "Constancia de Servicio Social" fue aprobada.',
    time: "hace 2 semanas",
  },
  {
    id: 6,
    icon: CheckCircle2,
    iconColor: "text-green-500",
    title: "¡Documento Aprobado!",
    description: 'Tu "Constancia de Servicio Social" fue aprobada.',
    time: "hace 2 semanas",
  },
  {
    id: 7,
    icon: CheckCircle2,
    iconColor: "text-green-500",
    title: "¡Documento Aprobado!",
    description: 'Tu "Constancia de Servicio Social" fue aprobada.',
    time: "hace 2 semanas",
  },
];