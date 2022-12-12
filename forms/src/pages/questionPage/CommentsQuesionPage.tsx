import "./CommentsQuesionPage.scss";
import { IQuestion, QuestionType } from "../../interfaces/questions/iQuestion";
import { useEffect, useState } from "react";
import QuestionChoosingSectionUpperPart from "./components/QuestionChoosingSectionUpperPart/QuestionChoosingSectionUpperPart";
import QuestionsAndPossibleAnswersSection from "./components/QuestionsAndPossibleAnswersSection/QuestionsAndPossibleAnswersSection";
import { ISurveyAnswers } from "../../interfaces/answers/iSurvey";
import AnswersChosenSection from "./components/AnswersChosenSection/AnswersChosenSection";
import QuestionChoosingSectionBottom from "./components/QuestionChoosingSectionBottom/QuestionChoosingSectionBottom";
import CompositorService from "../../services/compositor.service";
import { ISurveyQuestions } from "../../interfaces/questions/iSurvey";

function CommentsQuestionPage() {
  const [questionList, setQuestionList] = useState<IQuestion[]>([]);
  const [answerList, setAnswerList] = useState<ISurveyAnswers[]>([]);
  const [chosenQuestion, setChosenQuestion] = useState<IQuestion>({
    questionName: "",
    questionType: QuestionType.checkbox,
    required: true,
    answers: [],
  });

  const surveyId: string = "6395e7bc9821e79971898be3";

  useEffect(() => {
    const fetchData = async () => {
      const temp = await CompositorService.getSurveyQuestionsAndUsersAnswers(
        surveyId
      );
      setQuestionList((temp[0] as ISurveyQuestions).content);
      setAnswerList(temp[1] as ISurveyAnswers[]);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="comments-question-page-main">
      {questionList.length > 0 ? (
        <>
          <QuestionChoosingSectionUpperPart
            questionList={questionList}
            chosenQuestion={questionList[questionList.length - 1]}
            setChosenQuestion={setChosenQuestion}
          />
          <QuestionsAndPossibleAnswersSection
            chosenQuestion={questionList[questionList.length - 1]}
            setChosenQuestion={setChosenQuestion}
            questionList={questionList}
          />
          <AnswersChosenSection
            answerList={answerList}
            chosenQuestion={questionList[questionList.length - 1]}
          />
          <QuestionChoosingSectionBottom
            questionList={questionList}
            chosenQuestion={questionList[questionList.length - 1]}
            setChosenQuestion={setChosenQuestion}
          ></QuestionChoosingSectionBottom>
        </>
      ) : null}
    </div>
  );
}

export default CommentsQuestionPage;
