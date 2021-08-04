import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en-GB',
    react: {
      bindI18n: 'languageChanged',
    },
    detection: {
      lookupCookie: 'i18next',
      order: ['cookie', 'navigator'],
      caches: ['cookie'],
    },
  });

export default i18n;
