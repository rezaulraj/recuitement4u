import { hasLocale, NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import { routing } from "@/i18n/routing";
import NotFound from "@/components/common/NotFound";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.recruitment4u.co/"),
  title: "Recruitment-4u - Agency for Employment",
  description: "We connect the right workers with the right employers.",
  keywords:
    "job, jobs, work, employment, employer, employee, career, hiring, recruitment, recruitment agency, job hunting, job search, job board, job site, job listing, job application, job vacancy, job opening, job opportunity, job offer ",
  icons: {
    icon: [
      {
        url: "/logo/Recruitment4u-single2.svg",
        type: "image/svg+xml",
        sizes: "48x48",
      },
      {
        url: "/logo/Recruitment4u-single2.svg",
        type: "image/svg+xml",
        sizes: "96x96",
      },
    ],
    shortcut: {
      url: "/logo/Recruitment4u-single2.svg",
      type: "image/svg+xml",
      sizes: "196x196",
    },
    apple: {
      url: "/logo/Recruitment4u-single2.svg",
      type: "image/svg+xml",
      sizes: "180x180",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Recruitment-4u - Agency for Employment",
    description: "We connect the right workers with the right employers.",
    siteName: "Recruitment-4u",
    images: [
      {
        url: "/logo/Recruitment4u-single2.svg",
        width: 1920,
        height: 1080,
        type: "image/svg+xml",
        alt: "Consultants Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recruitment-4u- Agency for Employment",
    description: "We connect the right workers with the right employers.",
    images: [
      {
        url: "/logo/Recruitment4u-single2.svg",
        width: 1920,
        height: 1080,
        alt: "Logo",
        type: "image/svg+xml",
      },
    ],
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    NotFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="font-sans" suppressHydrationWarning>
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
