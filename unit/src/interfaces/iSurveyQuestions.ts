import { Question } from "./iQuestion";

export interface iSurveyQuestions {
  
    surveyId: string;
    userId: string;
    content: Array<Question>;
    
}