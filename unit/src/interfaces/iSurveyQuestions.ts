import { Question } from "./iQuestion";

export interface iSurveyQuestions {
    surveyId: string;
    surveyName: string,
    surveyType: string,
    userId: string;
    content: Array<Question>;
    
}