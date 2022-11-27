import { Answer } from "./Answer";

export interface Question {
  id?: string;
  questionName: string;
  questionType: QuestionType;
  answers?: Array<Answer>;
}

export enum QuestionType {
  shortAnswer = 'shortAnswer',
  longAnswer = 'longAnswer',
  radio = 'radio',
  checkbox = 'checkbox',
  select = 'select',
  title = 'title',
}