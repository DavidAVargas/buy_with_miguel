import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n";

function getLocale(request: NextRequest) {
  const preferred = request.headers.get("accept-language") ?? "";
  return preferred.toLowerCase().startsWith("es") ? "es" : defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  request.nextUrl.pathname = `/${getLocale(request)}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next internals, API routes, and any file with an extension.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
