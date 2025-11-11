'use client';

import { useState } from 'react';
import CardBase from '@/components/common/CardBase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function ChangePasswordCard() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    
    console.log('Cambiando contraseña...');
  };

  return (
    <CardBase titulo="Cambio de Contraseña">
      <form onSubmit={handleSubmit} className="space-y-6 w-full px-10 py-8">
        <div className="space-y-3">
          <Label htmlFor="current-password" className="text-base font-medium italic">
            Contraseña Actual
          </Label>
          <Input
            id="current-password"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full h-12 rounded-full bg-gray-100 border-gray-200 px-6"
            required
          />
        </div>

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
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-full text-base font-medium italic mt-8"
        >
          Actualizar Contraseña
        </Button>
      </form>
    </CardBase>
  );
}