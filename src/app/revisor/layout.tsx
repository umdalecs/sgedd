"use client";

import Header from "@/components/common/Header";

export default function RevisorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header rol="Subdirección-Revisor" />
      <main className="flex-1">{children}</main>
    </div>
  );
}