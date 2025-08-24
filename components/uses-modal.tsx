"use client";
import { useState } from "react";

export default function UsesModal(){
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={()=>setOpen(true)}
        className="rounded-md border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition"
      >
        Usos prácticos
      </button>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-zinc-900 text-white p-6 rounded-lg shadow-lg max-w-lg space-y-4">
            <h2 className="text-xl font-bold">Usos prácticos</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-white/80">
              <li><strong>Gestión de usuarios:</strong> autenticación con NextAuth y roles.</li>
              <li><strong>Reservas y turnos:</strong> adaptable a médicos, servicios o agenda de proyectos.</li>
              <li><strong>Formularios de contacto:</strong> envío de consultas y registros de clientes.</li>
              <li><strong>Login seguro:</strong> credenciales con base de datos Supabase/Postgres.</li>
              <li><strong>Portafolio profesional:</strong> presentación clara para empleadores.</li>
            </ul>
            <button
              onClick={()=>setOpen(false)}
              className="mt-4 rounded-md border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
