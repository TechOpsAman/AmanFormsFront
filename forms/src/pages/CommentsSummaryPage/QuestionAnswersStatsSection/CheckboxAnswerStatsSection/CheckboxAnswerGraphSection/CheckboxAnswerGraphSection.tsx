import React from "react";
import Chart from "react-apexcharts";
import { ISurveyAnswers } from "../../../../../interfaces/answers/iSurvey";
import { IQuestion } from "../../../../../interfaces/questions/iQuestion";
import ISurveyAnswersActions from "../../../../../utils/ISurveyAnswersActions";
import IQuestionActions from "../../../../../utils/IQuestionActions";

function CheckboxAnswerGraphSection({
  answerList,
  questionName,
  questionList,
}: {
  answerList: ISurveyAnswers[];
  questionName: string;
  questionList: IQuestion[];
}) {
  const getPossibleAnswers = () => {
    const possibleAnswers = IQuestionActions.getQuestionAccordingToName(
      questionName,
      questionList
    )?.answers;

    return possibleAnswers;
  };

  const getData = () => {
    // מחזירה מערך שבכל תא יש שם שאלה ומספר המשתמשים שבחרו בתשובה
    const data = [];

    const arrayOfSectionsAccordingToQuestionName =
      ISurveyAnswersActions.getArrayOfSectionsAccordingToQuestionName(
        answerList,
        questionName
      );
    arrayOfSectionsAccordingToQuestionName.forEach((section) => {});
  };

  return (
    <React.Fragment>
      <div className="container-fluid mb-5">
        <br />
        <Chart
          type="bar"
          width={800}
          height={350}
          series={[
            {
              name: "answered",
              data: [6578, 6787, 3245, 9876, 2324, 5123, 2435], // לשנות לתשובות של כל אחד מהמשתמשים
            },
          ]}
          options={{
            plotOptions: {
              bar: {
                borderRadius: 4,
                horizontal: true,
              },
            },
            dataLabels: {
              enabled: false,
            },
            xaxis: {
              categories: [
                "South Korea",
                "Canada",
                "United Kingdom",
                "Netherlands",
                "Italy",
                "France",
                "Japan",
              ], // לשנות לתשובות אפשריות לשאלה
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}
export default CheckboxAnswerGraphSection;
