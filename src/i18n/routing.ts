import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "bg", "bs", "sr", "hr", "ro", "ru", "sl", "sk", "el", "la"],
  defaultLocale: "en",
  // localePrefix: "as-needed", // Use "always" if you want /en/ even as default
});
