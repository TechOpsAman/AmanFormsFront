import { iAnswer } from "./iAnswer";

export interface iQuestion {
  id?: string;
  questionName: string;
  questionType: QuestionType;
  answers?: Array<iAnswer>;
  selectedAnswers?: Array<iAnswer>;
}
export enum QuestionType {
  shortAnswer = "shortAnswer",
  longAnswer = "longAnswer",
  radio = "radio",
  checkbox = "checkbox",
  select = "select",
  title = "title",
}
