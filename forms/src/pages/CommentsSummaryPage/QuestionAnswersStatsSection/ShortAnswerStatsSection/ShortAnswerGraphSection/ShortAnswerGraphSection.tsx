import React from "react";
import Chart from "react-apexcharts";
import { ISurveyAnswers } from "../../../../../interfaces/answers/iSurvey";
import { IQuestion } from "../../../../../interfaces/questions/iQuestion";
import ISurveyAnswersActions from "../../../../../utils/ISurveyAnswersActions";

function ShortAnswerGraphSection({
  answerList,
  questionName,
  questionList,
}: {
  answerList: ISurveyAnswers[];
  questionName: string;
  questionList: IQuestion[];
}) {
  const getPossibleAnswers = () => {
    const possibleAnswers: string[] = [];
    const arrayOfSectionsAccordingToQuestionName =
      ISurveyAnswersActions.getArrayOfSectionsAccordingToQuestionName(
        answerList,
        questionName
      );

    arrayOfSectionsAccordingToQuestionName.forEach((answer) => {
      if (!possibleAnswers.includes(answer.answers[0]))
        possibleAnswers.push(answer.answers[0]);
    });

    return possibleAnswers;
  };

  const getData = () => {
    const data: Map<string, number> = new Map<string, number>();

    const arrayOfSectionsAccordingToQuestionName =
      ISurveyAnswersActions.getArrayOfSectionsAccordingToQuestionName(
        answerList,
        questionName
      );

    const possibleAnswers = getPossibleAnswers();
    possibleAnswers?.forEach((answer) => {
      data.set(answer, 0);
    });

    arrayOfSectionsAccordingToQuestionName.forEach((section) => {
      section.answers.forEach((answer) => {
        data.set(answer, data.get(answer)! + 1);
      });
    });

    return data;
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
              data: Array.from(getData().values()),
            },
          ]}
          options={{
            plotOptions: {
              bar: {
                borderRadius: 4,
                horizontal: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            xaxis: {
              categories: getPossibleAnswers(),
              position: "bottom",
            },
            yaxis: {
              tickAmount: Math.max(...Array.from(getData().values())),
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}
export default ShortAnswerGraphSection;
