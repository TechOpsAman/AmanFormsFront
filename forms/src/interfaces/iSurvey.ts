import { iSection, Question } from './iSection';

export interface iSurvey {
    surveyId: string;
    userId: string;
    content: Array<iSection>;
}

export interface iSurveyQuestions {
    id: string;
    surveyName: string;
    creatorId: string;
    content: Array<Question>;
    createdAt: string;
}