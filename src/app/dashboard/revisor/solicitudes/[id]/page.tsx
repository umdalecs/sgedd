"use client";

import React, { useState } from 'react';
import { ChevronLeft, User, FileText } from 'lucide-react';
import { useRouter, useSearchParams, useParams } from 'next/navigation';
import { z } from 'zod';

// Esquemas de validación con Zod
const rechazarSchema = z.object({
  motivo: z.string().min(20, "El motivo debe tener al menos 20 caracteres").max(500, "Máximo 500 caracteres"),
});

const reportarSchema = z.object({
  razon: z.string().min(20, "La razón debe tener al menos 20 caracteres").max(500, "Máximo 500 caracteres"),
  detalles: z.string().min(50, "Los detalles deben tener al menos 50 caracteres").max(1000, "Máximo 1000 caracteres"),
});

type RechazarForm = z.infer<typeof rechazarSchema>;
type ReportarForm = z.infer<typeof reportarSchema>;

export default function VisorPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const [showModal, setShowModal] = useState<'aprobar' | 'rechazar' | 'reportar' | null>(null);
  
  //Obtener parametros de la URL
  const docId = params.id as string;
  const solicitanteNombre = searchParams.get('solicitante') || 'Sin nombre';
  const documentoNombre = searchParams.get('documento') || 'Sin documento';
  
  //Estados para formularios
  const [rechazarForm, setRechazarForm] = useState<RechazarForm>({ motivo: '' });
  const [reportarForm, setReportarForm] = useState<ReportarForm>({ razon: '', detalles: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  
  // PDF URL esto se supones que va a venir de la API
  const pdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const handleVolver = () => {
  router.push('/dashboard/revisor/solicitudes');
  };

  const handleAprobar = () => {
    setShowModal('aprobar');
  };

  const handleRechazar = () => {
    setShowModal('rechazar');
    setRechazarForm({ motivo: '' });
    setErrors({});
  };

  const handleReportar = () => {
    setShowModal('reportar');
    setReportarForm({ razon: '', detalles: '' });
    setErrors({});
  };

  const confirmAprobar = () => {
    console.log('Documento aprobado:', { docId, solicitanteNombre, documentoNombre });
    setShowModal(null);
    // Después de aprobar, volver a la lista
    setTimeout(() => router.push('/revisor/solicitudes'), 1000);
  };

  const confirmRechazar = () => {
    try {
      rechazarSchema.parse(rechazarForm);
      console.log('Documento rechazado:', { docId, solicitanteNombre, documentoNombre }, rechazarForm);
      setShowModal(null);
      setRechazarForm({ motivo: '' });
      setErrors({});
      // razones
      setTimeout(() => router.push('/revisor/solicitudes'), 1000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.issues.forEach((err) => {
          const field = err.path[0];
          if (field && typeof field === 'string') {
            newErrors[field] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  const confirmReportar = () => {
    try {
      reportarSchema.parse(reportarForm);
      console.log('Documento reportado:', { docId, solicitanteNombre, documentoNombre }, reportarForm);
      setShowModal(null);
      setReportarForm({ razon: '', detalles: '' });
      setErrors({});
      // razones
      setTimeout(() => router.push('/revisor/solicitudes'), 1000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.issues.forEach((err) => {
          const field = err.path[0];
          if (field && typeof field === 'string') {
            newErrors[field] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <button
          onClick={handleVolver}
          className="mb-4 flex items-center gap-2 text-primary hover:text-primary/80 transition"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="font-medium">Volver a Solicitudes</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Panel - Info */}
          <div className="space-y-4">
            {/* Solicitante Card */}
            <div className="bg-primary/10 border-2 border-primary rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <User className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-primary">Solicitante</h3>
              </div>
              <p className="text-foreground font-medium">{solicitanteNombre}</p>
            </div>

            {/* Documento Card */}
            <div className="bg-primary/10 border-2 border-primary rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-primary">Documento</h3>
              </div>
              <p className="text-foreground font-medium">{documentoNombre}</p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleAprobar}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 rounded-lg transition shadow-sm"
              >
                Aprobar
              </button>
              <button
                onClick={handleRechazar}
                className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground font-semibold py-3 rounded-lg transition shadow-sm"
              >
                Rechazar
              </button>
              <button
                onClick={handleReportar}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-3 rounded-lg transition shadow-sm"
              >
                Reportar
              </button>
            </div>
          </div>

          {/* Right Panel - PDF Viewer */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-border rounded-lg shadow-md overflow-hidden">
              <div className="bg-muted px-4 py-3 border-b border-border">
                <h2 className="font-semibold text-foreground">Visor de PDF</h2>
              </div>
              <div className="aspect-[3/4] bg-muted/20">
                <iframe
                  src={pdfUrl}
                  className="w-full h-full"
                  title="PDF Viewer"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal Aprobar */}
      {showModal === 'aprobar' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold mb-4 text-foreground">Confirmar Aprobación</h3>
            <p className="text-muted-foreground mb-6">
              ¿Está seguro que desea aprobar el documento de <strong>{solicitanteNombre}</strong>?
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowModal(null)}
                className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition"
              >
                Cancelar
              </button>
              <button
                onClick={confirmAprobar}
                className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Rechazar */}
      {showModal === 'rechazar' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold mb-4 text-foreground">Rechazar Documento</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Motivo del rechazo *
                </label>
                <textarea
                  value={rechazarForm.motivo}
                  onChange={(e) => {
                    setRechazarForm({ motivo: e.target.value });
                    if (errors.motivo) {
                      const newErrors = { ...errors };
                      delete newErrors.motivo;
                      setErrors(newErrors);
                    }
                  }}
                  className="w-full border border-border rounded-lg p-3 min-h-[120px] focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  placeholder="Explique el motivo del rechazo..."
                  maxLength={500}
                />
                <div className="flex justify-between items-center mt-1">
                  <span className={`text-xs ${errors.motivo ? 'text-destructive' : 'text-muted-foreground'}`}>
                    {errors.motivo ? errors.motivo : `${rechazarForm.motivo.length}/500 caracteres`}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-end mt-6">
              <button
                onClick={() => setShowModal(null)}
                className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition"
              >
                Cancelar
              </button>
              <button
                onClick={confirmRechazar}
                className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition"
              >
                Rechazar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Reportar */}
      {showModal === 'reportar' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold mb-4 text-foreground">Reportar Documento</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Razón del reporte *
                </label>
                <textarea
                  value={reportarForm.razon}
                  onChange={(e) => {
                    setReportarForm({ ...reportarForm, razon: e.target.value });
                    if (errors.razon) {
                      const newErrors = { ...errors };
                      delete newErrors.razon;
                      setErrors(newErrors);
                    }
                  }}
                  className="w-full border border-border rounded-lg p-3 min-h-[100px] focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  placeholder="Indique la razón principal..."
                  maxLength={500}
                />
                <div className="flex justify-between items-center mt-1">
                  <span className={`text-xs ${errors.razon ? 'text-destructive' : 'text-muted-foreground'}`}>
                    {errors.razon ? errors.razon : `${reportarForm.razon.length}/500 caracteres`}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Detalles adicionales *
                </label>
                <textarea
                  value={reportarForm.detalles}
                  onChange={(e) => {
                    setReportarForm({ ...reportarForm, detalles: e.target.value });
                    if (errors.detalles) {
                      const newErrors = { ...errors };
                      delete newErrors.detalles;
                      setErrors(newErrors);
                    }
                  }}
                  className="w-full border border-border rounded-lg p-3 min-h-[120px] focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  placeholder="Proporcione detalles adicionales..."
                  maxLength={1000}
                />
                <div className="flex justify-between items-center mt-1">
                  <span className={`text-xs ${errors.detalles ? 'text-destructive' : 'text-muted-foreground'}`}>
                    {errors.detalles ? errors.detalles : `${reportarForm.detalles.length}/1000 caracteres`}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-end mt-6">
              <button
                onClick={() => setShowModal(null)}
                className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition"
              >
                Cancelar
              </button>
              <button
                onClick={confirmReportar}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition"
              >
                Reportar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}