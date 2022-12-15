import { useEffect, useState } from "react";
import { ISurveyQuestions } from "../../interfaces/questions/iSurvey";
import { ISurveyAnswers } from "../../interfaces/answers/iSurvey";
import CompositorService from "../../services/questionService";
import ScrollPages from "./components/form/ScrollPges/ScrollPages1";

function UnitPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<ISurveyAnswers[]>([]);
  const [answerAndQuestions, setAnswerAndQuestions] =
    useState<ISurveyQuestions>();

  const surveyId: string = "639ade5d4b4dc61f60cbd42a";

  useEffect(() => {
    const fetchData = async () => {
      const temp = await CompositorService.getSurveyQuestionsAndUsersAnswers(
        surveyId
      );
      console.log(temp);
      setAnswerAndQuestions(temp[0] as ISurveyQuestions);
      setSelectedAnswers(temp[1] as ISurveyAnswers[]);
    };

    fetchData();
  }, []);

  console.log(answerAndQuestions);
  return (
    <div>
      {answerAndQuestions && (answerAndQuestions as ISurveyQuestions).content.length > 0 ? (
        <ScrollPages
          questionsAndAnswers={selectedAnswers}
          survey={answerAndQuestions as ISurveyQuestions}
        />
      ) : null}
    </div>
  );
}

export default UnitPage;
