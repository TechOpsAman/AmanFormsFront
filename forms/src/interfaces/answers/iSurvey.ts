import { ISection } from "./iSection";

export interface ISurveyAnswers {
  surveyId: string;
  userId: string;
  content: Array<ISection>;
}