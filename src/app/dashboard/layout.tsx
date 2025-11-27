import Header from "@/components/dashboard/Header";

export default function DashboardLayout({
  children,
}: LayoutProps<"/dashboard">) {
  return (
    <>
      <Header />

      <main className="justify-center p-8">{children}</main>
    </>
  );
}
