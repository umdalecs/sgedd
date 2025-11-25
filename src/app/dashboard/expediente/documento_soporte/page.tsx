import Header from "@/components/common/Header";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const nombreDocumento = "Constancia de servicios escolares";

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto mt-18 bg-background rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-primary text-white p-4 flex items-center space-x-2">
        <h1 className="text-lg font-semibold">Reportar error en documento</h1>
      </div>
      <div className="p-6 grid gap-6">
        <div className="grid gap-1.5">
          <Label
            htmlFor="documento"
            className="text-sm font-medium text-gray-600"
          >
            Documento
          </Label>
          <p id="documento" className="font-semibold text-lg">
            {nombreDocumento}
          </p>
        </div>
        <div className="grid gap-1.5">
          <Label
            htmlFor="mensaje"
            className="text-sm font-medium text-gray-600"
          >
            Mensaje
          </Label>
          <Textarea
            placeholder="Describe el problema presente en el documento..."
            id="mensaje"
            className="min-h-[120px] bg-gray-100 border-gray-100 rounded-xl"
          />
        </div>
        <div className="p-6 pt-0">
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/70 rounded-xl"
          >
            Enviar Mensaje
          </Button>
        </div>
      </div>
    </div>
  );
}
