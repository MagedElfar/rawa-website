import { SupportedLocale } from "@/types";

const LangPrefix: Record<SupportedLocale, string> = {
    ar: "Ar",
    en: "En"
}

export const getLocalizedFieldValue = <T extends Record<string, any>>(
    data: T | null | undefined,
    lang: SupportedLocale,
    prefix: string = "name",
    fallbackKey?: keyof T
): string => {
    if (!data) return "";

    const langPrefix = LangPrefix[lang]
    const localizedKey = `${prefix}${langPrefix}`;
    const defaultFallback = `${prefix}En`;

    const value = data[localizedKey] ?? (fallbackKey ? data[fallbackKey] : data[defaultFallback]);

    return (typeof value === 'string' && value.trim() !== '' ? value : "---");
};


export const getImageUrl = (name: string, locale: string, folder: string = "home") => `/${folder}/${name}-${locale}.png`