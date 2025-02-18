import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationVi from "./vi.json";
import translationEn from "./en.json";

const resources = {
  vi_VN: { translation: translationVi.translation },
  en_US: { translation: translationEn.translation },
};

i18next.use(initReactI18next).init({
  lng: "en_US",
  debug: true,
  resources,
});
