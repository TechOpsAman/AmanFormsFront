import { Card } from "@material-ui/core";
import { createRef } from "react";
import { ISurveyAnswers } from "../../../../interfaces/answers/iSurvey";
import { IQuestion } from "../../../../interfaces/questions/iQuestion";
import CopyButtonGraphComponent from "../CopyButtonGraphComponent";
import CheckboxAnswerGraphSection from "./CheckboxAnswerGraphSection/CheckboxAnswerGraphSection";
import "./CheckboxAnswerStatsSection.scss";

function CheckboxAnswerStatsSection({
  graphToCopy,
  questionList,
  answerList,
}: {
  graphToCopy: React.RefObject<unknown>;
  questionList: IQuestion[];
  answerList: ISurveyAnswers[];
}) {
  const getNumberOfCommentsText = (): JSX.Element => {
    return (
      <div className="number-of-comments-text">
        {answerList.length === 1 ? (
          <span dir="rtl">תגובה אחת</span>
        ) : (
          <span dir="rtl">{answerList.length} תגובות</span>
        )}
      </div>
    );
  };

  return (
    <Card className="checkbox-answer-stats-section-main">
      {questionList.map((qustion: IQuestion, questionIndex: number) => {
        return (
          <>
            <div className="checkbox-answer-stats-section-upper-section">
              <CopyButtonGraphComponent graphToCopyRef={graphToCopy} />
              <span className="question-name">{qustion.questionName}</span>
            </div>
            {getNumberOfCommentsText()}
            <CheckboxAnswerGraphSection />
          </>
        );
      })}
    </Card>
  );
}

export default CheckboxAnswerStatsSection;
