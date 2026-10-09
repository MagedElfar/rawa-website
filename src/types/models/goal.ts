import { Domain } from "./domain";
import { Practice } from "./practice";

export interface Goal {
    id: string;
    key: string;
    nameEn: string;
    nameAr: string;
    isActive: boolean;
    descriptionEn?: string;
    descriptionAr?: string;
    imageUrl?: string | null;
    domain: Omit<Domain, "icon"> | null;
    practices: Practice[];
}