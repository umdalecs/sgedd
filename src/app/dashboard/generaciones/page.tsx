import Solicitantes from "@/components/generador/solicitantesPanel";
import CardBase from "@/components/common/CardBase";
import { CardContent } from "@/components/ui/card";
import { getSolicitantes } from "@/lib/actions/generaciones";

export default async function Page() {
  const solicitantes = await getSolicitantes();

  return (
    <CardBase titulo="Solicitantes">
      <CardContent>
        <Solicitantes solicitantes={solicitantes} />
      </CardContent>
    </CardBase>
  );
}