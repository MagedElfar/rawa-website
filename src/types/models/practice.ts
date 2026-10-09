export type TRACKING_TYPE = "duration" | "count" | "check";
export type COUNT_UNIT = "times" | "pages" | "cups" | "rakah" | "minutes" | "steps" | "items";

export interface PracticeLevel {
    level: number;
    nameEn: string;
    nameAr: string;
    descriptionEn: string | null;
    descriptionAr: string | null;
    durationMin: number;
    /** completed sessions needed to reach the next level */
    repetitionsToNext: number;
}

export interface GuidelineStep {
    titleEn: string;
    titleAr: string;
    descriptionEn?: string | null;
    descriptionAr?: string | null;
}

export interface Practice {
    id: string;
    nameEn: string;
    nameAr: string;
    /** one-word label for chips and the app's swap sheet ("Running" / "الجري"); null → the name */
    shortNameEn?: string | null;
    shortNameAr?: string | null;
    descriptionEn?: string;
    descriptionAr?: string;
    imageUrl?: string | null;
    /** how-to steps for the app's details sheet: bold title + optional one-liner, AR/EN */
    guidelines?: GuidelineStep[] | null;
    defaultFrequency: FREQUENCIES;
    defaultDurationMin: number;
    /** what "done" means: minutes on the timer, a number of times, or just done */
    trackingType: TRACKING_TYPE;
    /** `count` practices: how many the practice asks for */
    defaultTargetCount?: number | null;
    /** `count` practices: what is being counted */
    countUnit?: COUNT_UNIT | null;
    defaultTimeOfDay: TIMES_OF_DAY;
    defaultReflectionCadence?: REFLECTION_CADENCES;
    isActive: boolean;
    customFrequency?: string;
    /** the growth ladder, lowest level first; empty = default ladder (every 5) */
    levels: PracticeLevel[];
    /** curated swap suggestions, in order — ids of other practices of the same domain */
    alternativeIds?: string[];
}


export interface PracticeLevelState {
    level: number;
    completions: number;
    currentThreshold: number;
    progressInLevel: number;
    toNext: number;
    definedLevels: number;
    label: PracticeLevel | null;
}

export type FREQUENCIES = "daily" | "weekly" | "monthly" | "custom"
export type TIMES_OF_DAY = 'morning' | 'afternoon' | 'evening' | 'flexible';
export type REFLECTION_CADENCES = 'daily' | 'weekly' | 'monthly';
