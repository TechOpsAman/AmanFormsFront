import { Card } from "@material-ui/core";
import { ISurveyAnswers } from "../../../../interfaces/answers/iSurvey";
import { IQuestion } from "../../../../interfaces/questions/iQuestion";
import LongAnswerGraphSection from "./LongAnswerGraphSection/LongAnswerGraphSection";
import "./LongAnswerStatsSection.scss";

function LongAnswerStatsSection({
  questionName,
  answerList,
  questionList,
  getNumberOfCommentsText,
}: {
  questionName: string;
  answerList: ISurveyAnswers[];
  questionList: IQuestion[];
  getNumberOfCommentsText: JSX.Element;
}) {
  return (
    <div>
      <Card className="long-answer-stats-section-main">
        <div>
          <div className="long-answer-stats-section-upper-section-chart">
            <span className="question-name">{questionName}</span>
          </div>
          <div className="comments-number-div">{getNumberOfCommentsText}</div>
          <br />
          <LongAnswerGraphSection
            answerList={answerList}
            questionName={questionName}
            questionList={questionList}
          />
        </div>
      </Card>
    </div>
  );
}

export default LongAnswerStatsSection;
