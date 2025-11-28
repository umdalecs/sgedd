import Solicitantes from "@/components/generador/solicitantesPanel";
import CardBase from "@/components/common/CardBase";
import { CardContent } from "@/components/ui/card";
import { getSolicitantes } from "@/lib/actions/generaciones";

export default async function Page() {
  const solicitantes = await getSolicitantes();

  return (
<<<<<<< Updated upstream
    <div className="px-4 sm:px-6 md:px-8 py-6">
      <Breadcrumb className="mb-4">
      </Breadcrumb>
      <Solicitantes solicitantes={solicitantes} />
    </div>
=======
    <CardBase titulo="Solicitantes">
      <CardContent>
        <Solicitantes solicitantes={solicitantes} />
      </CardContent>
    </CardBase>
>>>>>>> Stashed changes
  );
}