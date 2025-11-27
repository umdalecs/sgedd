"use client";

export default function DocContent() {
  return (
    <div className="flex w-full justify-around p-5">
      <div className="flex flex-col items-center w-1/4">
        <div className="bg-sidebar-accent-foreground text-accent w-full text-center font-bold text-2xl rounded-2xl">
          Solicitante:
        </div>
        <div className="font-bold">Flores Saldaña Martin</div>
      </div>
      <div className="flex flex-col items-center w-1/4">
        <div className="bg-sidebar-accent-foreground text-accent w-full text-center font-bold text-2xl rounded-2xl">
          Documento:
        </div>
        <div className="font-bold">Sample de Archivo</div>
      </div>
    </div>
  );
}
