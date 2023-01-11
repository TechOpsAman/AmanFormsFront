export interface ISection {
    questionName: string;
    questionType: QuestionType;
    required: boolean;
    answers: Array<string>;
  }
  
  export enum QuestionType {
    shortAnswer = "SHORT_ANSWER",
    longAnswer = "LONG_ANSWER",
    radio = "RADIO",
    checkbox = "CHECKBOX",
    select = "SELECT",
    title = "TITLE",
  }
