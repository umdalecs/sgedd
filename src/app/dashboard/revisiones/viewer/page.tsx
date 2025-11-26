import DocContent from "@/components/common/DocContent";
import PDFViewerCard from "@/components/common/PDFViewerCard";
import { Button } from "@/components/ui/button";
import { CheckLine, TriangleAlert, X } from "lucide-react";

export default function page() {
  return (
    <>
      <DocContent />
      <PDFViewerCard>
        <div className="flex flex-col w-full h-full items-center justify-around">
          <Button className="flex w-3/4 h-15 text-2xl font-bold">
            <div>Aprobar</div>
            <div>
              <CheckLine className="size-full" />
            </div>
          </Button>
          <Button className="flex w-3/4 h-15 text-2xl font-bold">
            <div>Rechazar</div>
            <div>
              <X className="size-full" />
            </div>
          </Button>
          <Button className="flex w-3/4 h-15 text-2xl font-bold">
            <div>Reportar</div>
            <div>
              <TriangleAlert className="size-full" />
            </div>
          </Button>
        </div>
      </PDFViewerCard>
    </>
  );
}
