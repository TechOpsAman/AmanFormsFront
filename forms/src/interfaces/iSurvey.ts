import { IQuestion } from "./iQuestion";

export interface iSurvey {
  id?: string;
  creatorId: string;
  surveyName: string;
  content: Array<IQuestion>;
}