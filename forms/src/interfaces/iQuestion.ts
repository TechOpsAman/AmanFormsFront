import { iAnswer } from "./iAnswer";

export interface iQuestion {
  id?: string;
  questionName: string;
  questionType: QuestionType;
  answers?: Array<iAnswer>;
  selectedAnswers?: Array<iAnswer>;
  required?: boolean;
}
export enum QuestionType {
  shortAnswer = "SHORT_ANSWER",
  longAnswer = "LONG_ANSWER",
  radio = "RADIO",
  checkbox = "CHECKBOX",
  select = "SELECT",
  title = "TITLE",
}
