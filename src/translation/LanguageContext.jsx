import { createContext, useContext, useState } from "react";

const translations = {
  en: {
    hello: "Hello!",
    welcome: "Welcome to our app!",
  },
  es: {
    hello: "¡Hola!",
    welcome: "¡Bienvenido a nuestra aplicación!",
  },
  fr: {
    hello: "Bonjour !",
    welcome: "Bienvenue dans notre application !",
  },
  de: {
    hello: "Hallo!",
    welcome: "Willkommen in unserer App!",
  },
};

const languageContext = createContext({
  language: "en",
  changeLanguage: () => {},
  translation: (key) => key,
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const translation = (expression) => {
    return translations[language]?.[expression];
  };

  return (
    <languageContext.Provider value={{ language, changeLanguage, translation }}>
      {children}
    </languageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(languageContext);
}
