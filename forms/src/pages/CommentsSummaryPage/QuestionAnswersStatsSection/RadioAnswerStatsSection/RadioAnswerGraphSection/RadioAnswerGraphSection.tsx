import React from "react";
import Chart from "react-apexcharts";
import { ISurveyAnswers } from "../../../../../interfaces/answers/iSurvey";
import ISurveyAnswersActions from "../../../../../utils/InterfacesActions/ISurveyAnswersActions";

function RadioAnswerGraphSection({
  answerList,
  questionName,
  graphToCopy,
}: {
  answerList: ISurveyAnswers[];
  questionName: string;
  graphToCopy: React.RefObject<any>;
}) {
  const getPossibleAnswers = () => {
    const arrayOfSectionsAccordingToQuestionName =
      ISurveyAnswersActions.getArrayOfSectionsAccordingToQuestionNameWithoutSimilarities(
        answerList,
        questionName
      );

    const answers: string[] = [];

    for (const section of arrayOfSectionsAccordingToQuestionName) {
      for (const answer of section.answers) {
        if (!answers.includes(answer)) {
          answers.push(answer);
        }
      }
    }

    return answers;
  };

  const getData = () => {
    const answers = getPossibleAnswers();
    const sections =
      ISurveyAnswersActions.getArrayOfSectionsAccordingToQuestionName(
        answerList,
        questionName
      );
    const data = new Map<string, number>();

    for (const answer of answers) {
      data.set(answer, 0);
    }

    for (const section of sections) {
      for (const answer of section.answers) {
        if (data.has(answer)) {
          data.set(answer, data.get(answer)! + 1);
        }
      }
    }

    return data;
  };

  return (
    <React.Fragment>
      <div className="container-fluid mb-5" ref={graphToCopy}>
        <br />
        <Chart
          type="pie"
          width={800}
          height={350}
          series={Array.from(getData().values())}
          options={{
            labels: getPossibleAnswers(),
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}
export default RadioAnswerGraphSection;
