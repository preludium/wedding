import { createContext } from 'react';
import en from './en';

export type Language = "en" | "fr" | "pl";

type DotPrefix<T extends string> = T extends "" ? "" : `.${T}`

type DotNestedKeys<T> = (T extends object ?
  { [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<DotNestedKeys<T[K]>>}` }[Exclude<keyof T, symbol>]
  : "") extends infer D ? Extract<D, string> : never;

export type TranslationKeys = DotNestedKeys<typeof en>

export type TranslationProviderState = {
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
