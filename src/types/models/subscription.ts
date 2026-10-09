import { BillingChannel, BillingCycle, Invoice, PaymentProvider } from "./invoice";

export type SubscriptionStatus =
    | 'active'
    | 'past_due'
    | 'canceled'
    | 'expired'
    | 'in_grace';


export const channelOf = (provider: string): BillingChannel =>
    provider === 'apple_iap' || provider === 'google_play' ? provider : 'card';

export const isStoreProvider = (provider: string) => channelOf(provider) !== 'card';

export interface Subscription {
    id: string;
    userId: string;
    planId: string;
    status: SubscriptionStatus;
    provider: PaymentProvider;
    providerSubscriptionId: string | null;
    currentPeriodStart: Date | string;
    currentPeriodEnd: Date | string;
    cancelAtPeriodEnd: boolean;
    canceledAt: Date | string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
}

export interface SubscriptionPlanSummary {
    key: string;
    nameEn: string;
    nameAr: string;
    /** decimal string (SAR) */
    priceSar: string;
    billingCycle: BillingCycle;
}

export interface SubscriptionUserSummary {
    id: string;
    name: string;
    phone: string | null;
    email: string | null;
}

/** One row of the admin list — the subscription with its plan and subscriber. */
export interface AdminSubscription extends Subscription {
    plan: SubscriptionPlanSummary;
    user: SubscriptionUserSummary;
}



export interface AdminSubscriptionDetail extends AdminSubscription {
    /** newest first */
    invoices: Invoice[];
    /** where a store subscription is managed — null for card subscriptions */
    manageUrl: string | null;
}