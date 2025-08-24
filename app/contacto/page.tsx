import ContactForm from "@/components/contact-form";
export const metadata = { title:"Contacto · Operandi", description:"Escríbeme para colaborar" };
export default function ContactoPage(){
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Contacto</h1>
      <p className="text-muted-foreground mt-2 mb-8">Cuéntame sobre tu proyecto o vacante.</p>
      <ContactForm/>
    </main>
  );
}
