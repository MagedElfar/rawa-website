export type BillingCycle = 'none' | 'monthly' | 'yearly';

export type InvoiceStatus = 'paid' | 'failed' | 'refunded' | 'pending';

export type WebhookOutcome = 'received' | 'processed' | 'duplicate' | 'error';

export type PaymentProvider =
    | 'moyasar'
    | 'tap'
    | 'hyperpay'
    | 'apple_iap'
    | 'google_play'
    | 'mock';

export type BillingChannel = 'card' | 'apple_iap' | 'google_play';

export interface Invoice {
    id: string;
    subscriptionId: string;
    userId: string;
    /** decimal string (SAR) */
    amountSar: string;
    status: InvoiceStatus;
    providerRef: string | null;
    failureReason: string | null;
    paidAt: string | null;
    createdAt: string;
}

export interface BillingProviderCount {
    provider: PaymentProvider;
    /** live (active + in_grace) subscriptions on this provider */
    live: number;
}

export interface BillingPlanCount {
    key: string;
    nameEn: string;
    nameAr: string;
    /** live (active + in_grace) subscriptions on this plan */
    live: number;
    /** live subscriptions on this plan flagged to stop at period end */
    canceling: number;
    /** every subscription ever created on this plan */
    totalSubscriptions: number;
    /** monthly run rate this plan contributes, SAR */
    mrrSar: number;
    /** paid invoices on this plan, all time, SAR */
    revenueSar: number;
}

export interface BillingWeek {
    /** Monday 00:00 UTC */
    weekStart: string;
    /** exclusive */
    weekEnd: string;
    newSubscriptions: number;
    /** subscriptions that stopped (canceled or expired) in the week */
    ended: number;
    /** paid invoices in the week, SAR */
    revenueSar: number;
}

export interface BillingStats {
    active: number;
    inGrace: number;
    pastDue: number;
    canceling: number;
    expired: number;
    canceled: number;
    newLast30d: number;
    byProvider: BillingProviderCount[];
    /** live subscriptions per plan, largest first */
    byPlan: BillingPlanCount[];
    /** the last 12 calendar weeks, oldest first */
    weekly: BillingWeek[];
    /** monthly run rate: live plan prices, yearly normalised to a twelfth */
    mrrSar: number;
    totalRevenueSar: number;
    revenueLast30dSar: number;
    refundedSar: number;
}

export interface WebhookEvent {
    id: string;
    provider: PaymentProvider;
    /** the provider's own event type, as received */
    eventType: string;
    status: WebhookOutcome;
    processedAt: string | null;
    createdAt: string;
    payload: Record<string, unknown> | null;
}
