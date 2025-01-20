import { useState } from "react";
import en from './en';
import fr from './fr';
import pl from './pl';
import * as _ from 'lodash';
import { Language, TranslationContext, TranslationKeys } from './TranslationContext';

type TranslationProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
};

export function TranslationProvider({
  children,
  defaultLanguage = "en",
  ...props
}: TranslationProviderProps) {
  const [language, setLanguage] = useState<Language>(() => window.navigator.language as Language ?? defaultLanguage);

  const value = {
    language,
    setLanguage: (language: Language) => {
      setLanguage(language);
    },
    t: (key: TranslationKeys) => {
      switch (language) {
        case "fr":
          return _.get(fr, key);
        case "pl":
          return _.get(pl,key);
        default:
          return _.get(en,key);
      }
    }
  };

  return (
    <TranslationContext.Provider
      {...props}
      value={value}
    >
      {children}
    </TranslationContext.Provider>
  );
}


