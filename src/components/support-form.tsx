'use client';

import { useState } from 'react';
import CardBase from '@/components/common/CardBase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Clock } from 'lucide-react';

export function SupportForm() {
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!asunto.trim() || !mensaje.trim()) {
      alert('Por favor completa todos los campos');
      return;
    }
    
    // Aquí iría la lógica para enviar el ticket
    console.log('Enviando ticket de soporte...', { asunto, mensaje });
    alert('Ticket enviado exitosamente');
    setAsunto('');
    setMensaje('');
  };

  return (
    <div className="space-y-8">
      <CardBase titulo="✉️ Enviar un ticket de soporte">
        <form onSubmit={handleSubmit} className="space-y-6 w-full px-10 py-8">
          <div className="space-y-3">
            <Label htmlFor="asunto" className="text-base font-medium">
              Asunto
            </Label>
            <Input
              id="asunto"
              type="text"
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
              placeholder="Ej. Error al subir el archivo"
              className="w-full h-12 rounded-lg bg-gray-100 border-gray-200 px-4"
              required
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="mensaje" className="text-base font-medium">
              Mensaje
            </Label>
            <Textarea
              id="mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Describe tu problema a  detalle..."
              className="w-full min-h-[200px] rounded-lg bg-gray-100 border-gray-200 px-4 py-3 resize-none"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-full text-base font-medium italic"
          >
            Enviar Mensaje
          </Button>
        </form>
      </CardBase>

      {/* Información de Contacto */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-center mb-6">
            INFORMACION DEL CONTACTO
          </h3>
          <div className="space-y-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}