export interface Domain {
    /** present on the admin catalog response */
    id?: string;
    key: string;
    nameEn: string;
    nameAr: string;
    colorDark: string;
    colorTint: string;
    icon: string;
}


export interface DomainScore {
    scorePct: number;
    classification: CLASSIFICATION;
    domain: Domain;
}


export type CLASSIFICATION = "needs_care" | "starting" | "growing" | "steady";
