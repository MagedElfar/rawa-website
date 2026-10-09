/** A presence rating that counts toward opening the next goal ("desired" never does). */
export type UNLOCK_LEVEL = "rarely" | "sometimes" | "usually" | "always";

/** Check-ins of each rating that open the next goal — GET /admin/goal-unlock. */
export type GoalUnlockThresholds = Record<UNLOCK_LEVEL, number>;

/** PATCH /admin/goal-unlock takes any subset. */
export type GoalUnlockPayload = Partial<GoalUnlockThresholds>;
