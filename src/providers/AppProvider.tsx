"use client";

import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { Slide, ToastContainer } from 'react-toastify';



import { TooltipProvider } from "@/components/ui/tooltip";
import { MessagesData } from "@/lib/i18n/messages";
import { SupportedLocale } from "@/types";


interface ProvidersProps {
    children: ReactNode;
    locale: SupportedLocale;
    messages: MessagesData;
}

export function AppProvider({ children, locale, messages }: ProvidersProps) {
    return (
        <NextIntlClientProvider timeZone="Asia/Riyadh" locale={locale} messages={messages}>
            <TooltipProvider>
                <ToastContainer transition={Slide} />
                {children}
            </TooltipProvider>
        </NextIntlClientProvider>
    );
}