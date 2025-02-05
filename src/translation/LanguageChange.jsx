import { useLanguage, LanguageProvider } from "./LanguageContext";

function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div>
      <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Espanol</option>
        <option value="fr">Français</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  );
}

function Greeting() {
  const { translation } = useLanguage();

  return (
    <div>
      <h1>{translation("hello")}</h1>
      <p>{translation("welcome")}</p>
    </div>
  );
}

export default function LanguageChange() {
  return (
    <LanguageProvider>
      <LanguageSwitcher />
      <Greeting />
    </LanguageProvider>
  );
}
