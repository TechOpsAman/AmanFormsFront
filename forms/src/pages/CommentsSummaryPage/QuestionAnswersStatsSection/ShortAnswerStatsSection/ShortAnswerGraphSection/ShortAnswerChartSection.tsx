import React from "react";
import { Card } from "@material-ui/core";
import { ISurveyAnswers } from "../../../../../interfaces/answers/iSurvey";
import { IQuestion } from "../../../../../interfaces/questions/iQuestion";
import ISurveyAnswersActions from "../../../../../utils/ISurveyAnswersActions";
import IQuestionActions from "../../../../../utils/IQuestionActions";
import { ISection } from "../../../../../interfaces/answers/iSection";
import "./ShortAnswerChartSection.scss";

function ShortAnswerChartSection({
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
    <div className="short-answer-chart-section-main">
      <>
        {getPossibleAnswers()
          ? ISurveyAnswersActions.getArrayOfSectionsAccordingToQuestionName(
              answerList,
              questionName
            ).map((section: ISection, sectionIndex: number) => {
              return (
                <Card
                  dir="rtl"
                  className="answer-card"
                  style={{ backgroundColor: "#ebecf0" }}
                  key={sectionIndex}
                >
                  <span>{section.answers[0]}</span>
                </Card>
              );
            })
          : null}
      </>
    </div>
  );
}
export default ShortAnswerChartSection;
