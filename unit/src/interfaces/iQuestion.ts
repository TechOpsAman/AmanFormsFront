export interface Question {
  id: string;
  questionId: string;
  questionName: string,
  questionType: string,
  required: boolean;
  createdAt: string;
  answers?: Array<String>;
}

export enum QuestionType {
  shortAnswer = 'shortAnswer',
  longAnswer = 'longAnswer',
  radio = 'radio',
  checkbox = 'checkbox',
  select = 'select',
  title = 'title',
}