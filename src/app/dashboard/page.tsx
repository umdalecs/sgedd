import DashboardCards from "@/components/common/DashboardCard";
import Header from "@/components/common/Header";
import { Usuario, UsuarioDocente, asignarRol } from "@/types/usuario";

export default function Page() {
  const usuarioTest: Usuario ={
    nombre : "Pedro",
    apellido : "Sanchez",
    correo: "pedro@example.com",
    puesto: "Vinculacion",
    rfc: "PEASXXX1231",
    rol: asignarRol("Vinculacion"),
  }
  const usuarioTestD: UsuarioDocente ={
    nombre : "Pedro",
    apellido : "Sanchez",
    correo: "pedro@example.com",
    puesto: "Docente",
    rfc: "PEASXXX1231",
    estatusPlaza: "Activo",
    rol: asignarRol("Docente"),
  }
  return (
    <>
    <div className="min-h-70">
      <Header rol={usuarioTestD.rol} />
      <DashboardCards usuario={usuarioTestD}/>
    </div>
    </>
  )
}