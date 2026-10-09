import { Domain, DomainScore } from "./domain";

export interface AssessmentRun {
    id: string;
    type: ASSESSMENT_RUN_TYPE;
    status: ASSESSMENT_RUN_STATUS;
    startedAt: string;
    completedAt: string | null;
    answeredCount: number;
    domainScores: DomainScore[];
}

export interface AssessmentAnswer {
    questionId: string;
    value: string;
    previousValue: string | null;
    /** the question as it read when answered */
    questionTextEn: string | null;
    questionTextAr: string | null;
    answerType: ANSWER_TYPES | null;
    answerLabelEn: string | null;
    answerLabelAr: string | null;
    answeredAt: string;
    /** how the bank reads today */
    currentQuestionTextEn: string;
    currentQuestionTextAr: string;
    questionChanged: boolean;
    questionIsActive: boolean;
    domain: Domain | null;
}

export interface AssessmentRunDetail {
    id: string;
    userId: string;
    type: ASSESSMENT_RUN_TYPE;
    status: ASSESSMENT_RUN_STATUS;
    startedAt: string;
    completedAt: string | null;
    domainScores: DomainScore[];
    answers: AssessmentAnswer[];
}


export type ASSESSMENT_RUN_TYPE = "intake" | "free" | "full_9d" | "retake";
export type ASSESSMENT_RUN_STATUS = "in_progress" | "completed" | "abandoned";


export type ASSESSMENT_TYPES = "intake" | "full_9d";
export type ANSWER_TYPES = "likert_5" | "single_choice";

