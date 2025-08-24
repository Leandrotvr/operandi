export default function StackSection(){
  const items = [
    { t:"Next.js 15 (App Router)", d:"SSR/ISR, Rutas API, performance." },
    { t:"Tailwind CSS", d:"Estilos utilitarios, dark-mode por variables." },
    { t:"NextAuth", d:"Auth con Credentials (demo) y listo para OAuth." },
    { t:"Prisma", d:"ORM tipado, migraciones y cliente eficiente." },
    { t:"Supabase (Postgres)", d:"Base de datos gestionada, pooler y dashboard SQL." },
    { t:"Resend (opcional)", d:"Email transaccional para formularios de contacto." },
    { t:"TypeScript", d:"Tipos estrictos y DX profesional." },
  ];
  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold tracking-tight">Stack & Funciones</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((x,i)=>(
          <div key={i} className="rounded-2xl border border-white/10 p-5 bg-white/5">
            <h3 className="font-medium">{x.t}</h3>
            <p className="mt-2 text-sm text-white/70">{x.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
