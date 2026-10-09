export interface ActivityWindow {
    days: number;
    completed: number;
    skipped: number;
    missed: number;
    pending: number;
    completionRatePct: number;
    practiceMinutes: number;
    avgMinutesPerActiveDay: number;
    activeDays: number;
    appOpenDays: number;
    appOpens: number;
    moodCheckins: number;
    reflections: number;
}

export interface ActivityWeek {
    weekStart: string;
    weekEnd: string;
    completed: number;
    skipped: number;
    missed: number;
    practiceMinutes: number;
    activeDays: number;
    moodCheckins: number;
    appOpenDays: number;
}

export interface ActivityDay {
    date: string;
    completed: number;
    skipped: number;
    practiceMinutes: number;
    mood: string | null;
    opened: boolean;
}

export type ActivityEventType =
    | "session_completed"
    | "session_skipped"
    | "mood_checkin"
    | "reflection"
    | "achievement"
    | "practice_swapped"
    | "plan_confirmed"
    | "assessment_completed";

export interface ActivityEvent {
    type: ActivityEventType;
    at: string;
    title: { en: string; ar: string } | null;
    meta?: Record<string, unknown>;
}

export interface ActivityEngagement {
    joinedAt: string;
    daysSinceJoin: number;
    isGuest: boolean;
    status: string;
    lastLoginAt: string | null;
    lastSeenAt: string | null;
    lastActivityAt: string | null;
    currentStreakDays: number;
    bestStreakDays90d: number;
    devices: number;
}

export interface ActivityAllTime {
    sessionsCompleted: number;
    sessionsSkipped: number;
    sessionsMissed: number;
    reflections: number;
    achievements: number;
    moodCheckins90d: number;
    assessmentsCompleted: number;
    lastAssessmentAt: string | null;
    plans: number;
    activePlanSince: string | null;
    activeGoals: number;
    activePractices: number;
    customGoals: number;
    customPractices: number;
    swaps: number;
}

export interface Achievement {
    id: string; type: string; level: number | null; title: string; achievedAt: string
}

export interface UserActivityReport {
    generatedAt: string;
    engagement: ActivityEngagement;
    windows: { d7: ActivityWindow; d30: ActivityWindow; d90: ActivityWindow };
    allTime: ActivityAllTime;
    moods: {
        last: { date: string; mood: string } | null;
        distribution90d: { mood: string; count: number }[]
    };
    achievements: Achievement[];
    weekly: ActivityWeek[];
    daily: ActivityDay[];
    recent: ActivityEvent[];
}
