import { Question } from "./iQuestion";

export interface iSurveyQuestions {
    id: string;
    surveyName: string;
    creatorId: string;
    content: Array<Question>;
    createdAt: string;
}