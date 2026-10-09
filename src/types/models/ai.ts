export type AI_PROVIDER = "rule" | "openai";
export type AI_KEY_SOURCE = "settings" | "env" | "none";

/** GET /admin/ai/settings — the key itself is never returned, only its source and last four. */
export interface AiSettings {
    provider: AI_PROVIDER;
    model: string;
    apiKeySource: AI_KEY_SOURCE;
    apiKeyLast4: string | null;
    /**
     * The OpenAI Admin key (sk-admin-…) — only used to read real billed costs from
     * OpenAI, never for model calls. Optional in the type while older APIs omit it.
     */
    adminApiKeySource?: "settings" | "none";
    adminApiKeyLast4?: string | null;
    /** proj_… — scopes the billed costs to this app's project; null = whole organisation */
    openaiProjectId?: string | null;
    updatedAt: string | null;
    updatedBy: string | null;
}

export interface AiSettingsPayload {
    provider?: AI_PROVIDER;
    model?: string;
    /** a new key; "" clears the stored one; omit to leave it alone */
    apiKey?: string;
    /** a new Admin key; "" clears it */
    adminApiKey?: string;
    /** "" clears it */
    openaiProjectId?: string;
}

export interface AiModel {
    id: string;
    created: string | null;
}

/** GET /admin/ai/models — live from the provider (cached ten minutes) or a built-in fallback. */
export interface AiModelList {
    configured: boolean;
    source: "live" | "cache" | "fallback";
    fetchedAt: string | null;
    models: AiModel[];
    error?: string;
}

export interface AiTestPayload {
    model?: string;
    apiKey?: string;
}

export interface AiTestResult {
    ok: boolean;
    model: string;
    latencyMs: number;
    error?: string;
}

export type ASSIST_MODE = "fill" | "rewrite" | "enhance" | "translate" | "instruct";
export type ASSIST_FIELD_TYPE = "text" | "textarea" | "select" | "number";

/** How a form describes one of its fields to the assistant. */
export interface AssistField {
    name: string;
    label: string;
    type: ASSIST_FIELD_TYPE;
    value?: string | null;
    options?: { value: string; label: string }[];
    /** the language the content must be written in, for bilingual fields */
    lang?: "ar" | "en";
    maxLength?: number;
    hint?: string;
}

export interface AssistPayload {
    mode: ASSIST_MODE;
    /** what the form is for — the model writes to purpose */
    context: string;
    instruction?: string;
    fields: AssistField[];
    /** field names to change; default all (fill only touches empty ones) */
    target?: string[];
}

export interface AssistResult {
    fields: Record<string, string>;
    model: string;
    latencyMs: number;
}

/** The capabilities the API logs today; anything newer arrives as its raw code. */
export type AI_CAPABILITY = "priority_suggestion" | "admin_form_assist" | "connection_test";

/** USD per one million tokens. */
export interface AiModelPrice {
    model: string;
    inputPerMillion: number;
    outputPerMillion: number;
    /** USD per 1M cached input tokens; null = same as input */
    cachedInputPerMillion?: number | null;
}

/** GET /admin/ai/pricing — the stored table, or the built-in list prices. */
export interface AiPricing {
    prices: AiModelPrice[];
    source: "default" | "settings";
    updatedAt: string | null;
    updatedBy: string | null;
}

/** PATCH /admin/ai/pricing — the whole table; an empty list restores the defaults. */
export interface AiPricingPayload {
    prices: AiModelPrice[];
}

export interface AiUsageNumbers {
    requests: number;
    failed: number;
    inputTokens: number;
    /** part of inputTokens */
    cachedInputTokens?: number;
    outputTokens: number;
    /** part of outputTokens */
    reasoningTokens?: number;
    totalTokens: number;
    /** an estimate: list price × tokens, cached-input discounts not applied */
    costUsd: number;
}

export interface AiUsageByModel extends AiUsageNumbers {
    model: string;
    /** false when the model has no row in the price table (the rule driver counts as priced) */
    priced: boolean;
    price: AiModelPrice | null;
}

export interface AiUsageByCapability extends AiUsageNumbers {
    capability: AI_CAPABILITY | (string & {});
}

export interface AiUsageDay extends AiUsageNumbers {
    /** YYYY-MM-DD, a product day */
    date: string;
}

/** GET /admin/ai/usage?days=N — every day of the window is present, zeros included. */
export interface AiUsage {
    from: string;
    to: string;
    days: number;
    timezone: string;
    /**
     * `estimatedRequests`: older requests stored without their own cost, costed at
     * today's prices. Newer requests carry the cost at their call-time price.
     */
    totals: AiUsageNumbers & { unpricedRequests: number; estimatedRequests?: number };
    byModel: AiUsageByModel[];
    byCapability: AiUsageByCapability[];
    daily: AiUsageDay[];
}

/**
 * GET /admin/ai/provider-usage?days=N — OpenAI's own billing figures, read with the
 * Admin key. They can lag a few hours; org-wide unless a project id is set.
 */
export interface AiProviderUsage {
    configured: boolean;
    source: "live" | "cache" | "none";
    fetchedAt: string | null;
    error?: string;
    projectId: string | null;
    from: string;
    to: string;
    totalUsd: number;
    daily: { date: string; costUsd: number }[];
    byLineItem: { lineItem: string; costUsd: number }[];
    byModel: { model: string; requests: number; inputTokens: number; cachedInputTokens: number; outputTokens: number }[];
}
