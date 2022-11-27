import { iSection } from './iSection';
import { Question } from './iQuestion';

export interface iSurvey {
    surveyId: string;
    userId: string;
    content: Array<iSection>;
}
