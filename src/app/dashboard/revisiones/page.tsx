import CardBase from "@/components/common/CardBase";
import RevisionesPanel from "@/components/revisor/RevisionesPanel";
import { CardContent } from "@/components/ui/card";
import { getMockRevisionData } from "@/lib/mock/revisor";

export default function Page() {
  const data = getMockRevisionData();
  return (
    <CardBase titulo="Pendientes de visto bueno">
      <CardContent>
        <RevisionesPanel data={data} />
      </CardContent>
    </CardBase>
  );
}
