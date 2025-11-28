"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

type CardBaseProps = {
  titulo: string;
  children: ReactNode;
  className?: string;
};

export default function CardBase({
  titulo,
  children,
  className,
}: CardBaseProps) {
  return (
    <Card
      className={`flex-col py-0 ${className ?? ""}`}
    >
      <CardHeader className="bg-primary text-primary-foreground rounded-t-xl py-3 text-center gap-0">
        <CardTitle className="text-4xl font-bold">{titulo}</CardTitle>
      </CardHeader>
      {children}
    </Card>
  );
}
