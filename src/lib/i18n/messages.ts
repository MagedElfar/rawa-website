// lib/i18n/messages.ts

// Static imports for type inference only
import fs from "fs";
import path from "path";

import type homeDataMessages from "@/messages/en/home.json";
import type layoutDataMessages from "@/messages/en/layout.json";
import { SupportedLocale } from "@/types";

export type MessagesData = {
    layout: typeof layoutDataMessages;
    home: typeof homeDataMessages;

};


export const getMessagesData = async (locale: SupportedLocale) => {
    const baseDir = path.join(process.cwd(), 'src/messages', locale);

    const loadFile = (fileName: string) => {
        const filePath = path.join(baseDir, `${fileName}.json`);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(fileContent);
    };

    return {
        layout: loadFile('layout'),
        home: loadFile('home'),
    };
};