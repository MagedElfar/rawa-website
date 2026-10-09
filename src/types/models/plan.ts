import { BillingCycle } from "./invoice";

export interface Plan {
    id: string;
    key: string;
    nameEn: string;
    nameAr: string;
    /** decimal string (SAR) */
    priceSar: string;
    billingCycle: BillingCycle;
    features: unknown;
    isActive: boolean;
    /** App Store product id the app buys through StoreKit for this plan */
    appleProductId: string | null;
    /** Play product id the app buys through Play Billing for this plan */
    googleProductId: string | null;
}