export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl p-8 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Leandro Maciel — Desarrollador Front-End</h1>
      <p className="text-white/70">
        Portafolio público. No requiere inicio de sesión. Next.js + Tailwind + Prisma + Supabase + NextAuth (demo).
      </p>

      <div className="flex flex-wrap gap-3">
        <a href="/cv.html" className="underline">Ver CV (HTML)</a>
        <a href="/login" className="underline">Login (demo, opcional)</a>
        <a href="mailto:leandrotvr@gmail.com" className="underline">Email</a>
        <a href="https://wa.me/543777416857" target="_blank" rel="noopener" className="underline">WhatsApp</a>
        <a href="https://www.linkedin.com/in/leandromaciel581/" target="_blank" rel="noopener" className="underline">LinkedIn</a>
        <a href="https://github.com/Leandrotvr/" target="_blank" rel="noopener" className="underline">GitHub</a>
      </div>
    </main>
  );
}
