export async function getNotifications(): Promise<{id:number;title:string;description:string;time:string}[]> {
  return [
    {
      id: 1,
      title: "¡Documento Aprobado!",
      description:
        'Tu "Constancia de Recursos Humanos" fue revisada y aprobada.',
      time: "hace 1 día",
    },
    {
      id: 2,
      title: "Acción Requerida: Documento Rechazado",
      description:
        'Tu "Carta de Liberación de Actividades" tiene observaciones.',
      time: "hace 1 día",
    },
    {
      id: 3,
      title: 'Documento "En Revisión"',
      description:
        'Tu "Constancia de Acción Tutorial" se envió al comité para revisión.',
      time: "hace 2 días",
    },
    {
      id: 4,
      title: "¡Bienvenido al Periodo 2025!",
      description:
        "La convocatoria 2025 ya está abierta. Puedes comenzar a subir tus documentos.",
      time: "hace 1 semana",
    },
    {
      id: 5,
      title: "¡Documento Aprobado!",
      description: 'Tu "Constancia de Servicio Social" fue aprobada.',
      time: "hace 2 semanas",
    },
    {
      id: 6,
      title: "¡Documento Aprobado!",
      description: 'Tu "Constancia de Servicio Social" fue aprobada.',
      time: "hace 2 semanas",
    },
    {
      id: 7,
      title: "¡Documento Aprobado!",
      description: 'Tu "Constancia de Servicio Social" fue aprobada.',
      time: "hace 2 semanas",
    },
  ];
}
