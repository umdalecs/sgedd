export async function getDocumentos() {
  return [
    {
      id: 1,
      nombre: "Constancia de Recursos Humanos",
      solicitar: false,
      estado: "Aprobado",
      ultimaActualizacion: "24/10/2025",
      verPDF: true,
    },
    {
      id: 2,
      nombre: "Carta de Exclusividad  Laboral",
      solicitar: true,
      estado: "NoGen",
      ultimaActualizacion: "24/10/2025",
      verPDF: false,
    },
    {
      id: 3,
      nombre: "Carta de liberacion de Actividades",
      solicitar: false,
      estado: "Pendiente",
      ultimaActualizacion: "20/10/2025",
      verPDF: false,
    },
    {
      id: 4,
      nombre: "Constancia de servicios escolares",
      solicitar: true,
      estado: "Rechazado",
      ultimaActualizacion: "18/10/2025",
      verPDF: false,
    },
  ];
}
