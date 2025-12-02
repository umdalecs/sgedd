import { useState } from "react";
import { useForm } from "react-hook-form";

import { changePasswordSchema as formSchema } from "@/schemas/changePasswordSchema";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function ChangePasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setError(null);
    setIsLoading(true);

    // TODO: handle change password
    // try {
    //   const result = await updatePassword(newPassword);
    //   if (result.success) {
    //     setSuccess(true);
    //     setNewPassword('');
    //     setConfirmPassword('');
    //   } else {
    //     setError(result.error || 'Error al actualizar la contraseña');
    //   }
    // } catch {
    //   setError('Error al conectar con el servidor');
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <Form {...form}>
      <form 
        className="space-y-6 w-full px-10 py-8"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        {error && (
          <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
            {error}
          </div>
        )}

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña Actual</FormLabel>
              <FormControl>
                <Input type="text" {...field} className="shadow-2xl" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña Nueva</FormLabel>
              <FormControl>
                <Input type="text" {...field} className="shadow-2xl" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmar Contraseña</FormLabel>
              <FormControl>
                <Input type="text" {...field} className="shadow-2xl" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-full text-base font-medium italic mt-8"
          disabled={isLoading}
        >
          {isLoading ? "Actualizando..." : "Actualizar Contraseña"}
        </Button>
      </form>
    </Form>
  );
}
