"use client";

import RevisionesPanel from "@/components/revisor/RevisionesPanel";
import { getMockRevisionData } from "@/lib/mock/revisor";

export default function Page() {
  const data = getMockRevisionData();
  return (
    <div className="px-4 sm:px-6 md:px-8 py-6">
      <RevisionesPanel data={data} />
    </div>
  );
}