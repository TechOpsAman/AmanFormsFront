import { useEffect, useState } from "react";
import { ISurveyQuestions } from "../../interfaces/questions/iSurvey";
import { ISurveyAnswers } from "../../interfaces/answers/iSurvey";
import CompositorService from "../../services/questionService";
import ScrollPages from "./components/form/ScrollPges/ScrollPages1";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

function UnitPage() {
  const location = useLocation();
  const [selectedAnswers, setSelectedAnswers] = useState<ISurveyAnswers[]>([]);
  const [answerAndQuestions, setAnswerAndQuestions] =
    useState<ISurveyQuestions>();

  const surveyId: string = location.pathname.split("/")[2];
  const [surveyFound, setSurveyFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const temp = await CompositorService.getSurveyQuestionsAndUsersAnswers(
          surveyId
        );
        setAnswerAndQuestions(temp[0] as ISurveyQuestions);
        setSelectedAnswers(temp[1] as ISurveyAnswers[]);
        setSurveyFound(true);
      } catch (err) {
        setSurveyFound(false);
      }
    };

    fetchData();
  }, [surveyId]);

  return (
    <div>
      {surveyFound ? (
        <div>
          {answerAndQuestions &&
          (answerAndQuestions as ISurveyQuestions).content.length > 0 ? (
            <ScrollPages
              questionsAndAnswers={selectedAnswers}
              survey={answerAndQuestions as ISurveyQuestions}
            />
          ) : null}{" "}
        </div>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <span style={{ fontSize: "2rem", marginTop: "1rem" }}>
            הסקר המבוקש לא נמצא
          </span>
        </Box>
      )}
    </div>
  );
}

export default UnitPage;
