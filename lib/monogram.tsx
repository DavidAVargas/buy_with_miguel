import { ImageResponse } from "next/og";
import { brand, loadFonts } from "@/lib/og";

// Gold "MH" on ink, shared by the favicon and the Apple touch icon.
export async function renderMonogram(size: number) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: brand.ink,
        color: brand.goldLight,
        fontFamily: "Cormorant",
        fontSize: size * 0.55,
        letterSpacing: size * -0.02,
        paddingBottom: size * 0.06,
      }}
    >
      MH
    </div>,
    { width: size, height: size, fonts: await loadFonts() },
  );
}
