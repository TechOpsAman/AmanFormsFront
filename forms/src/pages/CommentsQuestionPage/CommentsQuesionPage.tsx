import "./CommentsQuesionPage.scss";
import { IQuestion, QuestionType } from "../../interfaces/questions/iQuestion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import QuestionChoosingSectionUpperPart from "./components/QuestionChoosingSectionUpperPart/QuestionChoosingSectionUpperPart";
import QuestionsAndPossibleAnswersSection from "./components/QuestionsAndPossibleAnswersSection/QuestionsAndPossibleAnswersSection";
import { ISurveyAnswers } from "../../interfaces/answers/iSurvey";
import AnswersChosenSection from "./components/AnswersChosenSection/AnswersChosenSection";
import QuestionChoosingSectionBottom from "./components/QuestionChoosingSectionBottom/QuestionChoosingSectionBottom";
import CompositorService from "../../services/compositor.service";
import { ISurveyQuestions } from "../../interfaces/questions/iSurvey";
import SurveyNotFoundPage from "./SurveyNotFoundPage/SurveyNotFoundPage";

function CommentsQuestionPage() {
  const [loading, setLoading] = useState(true);
  const [surveyFound, setSurveyFound] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [questionList, setQuestionList] = useState<IQuestion[]>([]);
  const [answerList, setAnswerList] = useState<ISurveyAnswers[]>([]);
  const [chosenQuestion, setChosenQuestion] = useState<IQuestion>({
    questionName: "",
    questionType: QuestionType.checkbox,
    required: true,
    answers: [],
  });

  const location = useLocation();
  const surveyId: string = location.pathname.split("/")[2];

  // const surveyId: string = "63b2eb48f7ddfee84ad3f338";

  const getChosenQuestion = () => {
    if (
      chosenQuestion !== questionList[questionList.length - 1] &&
      isFirstLoad
    ) {
      setChosenQuestion(questionList[questionList.length - 1]);
      setIsFirstLoad(false);
    }
  };

  useEffect(() => {
    async function sleep() {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    }

    sleep();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const temp = await CompositorService.getSurveyQuestionsAndUsersAnswers(
          surveyId
        );
        setQuestionList((temp[0] as ISurveyQuestions).content);
        setAnswerList(temp[1] as ISurveyAnswers[]);
      } catch (err) {
        setSurveyFound(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [surveyId]);

  if (loading) {
    return null;
  }

  return (
    <div className="comments-question-page-main">
      {questionList.length > 0 ? (
        <>
          {getChosenQuestion()}
          <>
            <QuestionChoosingSectionUpperPart
              questionList={questionList}
              chosenQuestion={chosenQuestion}
              setChosenQuestion={setChosenQuestion}
            />
            <QuestionsAndPossibleAnswersSection
              chosenQuestion={chosenQuestion}
            />
            <AnswersChosenSection
              answerList={answerList}
              chosenQuestion={chosenQuestion}
            />

            <QuestionChoosingSectionBottom
              questionList={questionList}
              chosenQuestion={chosenQuestion}
              setChosenQuestion={setChosenQuestion}
            ></QuestionChoosingSectionBottom>
          </>
        </>
      ) : (
        <SurveyNotFoundPage />
      )}
    </div>
  );
}

export default CommentsQuestionPage;
