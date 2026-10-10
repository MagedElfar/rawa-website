import type { Metadata } from "next";
import { Inter, Roboto, Tajawal } from "next/font/google";
import localFont from "next/font/local";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";

import { getAppLocale } from "@/lib/i18n/getLocale";
import { routing } from "@/lib/i18n/routing";
import { cn } from "@/lib/utils";
import { AppProvider } from "@/providers/AppProvider";
import { SupportedLocale } from "@/types";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const madikaArabic = localFont({
  src: [
    {
      path: "../../../public/fonts/MadikaArabicTRIAL-Regular.woff2", // عدّل المسار حسب اسم الملف لديك
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/MadikaArabicTRIAL-Medium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/MadikaArabicTRIAL-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-madika",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rawa",
  description: "Rawa website",
};

interface Props {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  const messages = await getMessages({ locale: locale as SupportedLocale });
  const { dir } = await getAppLocale(locale);

  // العودة للاختيار الأساسي الخاص بك (Inter و Tajawal)
  const currentFontClass = dir === "rtl" ? madikaArabic.className : inter.className;

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      className={cn(inter.variable, roboto.variable, madikaArabic.variable)}
    >
      <body className={cn(currentFontClass, "bg-paper antialiased")}>
        <AppProvider locale={locale as SupportedLocale} messages={messages}>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}