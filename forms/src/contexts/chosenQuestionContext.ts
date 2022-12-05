import { createContext } from "react";
import { IQuestion, QuestionType } from "../interfaces/iQuestion";

export let chosenQuestionContext = createContext<IQuestion>({
  id: "654321654321654321654321",
  questionName: "boolean",
  questionType: QuestionType.checkbox,
  answers: [
    { answer: "xaddadas" },
    { answer: "xaddadas" },
    { answer: "xaddadas" },
  ],
  selectedAnswers: [],
  mustAnswer: false,
}); // TODO: change to the last question in the survry (from the DB)
