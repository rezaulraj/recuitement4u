"use server";

import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import type { AppLocale, CountryCode } from "./i18n/type";
import { countryToLocale } from "./i18n/type";

const intlMiddleware = createMiddleware(routing);

interface GeoIPResponse {
  country?: CountryCode;
  country_name?: string;
  ip?: string;
  error?: boolean;
  reason?: string;
}

interface MiddlewareParams {
  request: NextRequest;
  pathname: string;
}

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const params: MiddlewareParams = { request, pathname };

  // Skip static files and already-localized routes
  if (shouldSkipMiddleware(params)) {
    return intlMiddleware(request);
  }

  // Check for existing locale in cookie
  const cookieLocale = getCookieLocale(params);
  if (cookieLocale) {
    return createLocaleRedirect(cookieLocale, params);
  }

  // Auto-detect based on IP (GeoIP)
  const ipLocale = await detectLocaleFromIP(params);
  return createLocaleRedirect(ipLocale, params);
}

// Skip middleware for already localized paths or static assets
function shouldSkipMiddleware({ pathname }: MiddlewareParams): boolean {
  const localePattern = `^/(${routing.locales.join("|")})(/|$)`;
  return new RegExp(localePattern).test(pathname) || /\.(.*)$/.test(pathname);
}

// Read locale from cookie
function getCookieLocale({ request }: MiddlewareParams): AppLocale | null {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  return cookieLocale && routing.locales.includes(cookieLocale as AppLocale)
    ? (cookieLocale as AppLocale)
    : null;
}

// Detect locale from user's IP
async function detectLocaleFromIP({
  request,
}: MiddlewareParams): Promise<AppLocale> {
  try {
    const ip = getClientIP(request);
    const geo = await fetchGeoIP(ip);

    if (geo?.country && countryToLocale[geo.country]) {
      return countryToLocale[geo.country];
    }

    return routing.defaultLocale;
  } catch (error) {
    console.error("GeoIP detection failed:", error);
    return routing.defaultLocale;
  }
}

// Get IP address from request headers
function getClientIP(request: NextRequest): string {
  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "8.8.8.8" // fallback IP (Google DNS)
  );
}

// Fetch location data from ipapi.co
async function fetchGeoIP(ip: string): Promise<GeoIPResponse | null> {
  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    if (!response.ok) {
      console.warn("GeoIP API error:", await response.text());
      return null;
    }
    return (await response.json()) as GeoIPResponse;
  } catch (err) {
    console.error("Failed to fetch GeoIP:", err);
    return null;
  }
}

// Redirect to the localized path
function createLocaleRedirect(
  locale: AppLocale,
  { request, pathname }: MiddlewareParams
): NextResponse {
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

// Match all pages except API, static, or assets
export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
