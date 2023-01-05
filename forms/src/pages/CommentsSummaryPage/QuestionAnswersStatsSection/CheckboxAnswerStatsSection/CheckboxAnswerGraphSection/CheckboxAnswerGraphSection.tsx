import React from "react";
import Chart from "react-apexcharts";
import { ISurveyAnswers } from "../../../../../interfaces/answers/iSurvey";
import { IQuestion } from "../../../../../interfaces/questions/iQuestion";
import ISurveyAnswersActions from "../../../../../utils/InterfacesActions/ISurveyAnswersActions";
import IQuestionActions from "../../../../../utils/InterfacesActions/IQuestionActions";
import ValuesGenerator from "../../../../../utils/GraphActions/ValuesGenerator";

function CheckboxAnswerGraphSection({
  answerList,
  questionName,
  questionList,
  graphToCopy,
}: {
  answerList: ISurveyAnswers[];
  questionName: string;
  questionList: IQuestion[];
  graphToCopy: React.RefObject<any>;
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

  return (
    <React.Fragment>
      <div className="container-fluid mb-5" ref={graphToCopy}>
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
                horizontal: true,
              },
            },
            dataLabels: {
              enabled: false,
            },
            xaxis: {
              categories: getPossibleAnswers(),
              tickAmount: ValuesGenerator.generateTiksAmount(
                Array.from(getData().values())
              ),
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}
export default CheckboxAnswerGraphSection;
