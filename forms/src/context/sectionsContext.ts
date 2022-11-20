import { iQuestion, QuestionType } from "../interfaces/iQuestion";
import { createContext } from "react";

const mock: iQuestion = {
    id: "",
    questionName: "מה קורה?",
    questionType: QuestionType.radio,
    answers: [
      { answer: "בסדר" },
      { answer: "" },
      { answer: "על הפנים" },
      { answer: "שורד." },
    ],
  };


export const sectionsContext = createContext([mock]);