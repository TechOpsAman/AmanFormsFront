import "./CommentsQuesionPage.scss";
import { IQuestion } from "../../interfaces/iQuestion";
import { chosenQuestionContext } from "../../contexts/chosenQuestionContext";
import { useState } from "react";
import QuestionChoosingSection from "./components/QuestionChoosingSection/QuestionChoosingSection";
import QuestionsAndPossibleAnswersSection from "./components/QuestionsAndPossibleAnswersSection/QuestionsAndPossibleAnswersSection";

function CommentsQuestionPage({ questionList }: { questionList: IQuestion[] }) {
  const [chosenQuestion, setChosenQuestion] = useState<IQuestion>(
    questionList[questionList.length - 1]
  );

  return (
    <chosenQuestionContext.Provider value={chosenQuestion}>
      <div className="comments-question-page-main">
        <QuestionChoosingSection
          questionList={questionList}
        ></QuestionChoosingSection>
        <QuestionsAndPossibleAnswersSection
          questionList={questionList}
        ></QuestionsAndPossibleAnswersSection>
      </div>
    </chosenQuestionContext.Provider>
  );
}

export default CommentsQuestionPage;
