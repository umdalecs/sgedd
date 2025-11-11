'use client';

import Header from "@/components/common/Header";
import { SupportForm } from "@/components/support-form";

export default function Page() {
  return (
    <>
      <Header rol="Docente"></Header>
      <div className="py-8">
        <SupportForm />
      </div>
    </>
  );
}