"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

type CardBaseProps = {
  titulo: string;
  children: ReactNode;
  classNameWrapper?: string;
  classNameCard?: string;
};

export default function CardBase({ titulo, children, classNameWrapper, classNameCard }: CardBaseProps) {
  return (
    <div className={`flex justify-center items-center h-full w-full ${classNameWrapper ?? "py-22"}`}>
      <Card className={`flex-col min-w-lg min-h-112 py-0 gap-0 ${classNameCard ?? "min-h-90"}`}>
        <CardHeader className="bg-primary text-primary-foreground rounded-t-xl py-3 text-center gap-0">
          <CardTitle className="text-3xl font-bold">{titulo}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center gap-0">
          {children}
        </CardContent>
      </Card>
    </div>
  );
}