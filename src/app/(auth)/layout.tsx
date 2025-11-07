import { Card, CardContent } from "@/components/ui/card";

export default function AuthLayout({children}: LayoutProps<'/'>) {
  return (
    <div className="flex items-center justify-center bg-primary h-full">
      <Card className="w-lg">
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </div>
  )
}
