import { readFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

export async function GET() {
  const resumePath = path.join(
    process.cwd(),
    "src",
    "data",
    "Muhammad-Mustafa-Resume.pdf"
  );

  const resumeBuffer = await readFile(resumePath);

  return new Response(resumeBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Muhammad-Mustafa-Resume.pdf"',
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}