import "./CommentsQuesionPage.scss";
import { IQuestion } from "../../interfaces/questions/iQuestion";
import { useState } from "react";
import QuestionChoosingSectionUpperPart from "./components/QuestionChoosingSectionUpperPart/QuestionChoosingSectionUpperPart";
import QuestionsAndPossibleAnswersSection from "./components/QuestionsAndPossibleAnswersSection/QuestionsAndPossibleAnswersSection";
import { ISurveyAnswers } from "../../interfaces/answers/iSurvey";
import AnswersChosenSection from "./components/AnswersChosenSection/AnswersChosenSection";
import QuestionChoosingSectionBottom from "./components/QuestionChoosingSectionBottom/QuestionChoosingSectionBottom";

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

  console.log(questionList, answerList, chosenQuestion);

  return (
    <div className="comments-question-page-main">
      <QuestionChoosingSectionUpperPart
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
      <QuestionChoosingSectionBottom
        questionList={questionList}
        chosenQuestion={chosenQuestion}
        setChosenQuestion={setChosenQuestion}
      ></QuestionChoosingSectionBottom>
    </div>
  );
}

export default CommentsQuestionPage;
