export interface Team {
    id: string;
    email: string;
    name: string;
    role: TEAM_ROLES;
    status: TEAM_STATUS
    lastLoginAt: string | null
    createdAt: string | null
}

export type TEAM_ROLES = 'super_admin' | 'admin' | 'support' | 'analyst'
export type TEAM_STATUS = 'active' | 'disabled'