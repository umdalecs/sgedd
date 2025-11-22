"use client";

import {
  Breadcrumb
} from "@/components/ui/breadcrumb";
import Solicitantes from "@/components/generador/solicitantesPanel";
import { solicitantes } from "@/lib/mock/generador";

export default function Page() {
  return (
    <div className="px-4 sm:px-6 md:px-8 py-6">
      <Breadcrumb className="mb-4">       
      </Breadcrumb>
      <Solicitantes solicitantes={solicitantes} />
    </div>
  );
}