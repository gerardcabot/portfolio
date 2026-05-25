import ca from "./locales/ca.json";
import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";

export const locales = ["en", "es", "ca", "fr"] as const;

export type Locale = (typeof locales)[number];

/** Shape of locale JSON files: keep keys identical across locales */
export type Messages = typeof en;

export const messagesByLocale: Record<Locale, Messages> = {
  en,
  es,
  ca,
  fr,
};

export const defaultLocale: Locale = "en";

/** Readable labels shown on language chips (still links to `/en/` etc.). */
export const localeChoices: Record<Locale, string> = {
  en: "English",
  es: "Español",
  ca: "Català",
  fr: "Français",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/** Path prefix for locale home, trailing slash included */
export function localePath(locale: Locale): string {
  return `/${locale}/`;
}

/** Hash link inside a locale segment, e.g. /ca/#skills */
export function localeHash(locale: Locale, hash: string): string {
  const id = hash.replace(/^#/, "");
  return `${localePath(locale)}#${id}`;
}
