import React from "react";

interface LanguageContext {
  language: string;
  setLanguage: (lng: string) => void;
}

export default React.createContext<LanguageContext>({
  language: "",
  setLanguage: () => {}
});
