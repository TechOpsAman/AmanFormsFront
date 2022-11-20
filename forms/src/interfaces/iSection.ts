export interface iSection {
    questionId: string;
    answers: Array<String>;
}

export interface Question {
    id?: string;
    questionName: string;
    questionType: QuestionType;
    answers?: Array<Answer>;
  }
  export interface Answer {
    id?: string;
    answer: string;
  }
  
  export enum QuestionType {
    shortAnswer = 'shortAnswer',
    longAnswer = 'longAnswer',
    radio = 'radio',
    checkbox = 'checkbox',
    select = 'select',
    title = 'title',
  }