import { ISection } from "./iSection";

export interface ISurvey {
  surveyId: string;
  userId: string;
  content: Array<ISection>;
}
