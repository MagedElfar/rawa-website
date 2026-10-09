import { ANSWER_TYPES, ASSESSMENT_TYPES } from "./assessment";
import { Domain } from "./domain";

export interface QuestionOption {
    value: string;
    labelEn: string;
    labelAr: string;
}


export interface Question {
    id: string;
    assessmentType: ASSESSMENT_TYPES;
    subcategoryEn: string | null;
    subcategoryAr: string | null;
    textEn: string;
    textAr: string;
    answerType: ANSWER_TYPES;
    /** null = the API serves the canonical 5-point likert scale */
    options: QuestionOption[] | null;
    sortOrder: number;
    isActive: boolean;
    domain: Domain | null;
    createdAt: string;
}


/** The canonical scale the API serves when a likert question has no custom options. */
/** The app's rendered scale: frequency, "أبدًا" first (value 1 → 5). */
export const LIKERT_5_OPTIONS: QuestionOption[] = [
    { value: "1", labelEn: "Desired", labelAr: "أبدًا" },
    { value: "2", labelEn: "Rarely", labelAr: "نادرًا" },
    { value: "3", labelEn: "Sometimes", labelAr: "أحيانًا" },
    { value: "4", labelEn: "Usually", labelAr: "غالبًا" },
    { value: "5", labelEn: "Always", labelAr: "دائمًا" },
];