import Link from "next/link";
export default function Hero(){
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <p className="text-sm uppercase tracking-widest text-white/60">Bienvenido</p>
      <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
        Operandi — Front-end moderno y limpio
      </h1>
      <p className="mt-4 text-lg text-white/70 max-w-2xl">
        Next.js · TypeScript · Tailwind · Prisma · Supabase · NextAuth. Enfoque en código
        claro, accesible y listo para producción.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/contratar" className="rounded-md border border-white/20 px-4 py-2 font-medium hover:bg-white hover:text-black transition" aria-label="Ir a Contrátame">Contrátame</Link>
        <Link href="/about" className="rounded-md px-4 py-2 font-medium underline-offset-2 hover:underline" aria-label="Ir a Sobre mí">Sobre mí</Link>
        <Link href="/contacto" className="rounded-md px-4 py-2 font-medium underline-offset-2 hover:underline" aria-label="Ir a Contacto">Contacto</Link>
      </div>
    </section>
  );
}
