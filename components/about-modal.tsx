"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Modal accesible:
 * - role="dialog" aria-modal
 * - Focus trap básico y retorno al botón invocador
 * - Cierre con Esc y clic en overlay
 * - Bloqueo de scroll mientras está abierto
 */
export default function AboutModal() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  // Bloquear scroll y devolver foco al cerrar
  useEffect(() => {
    const original = document.body.style.overflow;
    if (open) {
      document.body.style.overflow = "hidden";
      // enfocar el diálogo al abrir
      setTimeout(() => dialogRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = original;
      triggerRef.current?.focus();
    }
    return () => { document.body.style.overflow = original; };
  }, [open]);

  // Cerrar con Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Trap de foco dentro del modal (muy simple)
  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key !== "Tab") return;
    const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables || focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      last.focus(); e.preventDefault();
    } else if (!e.shiftKey && document.activeElement === last) {
      first.focus(); e.preventDefault();
    }
  }

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setOpen(true)}
        className="rounded-md border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition text-center w-full sm:w-auto"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        Acerca de esta página
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-title"
            aria-describedby="about-desc"
            tabIndex={-1}
            onKeyDown={onKeyDown}
            className="w-full max-w-xl rounded-2xl border border-white/10 bg-neutral-900 text-white shadow-2xl outline-none"
          >
            <div className="p-6">
              <h2 id="about-title" className="text-xl font-semibold tracking-tight">
                Operandi: portafolio técnico
              </h2>
              <p id="about-desc" className="mt-2 text-sm text-white/80 leading-relaxed">
                Sitio personal para presentar habilidades y contacto. Construido con <strong>Next.js, TypeScript, Tailwind CSS</strong>,
                auth con <strong>NextAuth</strong> e integración de datos con <strong>Prisma + PostgreSQL (Supabase)</strong>.
              </p>

              <div className="mt-4 grid gap-2 text-sm text-white/85">
                <div className="rounded-lg border border-white/10 p-3">
                  <p className="font-medium">Cómo usarlo</p>
                  <ul className="mt-1 list-disc pl-5 space-y-1 text-white/75">
                    <li><strong>Sobre mí:</strong> perfil y competencias.</li>
                    <li><strong>Contrátame:</strong> email, WhatsApp, LinkedIn, GitHub y CV.</li>
                    <li><strong>CV:</strong> ver online (HTML) o descargar (HTML). Puedes pedir PDF si prefieres.</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-white/10 p-3">
                  <p className="font-medium">Stack y prácticas</p>
                  <ul className="mt-1 list-disc pl-5 space-y-1 text-white/75">
                    <li>UI dark, semántica, accesible (roles/aria, foco, teclado).</li>
                    <li>SEO básico (metadata, sitemap/robots) y rendimiento inicial.</li>
                    <li>Arquitectura limpia orientada a portafolio profesional.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-2">
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-md border border-white/20 px-3 py-2 hover:bg-white hover:text-black transition"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
