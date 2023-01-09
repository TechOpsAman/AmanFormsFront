import { IQuestion } from "./iQuestion";

export interface ISurveyQuestions {
  id?: string;
  creatorId: string;
  surveyName: string;
  surveyDescription: string;
  content: Array<IQuestion>;
  annonimous: boolean;
  repliers: Array<string>;
}