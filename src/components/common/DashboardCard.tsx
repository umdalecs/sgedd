import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardCards() {
    return(
        <>
        <div className="flex justify-center items-center h-2/3 mt-14">
            <Card className="flex-col w-2/3 min-w-lg h-full py-0 gap-0 min-h-90">
                <CardHeader className="bg-primary text-primary-foreground rounded-t-xl py-3 text-center gap-0">
                    <CardTitle className="text-3xl font-bold">Perfil de Usuario</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center gap-0">
                    <div className="flex w-full h-full px-10">
                        <div className="w-1/3 flex items-center justify-center">
                        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                            
                        </div>
                        </div>
                        <div className="w-2/3 flex flex-col justify-center gap-8">
                        <div className="flex gap-2">
                            <p className="font-semibold w-1/3">Nombre:</p>
                            <p className="w-2/3">Pedro Martinez del salsalsalsla</p>
                        </div>
                        <div className="flex gap-2">
                            <p className="font-semibold w-1/3">Correo:</p>
                            <p className="w-2/3">pedro@example.com</p>
                        </div>
                        <div className="flex gap-2">
                            <p className="font-semibold w-1/3">Estatus plaza:</p>
                            <p className="w-2/3">Activo</p>
                        </div>
                        <div className="flex gap-2">
                            <p className="font-semibold w-1/3">RFC:</p>
                            <p className="w-2/3">PEMJ880101XXX</p>
                        </div>
                        </div>
                    </div>
                    </CardContent>
            </Card>
        </div>
        </>
    )
}