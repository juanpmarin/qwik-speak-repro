import type { SpeakConfig } from "qwik-speak";

export const config: SpeakConfig = {
  defaultLocale: {
    lang: "en-US",
    currency: "USD",
    timeZone: "America/Los_Angeles",
  },
  supportedLocales: [
    { lang: "it-IT", currency: "EUR", timeZone: "Europe/Rome" },
    { lang: "en-US", currency: "USD", timeZone: "America/Los_Angeles" },
  ],
  assets: [],
};
