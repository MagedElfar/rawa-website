/** Console reports — GET /admin/reports/summary and /admin/reports/content. */

export interface ReportRange {
    from: string;
    to: string;
    /** product days in the range */
    days: number;
    timezone: string;
}

export interface GrowthBlock {
    newAccounts: number;
    newGuests: number;
    newRegistered: number;
    guestConversions: number;
    deletedAccounts: number;
    /** opened the app (a refresh token was issued) or completed a practice */
    activeAccounts: number;
}

export interface EngagementBlock {
    assessmentsStarted: number;
    assessmentsCompleted: number;
    freeCompleted: number;
    paidCompleted: number;
    plansGenerated: number;
    plansConfirmed: number;
    sessionsScheduled: number;
    sessionsCompleted: number;
    /** sessionsCompleted / sessionsScheduled */
    completionRate: number;
    reflections: number;
    goalsUnlocked: number;
    moodCheckins: number;
}

export interface MoneyBlock {
    subscriptionsStarted: number;
    subscriptionsEnded: number;
    liveAtEnd: number;
    mrrSar: number;
    invoicesPaid: number;
    /** paid invoices in the period — gross proceeds, not profit */
    revenueSar: number;
    refundedSar: number;
    byPlan: { key: string; nameEn: string; nameAr: string; live: number; mrrSar: number }[];
    byChannel: { channel: string; live: number }[];
}

export interface RetentionBlock {
    windowDays: number;
    cohort: number;
    returned: number;
    /** too new to have had the full window yet */
    pending: number;
    rate: number;
}

export interface ReportSeriesRow {
    date: string;
    newAccounts: number;
    sessionsCompleted: number;
    revenueSar: number;
}

export interface ReportSummary {
    range: ReportRange;
    previous: { from: string; to: string };
    growth: GrowthBlock & { previous: GrowthBlock };
    engagement: EngagementBlock & { previous: EngagementBlock };
    money: MoneyBlock & { previous: MoneyBlock };
    retention: RetentionBlock;
    series: ReportSeriesRow[];
}

export interface ContentDomainSummary {
    key: string;
    nameEn: string;
    nameAr: string;
}

export interface ContentGoalRow extends ContentDomainSummary {
    id: string;
    isActive: boolean;
    domain: ContentDomainSummary;
    /** times the goal entered a plan in the period */
    picks: number;
}

export interface ContentPracticeRow {
    id: string;
    nameEn: string;
    nameAr: string;
    isActive: boolean;
    goal: ContentDomainSummary & { domain?: { key?: string } };
    picks: number;
    swappedAway: number;
}

export interface ContentReport {
    range: ReportRange;
    /** goals users wrote themselves — what the library did not cover */
    customGoals: number;
    swapsTotal: number;
    goals: ContentGoalRow[];
    practices: ContentPracticeRow[];
    domains: (ContentDomainSummary & { goalPicks: number; priorityPicks: number })[];
}

export interface ReportRangeParams {
    from?: string;
    to?: string;
}

/** The written read-out — POST /admin/reports/analysis. */

export interface ReportFact {
    metric: string;
    current: number;
    previous: number;
    /** null when the previous period was zero */
    changePct: number | null;
    direction: "up" | "down" | "flat";
    higherIsBetter: boolean;
}

export interface ReportFlag {
    code: string;
    severity: "high" | "medium" | "low";
    value: number;
}

export interface AnalysisNote {
    titleAr: string;
    titleEn: string;
    detailAr: string;
    detailEn: string;
}

export interface ReportAnalysis {
    range: ReportRange;
    previous: { from: string; to: string };
    /** `rules` when no model is configured or the call failed — `analysis` is then null */
    source: "ai" | "rules";
    facts: ReportFact[];
    flags: ReportFlag[];
    analysis: {
        summaryAr: string;
        summaryEn: string;
        highlights: AnalysisNote[];
        risks: (AnalysisNote & { severity: "high" | "medium" | "low" })[];
        recommendations: (AnalysisNote & { impact: "high" | "medium" | "low"; effort: "low" | "medium" | "high" })[];
    } | null;
    model: string | null;
    latencyMs: number | null;
    generatedAt: string;
    error?: string;
}
