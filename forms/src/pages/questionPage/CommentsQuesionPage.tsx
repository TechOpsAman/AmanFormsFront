import "./CommentsQuesionPage.scss";
import { IQuestion } from "../../interfaces/questions/iQuestion";
import { useState } from "react";
import QuestionChoosingSection from "./components/QuestionChoosingSection/QuestionChoosingSection";
import QuestionsAndPossibleAnswersSection from "./components/QuestionsAndPossibleAnswersSection/QuestionsAndPossibleAnswersSection";

function CommentsQuestionPage({ questionList }: { questionList: IQuestion[] }) {
  const [chosenQuestion, setChosenQuestion] = useState<IQuestion>(
    questionList[questionList.length - 1]
  );

  return (
    <div className="comments-question-page-main">
      <QuestionChoosingSection
        questionList={questionList}
        chosenQuestion={chosenQuestion}
        setChosenQuestion={setChosenQuestion}
      ></QuestionChoosingSection>
      <QuestionsAndPossibleAnswersSection
        chosenQuestion={chosenQuestion}
        setChosenQuestion={setChosenQuestion}
        questionList={questionList}
      ></QuestionsAndPossibleAnswersSection>
    </div>
  );
}

export default CommentsQuestionPage;
