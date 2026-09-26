import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Brand values for images rendered with next/og, which can't read CSS
// variables or woff2 fonts.
export const brand = {
  ink: "#141414",
  gold: "#8a7352",
  goldLight: "#c9b79c",
  white: "#ffffff",
};

const font = (file: string) =>
  readFile(join(process.cwd(), "assets/fonts", file));

export async function loadFonts() {
  const [display, body, bodyBold] = await Promise.all([
    font("cormorant-garamond-500.ttf"),
    font("inter-500.ttf"),
    font("inter-600.ttf"),
  ]);

  return [
    { name: "Cormorant", data: display, weight: 500 as const },
    { name: "Inter", data: body, weight: 500 as const },
    { name: "Inter", data: bodyBold, weight: 600 as const },
  ];
}
