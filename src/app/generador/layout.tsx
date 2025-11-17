"use client";

import Header from "@/components/common/Header";

export default function GeneradorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header rol="Generador" />
      <main className="flex-1">{children}</main>
    </div>
  );
}