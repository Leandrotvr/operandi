import { promises as fs } from "fs";
import path from "path";

/**
 * Devuelve el CV como descarga (attachment).
 * Origen: public/cv.html — estático (apto CDN)
 */
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "cv.html");
    const buf = await fs.readFile(filePath);
    const html = buf.toString("utf-8");

    return new Response(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Content-Disposition": "attachment; filename=\"CV_Leandro_Maciel.html\"",
        "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
      },
    });
  } catch (err) {
    console.error("[api/cv] error:", err);
    return new Response("CV no disponible", { status: 500 });
  }
}
