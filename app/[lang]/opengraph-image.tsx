import { ImageResponse } from "next/og";
import { getDictionary, hasLocale } from "@/lib/i18n";
import { brand, loadFonts } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = `${site.name}, ${site.title} · ${site.brokerage}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const { hero } = getDictionary(hasLocale(lang) ? lang : "en");

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: brand.ink,
        padding: 40,
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: `1px solid ${brand.gold}`,
          padding: "56px 64px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              fontFamily: "Cormorant",
              fontSize: 64,
              color: brand.white,
              lineHeight: 1,
            }}
          >
            MH
          </div>
          <div style={{ width: 1, height: 56, background: brand.goldLight }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div
              style={{
                fontSize: 24,
                fontWeight: 600,
                letterSpacing: 5,
                color: brand.white,
                textTransform: "uppercase",
              }}
            >
              {site.name}
            </div>
            <div
              style={{
                fontSize: 16,
                letterSpacing: 5,
                color: brand.goldLight,
                textTransform: "uppercase",
              }}
            >
              {`${site.title} · ${site.brokerage}`}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 6,
              color: brand.goldLight,
              textTransform: "uppercase",
            }}
          >
            {hero.eyebrow}
          </div>
          <div
            style={{
              fontFamily: "Cormorant",
              fontSize: 96,
              color: brand.white,
              lineHeight: 1.05,
              marginTop: 20,
            }}
          >
            {hero.title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <div style={{ display: "flex" }}>{hero.highlights[2]}</div>
          <div style={{ display: "flex", color: brand.goldLight }}>
            @buywithmiguel
          </div>
        </div>
      </div>
    </div>,
    { ...size, fonts: await loadFonts() },
  );
}
