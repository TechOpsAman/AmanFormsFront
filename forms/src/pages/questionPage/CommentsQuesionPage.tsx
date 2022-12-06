import "./CommentsQuesionPage.scss";
import { IQuestion } from "../../interfaces/questions/iQuestion";
import { useState } from "react";
import QuestionChoosingSection from "./components/QuestionChoosingSection/QuestionChoosingSection";
import QuestionsAndPossibleAnswersSection from "./components/QuestionsAndPossibleAnswersSection/QuestionsAndPossibleAnswersSection";
import { ISurveyAnswers } from "../../interfaces/answers/iSurvey";
import AnswersChosenSection from "./components/AnswersChosenSection/AnswersChosenSection";

function CommentsQuestionPage({
  questionList,
  answerList,
}: {
  questionList: IQuestion[];
  answerList: ISurveyAnswers[]; // TODO: get with axios from compositor with matching id to the url
}) {
  const [chosenQuestion, setChosenQuestion] = useState<IQuestion>(
    questionList[questionList.length - 1]
  );

  return (
    <div className="comments-question-page-main">
      <QuestionChoosingSection
        questionList={questionList}
        chosenQuestion={chosenQuestion}
        setChosenQuestion={setChosenQuestion}
      />
      <QuestionsAndPossibleAnswersSection
        chosenQuestion={chosenQuestion}
        setChosenQuestion={setChosenQuestion}
        questionList={questionList}
      />
      <AnswersChosenSection
        questionList={questionList}
        answerList={answerList}
        chosenQuestion={chosenQuestion}
      />
    </div>
  );
}

export default CommentsQuestionPage;
