import { Resend } from "resend";
export async function POST(req:Request){
  try{
    const body = await req.text();
    const data = JSON.parse(body||"{}");
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if(!RESEND_API_KEY){
      console.log("[CONTACT-FALLBACK]", data);
      return new Response("logged", { status:200 });
    }
    const resend = new Resend(RESEND_API_KEY);
    await resend.emails.send({
      from: "Operandi <noreply@your-domain.dev>",
      to: ["tu-email@ejemplo.com"],
      subject: `Nuevo contacto: ${data.name} (${data.email})`,
      text: data.message || "",
    });
    return new Response("ok", { status:200 });
  }catch(e){
    console.error(e);
    return new Response("error", { status:500 });
  }
}
