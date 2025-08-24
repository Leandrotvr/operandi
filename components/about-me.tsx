export default function AboutMe(){
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
      <p className="text-lg leading-relaxed text-white/80">
        Desarrollador web con foco en <strong>front-end</strong> y
        <strong> integración end-to-end</strong>. Trabajo con
        <strong> JavaScript</strong>, <strong>TypeScript</strong>,
        <strong> React</strong>, <strong>Next.js</strong> y <strong>Tailwind CSS</strong>.
        Para datos, utilizo <strong>PostgreSQL</strong> con <strong>Prisma</strong> (Supabase) y auth con <strong>NextAuth</strong>.
      </p>
      <p className="text-lg leading-relaxed text-white/80 mt-4">
        Objetivo: aportar en productos web reales, mejorar rendimiento/UX y seguir
        profundizando en integración de APIs, bases de datos y despliegue continuo.
      </p>
    </section>
  );
}
