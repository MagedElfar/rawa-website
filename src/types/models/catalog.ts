import { Goal } from "./goal";

export interface DomainCatalog {
    id: string;
    key: string;
    nameEn: string;
    nameAr: string;
    colorDark: string;
    colorTint: string;
    goals: Goal[];
}