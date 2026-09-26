import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getDictionary, hasLocale } from "@/lib/i18n";
import { brand, loadFonts } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = `${site.name}, ${site.title} · ${site.brokerage}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadHeadshot() {
  if (!site.headshot) return null;
  const data = await readFile(join(process.cwd(), "public", site.headshot));
  return `data:image/jpeg;base64,${data.toString("base64")}`;
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const { hero } = getDictionary(hasLocale(lang) ? lang : "en");
  const [fonts, headshot] = await Promise.all([loadFonts(), loadHeadshot()]);

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
          border: `1px solid ${brand.gold}`,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "52px 56px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <div
              style={{
                fontFamily: "Cormorant",
                fontSize: 60,
                color: brand.white,
                lineHeight: 1,
              }}
            >
              MH
            </div>
            <div
              style={{ width: 1, height: 52, background: brand.goldLight }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  letterSpacing: 4,
                  color: brand.white,
                  textTransform: "uppercase",
                }}
              >
                {site.name}
              </div>
              <div
                style={{
                  fontSize: 15,
                  letterSpacing: 4,
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
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: 5,
                color: brand.goldLight,
                textTransform: "uppercase",
              }}
            >
              {hero.eyebrow}
            </div>
            <div
              style={{
                fontFamily: "Cormorant",
                fontSize: 84,
                color: brand.white,
                lineHeight: 1.02,
                marginTop: 18,
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
              fontSize: 19,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <div style={{ display: "flex" }}>{hero.highlights[2]}</div>
            <div style={{ display: "flex", color: brand.goldLight }}>
              @buywithmiguel
            </div>
          </div>
        </div>

        {headshot && (
          <img
            src={headshot}
            alt=""
            width={420}
            height={548}
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        )}
      </div>
    </div>,
    { ...size, fonts },
  );
}
