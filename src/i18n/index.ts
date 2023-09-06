import { createI18n } from "vue-i18n";
import enJson from "./locales/en";

//Create i18n resources
export default createI18n({
  locale: "en",
  messages: {
    en: enJson,
  },
});
