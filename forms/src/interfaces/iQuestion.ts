import { IAnswer } from "./iAnswer";

export interface IQuestion {
  id?: string;
  questionName: string;
  questionType: QuestionType;
  answers?: Array<IAnswer>;
  selectedAnswers?: Array<IAnswer>;
  mustAnswer?: boolean;
}

export enum QuestionType {
  shortAnswer = "SHORT_ANSWER",
  longAnswer = "LONG_ANSWER",
  radio = "RADIO",
  checkbox = "CHECKBOX",
  select = "SELECT",
  title = "TITLE",
}