import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Intento simple: SELECT 1 y contar usuarios para ver permisos/tabla
    const r = await prisma.$queryRawUnsafe("SELECT 1 as ok");
    const countUsers = await prisma.user.count().catch(()=>-1);
    return Response.json({ ok: true, raw:r, userCount: countUsers }, { status: 200 });
  } catch (e:any) {
    console.error("[DB-HEALTH]", e);
    return new Response(JSON.stringify({ ok:false, error: String(e?.message || e) }), { status: 500 });
  } finally {
    await prisma.$disconnect().catch(()=>{});
  }
}
