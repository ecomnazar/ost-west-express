import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ruJson from "./locale/ru/translation.json";
import geJson from "./locale/ge/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    ge: { ...geJson },
    ru: { ...ruJson },
  }, // Where we're gonna put translations' files
  lng: "ge", // Set the initial language of the App
});
