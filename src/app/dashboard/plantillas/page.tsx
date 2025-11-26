"use client";

import { useState } from "react";
import TemplatesList from "@/components/templates/TemplatesList";
import TemplateForm from "@/components/templates/TemplateForm";
import type { PlantillaDocumento } from "@/lib/supabase/database.types";

export default function PlantillasPage() {
  const [mode, setMode] = useState<"list" | "create" | "edit">("list");
  const [selectedTemplate, setSelectedTemplate] =
    useState<PlantillaDocumento | null>(null);

  const handleEdit = (template: PlantillaDocumento) => {
    setSelectedTemplate(template);
    setMode("edit");
  };

  const handleCreate = () => {
    setSelectedTemplate(null);
    setMode("create");
  };

  const handleSuccess = () => {
    setMode("list");
    setSelectedTemplate(null);
  };

  const handleCancel = () => {
    setMode("list");
    setSelectedTemplate(null);
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 py-6">
      {mode === "list" && (
        <TemplatesList onEdit={handleEdit} onCreate={handleCreate} />
      )}
      {(mode === "create" || mode === "edit") && (
        <TemplateForm
          template={selectedTemplate || undefined}
          onSuccess={handleSuccess}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}
