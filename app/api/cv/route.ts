import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "cv.html");
  const html = await fs.readFile(filePath);

  return new Response(html.toString("utf-8"), {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": "attachment; filename=\"CV_Leandro_Maciel.html\"",
    },
  });
}
