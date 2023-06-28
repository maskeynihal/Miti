import { useTranslation } from "react-i18next";

function useLanguage() {
  const { i18n, t } = useTranslation();
  // if the current selected language is nepali or not
  const isNepaliLanguage = i18n.language != "en-US";
  return { i18n, t, isNepaliLanguage };
}

export default useLanguage;