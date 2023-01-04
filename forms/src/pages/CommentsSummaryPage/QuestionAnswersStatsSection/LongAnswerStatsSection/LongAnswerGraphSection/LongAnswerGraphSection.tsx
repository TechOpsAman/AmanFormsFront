import { Card } from "@material-ui/core";
import { ISurveyAnswers } from "../../../../../interfaces/answers/iSurvey";
import { IQuestion } from "../../../../../interfaces/questions/iQuestion";
import ISurveyAnswersActions from "../../../../../utils/InterfacesActions/ISurveyAnswersActions";
import { ISection } from "../../../../../interfaces/answers/iSection";
import "./LongAnswerGraphSection.scss";

function LongAnswerGraphSection({
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

  return (
    <div className="long-answer-chart-section-main">
      <>
        {getPossibleAnswers()
          ? ISurveyAnswersActions.getArrayOfSectionsAccordingToQuestionName(
              answerList,
              questionName
            ).map((section: ISection, sectionIndex: number) => {
              return (
                <Card
                  dir="rtl"
                  className="answer-card-long"
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
export default LongAnswerGraphSection;
