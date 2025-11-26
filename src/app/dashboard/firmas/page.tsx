"use client";

import { useState } from "react";
import SignaturePad from "@/components/signatures/SignaturePad";
import SignaturesList from "@/components/signatures/SignaturesList";

export default function FirmasPage() {
  const [mode, setMode] = useState<"list" | "create">("list");

  const handleSave = () => {
    setMode("list");
    // Trigger refresh of signatures list
    window.location.reload();
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 py-6 max-w-4xl mx-auto">
      {mode === "list" && (
        <SignaturesList onCreateNew={() => setMode("create")} />
      )}
      {mode === "create" && (
        <SignaturePad
          onSave={handleSave}
          onCancel={() => setMode("list")}
          width={500}
          height={250}
        />
      )}
    </div>
  );
}
