import { Box, FormControlLabel, Switch, Typography } from "@mui/material";
import { CSVLink } from "react-csv";
import AnswerService from "../../services/answerService";
import { useLocation } from "react-router-dom";
import { ISurveyAnswers } from "../../interfaces/answers/iSurvey";
import { useEffect, useState } from "react";
import UnitPage from "../unitPage/unitPage";
import { getById, updateIsOpen } from "../../services/questionsService";
import CommentsQuesionPage from "../CommentsQuestionPage/CommentsQuesionPage";
import CommentsSummaryPage from "../CommentsSummaryPage/CommentsSummaryPage";
import CommentButton from "./CommentButton/CommentButton";
import { ISurveyQuestions } from "../../interfaces/questions/iSurvey";
import CsvDownloadButton from "./CsvDownloadButton/CsvDownloadButton";
import "./resultPage.scss";
import { ISection } from "../../interfaces/answers/iSection";
import ISurveyAnswersActions from "../../utils/InterfacesActions/ISurveyAnswersActions";

function ResultPage() {
  const location = useLocation();
  const surveyId: string = location.pathname.split("/")[2];
  const [answerAndQuestions, setAnswerAndQuestions] = useState<
    ISurveyAnswers[]
  >([]);

  const [isUnitClicked, setIsUnitClicked] = useState(true);
  const [isQuestionClicked, setisQuestionClicked] = useState(false);
  const [isSummeryClicked, setisSummeryClicked] = useState(false);
  const [open, setOpen] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const temp = await AnswerService.getAnswerSurvey(surveyId);
      setAnswerAndQuestions(temp);
    };

    const fatchOpen = async () => {
      if (firstLoad) {
        const { isOpen } = (await getById(
          surveyId
        )) as unknown as ISurveyQuestions;
        console.log(isOpen);
        setOpen(isOpen);
        setFirstLoad(false);
      }
    };

    fatchOpen();
    fetchData();
  }, [surveyId]);

  const surveyCommentLength = answerAndQuestions?.length;

  const handleUnitClicked = (value: string) => {
    switch (value) {
      case "unit":
        setIsUnitClicked(true);
        setisQuestionClicked(false);
        setisSummeryClicked(false);
        break;
      case "question":
        setisQuestionClicked(true);
        setIsUnitClicked(false);
        setisSummeryClicked(false);
        break;
      case "summary":
        setisSummeryClicked(true);
        setisQuestionClicked(false);
        setIsUnitClicked(false);
        break;

      default:
        break;
    }
  };

  const handleCommentsSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateIsOpen(surveyId, event.target.checked);
    setOpen(event.target.checked);
  };

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
    // TODO : finish the function
    const headers =
      ISurveyAnswersActions.getArrayOfQuestionNamesWithoutSimilarities(
        answerAndQuestions
      );

    const data: Array<string[]> = [];
    answerAndQuestions.forEach((answer: ISurveyAnswers) => {
      data.push(getRowDataFromAnswer(headers, answer));
    });

    const csvData: Array<string[]> = [[...headers], ...data];

    return csvData;
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box className="survey-result-page_wraps_box">
        <Box className="survey-result-page_main_box">
          <Box className="survey-result-page_upper_part_main_box">
            <FormControlLabel
              className="survey-result-page-form-control-label"
              control={
                <Switch defaultChecked onChange={handleCommentsSwitch} />
              }
              label="מקבל תגובות"
              sx={{ minWidth: "6rem", ml: 2 }}
            />

            <CSVLink data={returnCsvData()} filename={"my-file.csv"}>
              <CsvDownloadButton />
            </CSVLink>

            <Typography
              dir="rtl"
              variant="h4"
              className="survey-result-page-typography"
            >
              {surveyCommentLength} תגובות
            </Typography>
          </Box>
          <Box className="survey-result-page_buttons">
            <CommentButton
              handleUnitClicked={handleUnitClicked}
              commentTypeToHandle={"summary"}
              commentTypeName={"סיכום"}
              isClicked={isSummeryClicked}
            />
            <CommentButton
              handleUnitClicked={handleUnitClicked}
              commentTypeToHandle={"question"}
              commentTypeName={"שאלה"}
              isClicked={isQuestionClicked}
            />
            <CommentButton
              handleUnitClicked={handleUnitClicked}
              commentTypeToHandle={"unit"}
              commentTypeName={"יחידה"}
              isClicked={isUnitClicked}
            />
          </Box>
        </Box>
        <Box>
          {isUnitClicked && <UnitPage id={surveyId} />}
          {isQuestionClicked && <CommentsQuesionPage id={surveyId} />}
          {isSummeryClicked && <CommentsSummaryPage id={surveyId} />}
        </Box>
      </Box>
    </Box>
  );
}

export default ResultPage;
