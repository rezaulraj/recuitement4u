export type AppLocale =
  | "en"
  | "bg"
  | "bs"
  | "sr"
  | "hr"
  | "ro"
  | "ru"
  | "sl"
  | "sk"
  | "el"
  | "la";

export type CountryCode = keyof typeof countryToLocale;

export const countryToLocale = {
  BG: "bg",
  BA: "bs",
  RS: "sr",
  HR: "hr",
  RO: "ro",
  RU: "ru",
  SI: "sl",
  SK: "sk",
  US: "en",
  GB: "en",
  DE: "en",
  FR: "en",
  EL: "el", // Greece
  VA: "la", // Vatican City (Latin)
} as const satisfies Record<string, AppLocale>;
