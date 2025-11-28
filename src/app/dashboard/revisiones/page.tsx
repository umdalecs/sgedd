import CardBase from "@/components/common/CardBase";
import RevisionesPanel from "@/components/revisor/RevisionesPanel";
import { CardContent } from "@/components/ui/card";
import { getRevisorData } from "@/lib/actions/revisor";

export default async function Page() {
  const data = await getRevisorData();
  return (
    <CardBase titulo="Pendientes de visto bueno">
      <CardContent>
        <RevisionesPanel data={data} />
      </CardContent>
    </CardBase>
  );
}
