import i18n from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import { initReactI18next} from "react-i18next";

import de from './assets/i18n/de';
import en from './assets/i18n/en';

export const resources = {
  default: {
    translation: en,
  },
  en: {
    translation: en,
  },
  de: {
    translation: de,
  }
};

export type Language = Exclude<keyof typeof resources, 'default'>;

export const defaultLanguage: Language = 'en';

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources,
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
