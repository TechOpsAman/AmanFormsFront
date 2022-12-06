import { QuestionType } from "./iQuestion";
import { Answer } from "./iAnswer";

export interface iSurvey {
    id?: string;
    surveyName: string;
    creatorId: string;
    content: Array<SurveyQuestion>;
    createdAt: string;
}

export interface SurveyQuestion {
    id?: string;
    questionName: string;
    questionType: QuestionType;
    required: boolean;
    answers?: Array<Answer>;
  }