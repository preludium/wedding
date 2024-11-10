import { createContext, useState } from "react";
import en from './en';
import fr from './fr';
import pl from './pl';
import * as _ from 'lodash';

type Language = "en" | "fr" | "pl";

type DotPrefix<T extends string> = T extends "" ? "" : `.${T}`

type DotNestedKeys<T> = (T extends object ?
    { [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<DotNestedKeys<T[K]>>}` }[Exclude<keyof T, symbol>]
    : "") extends infer D ? Extract<D, string> : never;

type TranslationKeys = DotNestedKeys<typeof en>

type TranslationProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
};

type TranslationProviderState = {
  language: Language;
  setLanguage: (theme: Language) => void;
  t: (key: TranslationKeys) => string;
};

const initialState: TranslationProviderState = {
  language: "en",
  setLanguage: () => null,
  t: () => "",
};

export const TranslationContext = createContext<TranslationProviderState>(initialState);

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


