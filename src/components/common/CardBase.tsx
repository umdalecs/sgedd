import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

type CardBaseProps = {
  titulo: string;
  children: ReactNode;
  
};

export default function CardBase({ titulo, children }: CardBaseProps) {
  return (
    <div className="flex justify-center items-center w-full py-22">
      <Card className="flex-col w-1/2 min-w-lg h-full py-0 gap-0 min-h-90">
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