import CardBase from "@/components/common/CardBase";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const nombreDocumento = "Constancia de servicios escolares";

export default function Page() {
  return (
    <CardBase titulo="Reportar error en documento" className="">
      <CardContent className="p-6 grid gap-6">
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
      </CardContent>
    </CardBase>
  );
}
