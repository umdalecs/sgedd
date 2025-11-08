import DashboardCards from "@/components/common/DashboardCard";
import Header from "@/components/common/Header";

export default function Page() {
  return (
    <>
    <div className="min-h-70">
      <Header rol="Docente"></Header>
      <DashboardCards />
    </div>
    </>
  )
}
