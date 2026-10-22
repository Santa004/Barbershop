import fs from "node:fs";
import path from "node:path";

/**
 * Kollar vid byggtid om en bild finns i public/. Saknas filen visar
 * komponenterna en snygg platshållare i stället för en trasig bild.
 */
export function publicImage(src: string): string | null {
  const file = path.join(process.cwd(), "public", src.replace(/^\//, ""));
  return fs.existsSync(file) ? src : null;
}
