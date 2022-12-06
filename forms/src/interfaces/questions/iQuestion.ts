import { IAnswer } from "./iAnswer";

export interface IQuestion {
  id?: string;
  questionName: string;
  questionType: QuestionType;
  required: boolean;
  answers?: Array<IAnswer>;
}

export enum QuestionType {
  shortAnswer = "SHORT_ANSWER",
  longAnswer = "LONG_ANSWER",
  radio = "RADIO",
  checkbox = "CHECKBOX",
  select = "SELECT",
  title = "TITLE",
}
