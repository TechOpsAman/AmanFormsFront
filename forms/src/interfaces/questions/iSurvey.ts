import { IQuestion } from "./iQuestion";

export interface ISurvey {
  id?: string;
  creatorId: string;
  surveyName: string;
  surveyDescription: string;
  content: Array<IQuestion>;
}
