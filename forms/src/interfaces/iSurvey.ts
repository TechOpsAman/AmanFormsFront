import { iQuestion } from "./iQuestion";

export interface iSurvey {
  id?: string;
  creatorId: string;
  surveyName: string;
  surveyDescription: string;
  content: Array<iQuestion>;
}
