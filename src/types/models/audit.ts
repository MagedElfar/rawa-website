export type AuditActorType = 'admin' | 'user' | 'system';

/** Who a row's actorId names, looked up in its namespace (admin_users or users). */
export interface AuditActor {
    id: string;
    type: 'admin' | 'user';
    name: string | null;
    email: string | null;
    /** app users only */
    phone: string | null;
    /** admin role (super_admin, admin, support, analyst), or `user` / `guest` */
    role: string;
}

/** Readable name of the record a row points at (question text, goal name, user name, path name…). */
export interface AuditTarget {
    labelEn: string | null;
    labelAr: string | null;
}

/** One edited field on an update row: the stored value before and after the save. */
export interface AuditChange {
    from: unknown;
    to: unknown;
}

export interface AuditRow {
    id: string;
    actorType: AuditActorType;
    actorId: string | null;
    /** machine code, e.g. `assessment.question_update` */
    action: string;
    /** e.g. `assessment_question`, `user`, `admin_user` */
    entity: string;
    /** usually a uuid; some settings rows carry a key instead */
    entityId: string | null;
    /**
     * Updates of questions, goals, practices, team members, users and billing plans:
     * `{ fields, changes: { [field]: { from, to } } }` with only the fields that really
     * changed. Rows written before 2026-09-15 carry `fields` (every submitted key) only.
     */
    meta: Record<string, unknown> | null;
    /** null on system jobs and rows written before 2026-09-15 */
    ip: string | null;
    userAgent: string | null;
    sessionId: string | null;
    createdAt: string;
    /** null for system rows or an account that no longer exists */
    actor: AuditActor | null;
    /** null when the record is unknown or no longer exists */
    target: AuditTarget | null;
}
