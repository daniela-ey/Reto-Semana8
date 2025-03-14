import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import JobsList from "./components/jobslist";

const messages = {
  es: localeEsMessages,
    en: {}, // Añadir mensajes en inglés
};

const Index = () => {
  const [locale, setLocale] = useState("es");

  useEffect(() => {
    const browserLang = navigator.language || navigator.userLanguage;
    setLocale(browserLang.startsWith("es") ? "es" : "en");
  }, []);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <JobsList locale={locale} />
    </IntlProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
