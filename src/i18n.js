import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import hy from "./locales/hy.json";
import ru from "./locales/ru.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        defaultLanguage: "hy",
        resources: {
            hy: { translation: hy },
            en: { translation: en },
            ru: { translation: ru },
        },
        fallbackLng: "hy",
        interpolation: { escapeValue: false },
    });

export default i18n;
