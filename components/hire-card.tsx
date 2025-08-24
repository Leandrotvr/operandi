"use client";

import AboutModal from "@/components/about-modal";
import UsesModal from "@/components/uses-modal";

const NAME     = "Leandro Maciel";
const EMAIL    = "leandrotvr@gmail.com";
const PHONE    = "+543777416857";
const LINKEDIN = "https://www.linkedin.com/in/leandromaciel581/";
const GITHUB   = "https://github.com/Leandrotvr/";
const CV_VIEW  = "/cv.html";
const CV_DL    = "/api/cv";

export default function HireCard(){
  const phoneDigits = PHONE.replace(/[^0-9]/g, "");

  return (
    <section className="rounded-lg border border-white/10 bg-white/5 p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-2">Contrátame — Leandro Maciel</h2>
      <p className="text-sm text-white/70">
        Desarrollador <strong>front-end</strong> con <strong>Next.js</strong>,
        <strong> TypeScript</strong> y <strong>Tailwind</strong>; integración
        <strong> Prisma + PostgreSQL (Supabase)</strong> y <strong>NextAuth</strong>.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <a
          className="rounded-md border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition text-center"
          href={`mailto:${EMAIL}`}
        >
          Enviar email
        </a>

        <a
          className="rounded-md border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition text-center"
          href={`https://wa.me/${phoneDigits}`}
          target="_blank"
          rel="noopener"
        >
          WhatsApp
        </a>

        <a
          className="rounded-md border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition text-center"
          href={LINKEDIN}
          target="_blank"
          rel="noopener"
        >
          LinkedIn
        </a>

        <a
          className="rounded-md border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition text-center"
          href={GITHUB}
          target="_blank"
          rel="noopener"
        >
          GitHub
        </a>

        <a
          className="rounded-md border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition text-center"
          href={CV_VIEW}
          target="_blank"
          rel="noopener"
        >
          Ver CV (HTML)
        </a>

        <a
          className="rounded-md border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition text-center"
          href={CV_DL}
          download="CV_Leandro_Maciel.html"
        >
          Descargar CV (HTML)
        </a>

        <div className="sm:col-span-2 flex flex-wrap gap-3">
          <AboutModal />
          <UsesModal />
        </div>
      </div>
    </section>
  );
}

