/** The calendars a user can connect; the subscription link (feed) is not a connection. */
export type CalendarProvider = "google" | "outlook" | "apple";
export type CalendarConnectionStatus = "connected" | "error" | "revoked";
/** `live` = env credentials set, `mock` = test driver, `disabled` = nothing configured. */
export type CalendarProviderMode = "live" | "mock" | "disabled";
export type CalendarTimeOfDay = "morning" | "afternoon" | "evening" | "night" | "flexible";
export type CalendarStartTimes = Record<CalendarTimeOfDay, string>;

export interface CalendarProviderSetup {
    mode: CalendarProviderMode;
    /** the exact URI to register with the provider's OAuth app */
    redirectUri: string;
}

export interface CalendarProviderStats {
    connected: number;
    error: number;
}

/** GET /admin/calendar/settings */
export interface CalendarSettings {
    feedEnabled: boolean;
    googleEnabled: boolean;
    outlookEnabled: boolean;
    appleEnabled: boolean;
    autoScheduleEnabled: boolean;
    startTimes: CalendarStartTimes;
    flexibleAllDay: boolean;
    reminderMinutes: number | null;
    calendarNameAr: string;
    calendarNameEn: string;
    providers: { google: CalendarProviderSetup; outlook: CalendarProviderSetup };
    stats: {
        feeds: number;
        feedFetches: number;
        google: CalendarProviderStats;
        outlook: CalendarProviderStats;
        apple: CalendarProviderStats;
    };
    updatedAt: string | null;
    updatedBy: string | null;
}

/** PATCH /admin/calendar/settings — any subset; `startTimes` may be partial, `reminderMinutes: null` = no reminder. */
export type CalendarSettingsPayload = Partial<
    Pick<
        CalendarSettings,
        | "feedEnabled"
        | "googleEnabled"
        | "outlookEnabled"
        | "appleEnabled"
        | "autoScheduleEnabled"
        | "flexibleAllDay"
        | "reminderMinutes"
        | "calendarNameAr"
        | "calendarNameEn"
    >
> & { startTimes?: Partial<CalendarStartTimes> };

export interface CalendarConnection {
    id: string;
    provider: CalendarProvider;
    status: CalendarConnectionStatus;
    autoSchedule: boolean;
    accountEmail: string | null;
    timeZone: string;
    lastSyncedAt: string | null;
    lastError: string | null;
    connectedAt: string;
    revokedAt: string | null;
    eventCount: number;
}

/** A row of GET /admin/calendar/connections — the connection with its owner. */
export interface AdminCalendarConnection extends CalendarConnection {
    user: { id: string; name: string; phone: string | null; email: string | null };
}

/** GET /admin/users/:id/calendar — the subscription link's usage (never the link) and the connections. */
export interface UserCalendar {
    feed: { timeZone: string; createdAt: string; lastFetchedAt: string | null; fetchCount: number } | null;
    connections: CalendarConnection[];
}
