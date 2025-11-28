"use client";
import { ReactNode } from "react";
import CardBase from "./CardBase";

type ViewerProps = {
  children?: ReactNode;
  url: string;
};

export default function PDFViewerCard({ children, url }: ViewerProps) {
  return (
    <CardBase titulo="Visor de PDF" className="w-full">
      <div className="flex h-full w-full">
        <div className="w-1/3">{children}</div>
        <div className="w-2/3 p-10">
          <embed
            src={url}
            type="application/pdf"
            className="w-full h-100"
          />
        </div>
      </div>
    </CardBase>
  );
}
