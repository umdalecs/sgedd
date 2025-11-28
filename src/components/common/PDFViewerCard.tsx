"use client";
import { ReactNode } from "react";
import CardBase from "./CardBase";

type ViewerProps = {
  children?: ReactNode;
};

export default function PDFViewerCard({ children }: ViewerProps) {
  return (
    <CardBase titulo="Visor de PDF" className="w-full">
      <div className="flex h-full w-full">
        <div className="w-1/3">{children}</div>
        <div className="w-2/3 p-10">
          <embed
            src="/pdf/sample.pdf"
            type="application/pdf"
            className="w-full h-100"
          />
        </div>
      </div>
    </CardBase>
  );
}
