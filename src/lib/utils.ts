import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { labels } from "@/i18n/ui";

export const defaultLang = 'en'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export type TranslationKeys = NestedKeyOf<typeof labels[typeof defaultLang]>;

export function useTranslation(lang: keyof typeof labels) {
  return function t(key: TranslationKeys): string {
    const keys = key.split('.');
    let value: any = labels[lang];
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }
    
    if (typeof value === 'string') return value;
    
    // Fallback to default language
    value = labels[defaultLang];
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }
    
    return typeof value === 'string' ? value : key;
  }
}
