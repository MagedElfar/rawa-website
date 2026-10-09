import { SupportedLocale } from "@/types";

export const formatNum = (lang: SupportedLocale) => lang === "ar" ? "ar-SA-u-nu-latn" : "en-GB";


export const money = (value: number, lang: SupportedLocale, maximumFractionDigits: number = 2) => {

    const numberLocale = formatNum(lang);

    return value.toLocaleString(numberLocale, { maximumFractionDigits });
}


export const pct = (value: number, lang: SupportedLocale) => {

    const numberLocale = formatNum(lang);

    return value.toLocaleString(numberLocale, { style: "percent", maximumFractionDigits: 0 });
}

