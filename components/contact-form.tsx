"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});
type FormValues = z.infer<typeof Schema>;

export default function ContactForm(){
  const { register, handleSubmit, formState:{ errors, isSubmitting }, reset } =
    useForm<FormValues>({ resolver: zodResolver(Schema) });

  async function onSubmit(data:FormValues){
    const res = await fetch("/api/contact", { method:"POST", body: JSON.stringify(data) });
    if(res.ok){ alert("¡Gracias! Te contacto pronto."); reset(); } else { alert("No se pudo enviar. Intenta más tarde."); }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg">
      <div>
        <label className="block text-sm mb-1">Nombre</label>
        <input className="w-full border rounded-md px-3 py-2" {...register("name")} />
        {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input className="w-full border rounded-md px-3 py-2" {...register("email")} />
        {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block text-sm mb-1">Mensaje</label>
        <textarea rows={5} className="w-full border rounded-md px-3 py-2" {...register("message")} />
        {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>}
      </div>
      <button disabled={isSubmitting} className="rounded-md border px-4 py-2 font-medium hover:bg-black hover:text-white transition">
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
