import { useEffect, useState } from "react";
import { ISurveyQuestions } from "../../interfaces/questions/iSurvey";
import { ISurveyAnswers } from "../../interfaces/answers/iSurvey";
import CompositorService from "../../services/questionService";
import ScrollPages from "./components/form/ScrollPges/ScrollPages1";
import { Box } from "@mui/material";
import { ISection } from "../../interfaces/answers/iSection";
import ISurveyAnswersActions from "../../utils/InterfacesActions/ISurveyAnswersActions";
import NoCommentsFoundPage from "../NoCommentsFoundPage/NoCommentsFoundPage";

function UnitPage({ id }: { id: string }) {
  const [selectedAnswers, setSelectedAnswers] = useState<ISurveyAnswers[]>([]);
  const [answerAndQuestions, setAnswerAndQuestions] =
    useState<ISurveyQuestions>();

  const [surveyFound, setSurveyFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const temp = await CompositorService.getSurveyQuestionsAndUsersAnswers(
          id
        );
        setAnswerAndQuestions(temp[0] as ISurveyQuestions);
        setSelectedAnswers(temp[1] as ISurveyAnswers[]);
        setSurveyFound(true);
      } catch (err) {
        setSurveyFound(false);
      }
    };

    fetchData();
  }, [id]);

  const getRowDataFromAnswer = (
    headers: string[],
    answer: ISurveyAnswers
  ): string[] => {
    const csvDataRow: string[] = new Array(headers.length).fill("");

    answer.content.forEach((section: ISection) => {
      csvDataRow[headers.indexOf(section.questionName)] =
        section.answers.join(", ");
    });

    return csvDataRow;
  };

  const returnCsvData = (): Array<string[]> => {
    const headers =
      ISurveyAnswersActions.getArrayOfQuestionNamesWithoutSimilarities(
        selectedAnswers 
      );

    const data: Array<string[]> = [];
    selectedAnswers.forEach((answer: ISurveyAnswers) => {
      data.push(getRowDataFromAnswer(headers, answer));
    });

    const csvData: Array<string[]> = [[...headers], ...data];

    return csvData;
  };
  
  return (
    <div>
      {surveyFound ? (
        <div>
          {answerAndQuestions &&
          (answerAndQuestions as ISurveyQuestions).content.length > 0 ? (
            <div>
              <ScrollPages
              questionsAndAnswers={selectedAnswers}
              survey={answerAndQuestions as ISurveyQuestions}
              csvData={returnCsvData()}
            />
            </div>
          ) : null}
        </div>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <NoCommentsFoundPage />
        </Box>
      )}
    </div>
  );
}

export default UnitPage;
