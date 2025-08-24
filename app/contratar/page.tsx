import HireCard from "@/components/hire-card";
import Script from "next/script";

export const metadata = {
  title: "Contrátame · Operandi",
  description: "Perfil y formas de contacto",
};

const sameAs = [
  process.env.NEXT_PUBLIC_LINKEDIN,
  process.env.NEXT_PUBLIC_GITHUB,
].filter(Boolean) as string[];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": process.env.NEXT_PUBLIC_NAME || "Nombre",
  "jobTitle": "Desarrollador Web (front-end)",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": (process.env.NEXT_PUBLIC_LOCATION || "").split(",")[0] || undefined,
    "addressRegion":   (process.env.NEXT_PUBLIC_LOCATION || "").split(",")[1]?.trim() || undefined,
    "addressCountry": "AR"
  },
  "knowsAbout": ["Next.js","TypeScript","Tailwind CSS","Prisma","Supabase","NextAuth","UI","Front-end"],
  "contactPoint": [{
    "@type": "ContactPoint",
    "contactType": "job inquiries",
    "email": process.env.NEXT_PUBLIC_EMAIL || undefined,
    "telephone": process.env.NEXT_PUBLIC_PHONE || undefined,
    "areaServed": "AR",
    "availableLanguage": ["es","en"]
  }],
  "sameAs": sameAs
};

export default function ContratarPage(){
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-8">
      <Script id="jsonld-person" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-3xl font-bold tracking-tight">Trabajemos juntos</h1>
      <p className="text-white/70 max-w-2xl">
        Disponible para trabajo remoto. Foco en front-end, integración con base de datos y despliegue.
      </p>
      <HireCard/>
    </main>
  );
}
