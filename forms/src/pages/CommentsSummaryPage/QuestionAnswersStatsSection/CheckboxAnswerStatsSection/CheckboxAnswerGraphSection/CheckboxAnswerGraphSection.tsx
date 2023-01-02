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
    )?.answers?.map((answer) => answer.answer);

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

  // const getPrecentagesFromAllAnswers = () => {
  //   const data = getData();
  //   let sum = 0;
  //   const answersAndPrecentage: Map<string, number> = new Map<string, number>();

  //   data.forEach((value) => {
  //     sum += value;
  //   });

  //   const answers = Array.from(data.keys());
  //   const values = Array.from(data.values());

  //   answers.forEach((answer: string, index: number) => {
  //     answersAndPrecentage.set(
  //       answer,
  //       decimalToPercentage(values[index] / sum)
  //     );
  //   });

  //   return answersAndPrecentage;
  // };

  // const decimalToPercentage = (decimal: number) => {
  //   return decimal * 100;
  // };

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
            // {
            //   name: "precent from all answers",
            //   data: Array.from(getPrecentagesFromAllAnswers().values()),
            // },
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
              categories: getPossibleAnswers(),
              tickAmount: Math.max(...Array.from(getData().values())),
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}
export default CheckboxAnswerGraphSection;
