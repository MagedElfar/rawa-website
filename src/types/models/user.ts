import { SupportedLocale } from "../common";
import { Subscription } from "./subscription";

export interface User {
    id: string;
    name: string;
    email: string | null;
    phone: string | null;
    gender: Gender | null;
    birthDate: string | null;
    weightKg: number | null;
    heightCm: number | null;
    locale: SupportedLocale;
    isGuest: boolean;
    guestConvertedAt: string | null;
    phoneVerifiedAt: string | null;
    emailVerifiedAt: string | null;
    biometricsEnabled: boolean;
    status: UserStatus
    devices?: UserDevice[];
    subscriptions: Subscription[],
    authIdentities: { provider: AdminUserIdentityResponse }[]
    deletedAt: string | null;
    createdAt: string | null
    updatedAt: string | null
}

export interface UserAdmin {
    id: string;
    email: string;
    name: string;
    role: ADMIN_ROLES;
}

export interface UserStats {
    total: number;
    active: number;
    suspended: number;
    deleted: number;
    guests: number;
    verified: number;
    newLast7Days: number;
};

export interface UserDevice {
    platform: "ios" | "android";
    appVersion: string;
    appBuild?: string | null;
    osVersion?: string | null;
    deviceModel?: string | null;
    lastSeenAt: string;
}

export interface UserSession {
    id: string,
    deviceId: string,
    createdAt: string,
    expiresAt: string
}

export type ADMIN_ROLES = 'super_admin' | 'admin' | 'support' | 'analyst'

export type Gender = 'male' | 'female'

export type AgeRange = "under18" | "18-24" | "25-34" | "35-44" | "45-54" | "55+"

export type UserStatus = 'active' | 'suspended' | 'deleted'

export type AdminUserIdentityResponse = 'google' | 'apple' | 'facebook'