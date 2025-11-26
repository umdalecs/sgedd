'use client';

import { useState } from 'react';
import CardBase from '@/components/common/CardBase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { updatePassword } from '@/app/actions/auth';
import { CheckCircle } from 'lucide-react';

export function ChangePasswordCard() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (newPassword !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (newPassword.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    setIsLoading(true);
    
    try {
      const result = await updatePassword(newPassword);
      if (result.success) {
        setSuccess(true);
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setError(result.error || 'Error al actualizar la contraseña');
      }
    } catch {
      setError('Error al conectar con el servidor');
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <CardBase titulo="Cambio de Contraseña">
        <div className="flex flex-col items-center justify-center py-8">
          <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">¡Contraseña actualizada!</h2>
          <p className="text-muted-foreground text-center">
            Tu contraseña ha sido cambiada exitosamente.
          </p>
          <Button 
            onClick={() => setSuccess(false)}
            className="mt-6"
          >
            Cambiar de nuevo
          </Button>
        </div>
      </CardBase>
    );
  }

  return (
    <CardBase titulo="Cambio de Contraseña">
      <form onSubmit={handleSubmit} className="space-y-6 w-full px-10 py-8">
        {error && (
          <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
            {error}
          </div>
        )}

        <div className="space-y-3">
          <Label htmlFor="new-password" className="text-base font-medium italic">
            Nueva Contraseña
          </Label>
          <Input
            id="new-password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full h-12 rounded-full bg-gray-100 border-gray-200 px-6"
            required
            minLength={6}
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="confirm-password" className="text-base font-medium italic">
            Confirmar Nueva Contraseña
          </Label>
          <Input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full h-12 rounded-full bg-gray-100 border-gray-200 px-6"
            required
            minLength={6}
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-full text-base font-medium italic mt-8"
          disabled={isLoading}
        >
          {isLoading ? 'Actualizando...' : 'Actualizar Contraseña'}
        </Button>
      </form>
    </CardBase>
  );
}