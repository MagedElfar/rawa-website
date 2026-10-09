import { Domain } from "./domain";
import { Goal } from "./goal";
import { FREQUENCIES, PracticeLevel, PracticeLevelState, TIMES_OF_DAY } from "./practice";

export type SOURCE = "ai" | "catalog" | "custom";
export type ATTENTION = "high" | "medium" | "low";
export type JOURNEY_PRIORITY_STATUS = "active" | "unlocked" | "completed";
export type JOURNEY_PRACTICE_STATUS = "active" | "paused" | "swapped" | "archived" | "completed";
export type JOURNEY_GOAL = "active" | "ongoing" | "new" | "locked" | "completed" | "archived";

export interface SuggestionItem {
    domainKey: string;
    rank: number;
    attention: ATTENTION;
    rationaleEn: string;
    rationaleAr: string;
}

export interface JourneySuggestion {
    id: string;
    assessmentId: string | null;
    createdAt: string;
    model: string;
    suggestions: SuggestionItem[];
}

export interface JourneyPriority {
    assessmentId: string;
    rank: number;
    status: JOURNEY_PRIORITY_STATUS
    createdAt: string;
    domain: Domain;
}

export interface JourneyPractice {
    id: string;
    source: SOURCE;
    status: JOURNEY_PRACTICE_STATUS;
    name: { en: string; ar: string };
    intention: string | null;
    frequency: FREQUENCIES;
    durationMin: number;
    timeOfDay: TIMES_OF_DAY;
    startDate: string;
    createdAt: string;
    /** last status change — for a swapped row, when the swap happened */
    updatedAt: string;
    /** the practice this one replaced (set on the replacement side of a swap) */
    swappedFromId: string | null;
    catalogPracticeId: string | null;
    imageUrl: string | null;
    levels: PracticeLevel[];
    completions: number;
    level: PracticeLevelState;
}

export interface JourneyGoal {
    id: string;
    source: SOURCE;
    status: JOURNEY_GOAL;
    sortOrder: number;
    createdAt: string;
    domain: Domain;
    catalogGoal: Goal | null;
    name: { en: string; ar: string };
    description: string | null;
    imageUrl: string | null;
    practices: JourneyPractice[];
}

export interface JourneyPlan {
    id: string;
    assessmentId: string | null;
    pathType: "assessment" | "custom";
    status: "draft" | "active" | "archived";
    confirmedAt: string | null;
    createdAt: string;
    goals: JourneyGoal[];
}

export interface UserJourney {
    suggestions: JourneySuggestion[];
    priorities: JourneyPriority[];
    plans: JourneyPlan[];
}
