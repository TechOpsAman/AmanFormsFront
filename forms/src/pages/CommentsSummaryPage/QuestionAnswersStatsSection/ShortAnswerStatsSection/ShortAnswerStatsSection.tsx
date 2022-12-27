import { Card } from "@material-ui/core";
import { ISurveyAnswers } from "../../../../interfaces/answers/iSurvey";
import ISectionActions from "../../../../utils/ISectionActions";
import ISurveyAnswersActions from "../../../../utils/ISurveyAnswersActions";
import CopyButtonGraphComponent from "../CopyButtonGraphComponent";
import ShortAnswerChartSection from "./ShortAnswerGraphSection/ShortAnswerChartSection";
import ShortAnswerGraphSection from "./ShortAnswerGraphSection/ShortAnswerGraphSection";
import "./ShortAnswerStatsSection.scss";

function ShortAnswerStatsSection({
  questionName,
  graphToCopy,
  answerList,
  getNumberOfCommentsText,
}: {
  questionName: string;
  graphToCopy: React.RefObject<unknown>;
  answerList: ISurveyAnswers[];
  getNumberOfCommentsText: () => JSX.Element;
}) {
  const didUsersAnswerSameAnswer = () => {
    const occurrenceOfAnswerInSectionArray =
      ISectionActions.getOccurrenceOfAnswerInSectionArray(
        ISurveyAnswersActions.getArrayOfSectionsAccordingToQuestionName(
          answerList,
          questionName
        )
      );
    let flag: boolean = false;

    occurrenceOfAnswerInSectionArray.forEach((occurrenceOfAnswerInSection) => {
      if (occurrenceOfAnswerInSection[1] > 1) flag = true;
    });

    return flag;
  };

  return (
    <div>
      <Card className="short-answer-stats-section-main">
        {didUsersAnswerSameAnswer() ? (
          <>
            <div className="short-answer-stats-section-upper-section">
              <CopyButtonGraphComponent graphToCopyRef={graphToCopy} />
              <span className="question-name">{questionName}</span>
            </div>
            {getNumberOfCommentsText()}
            <ShortAnswerGraphSection /> {/* גרף עמודות אנכי */}
          </>
        ) : (
          <div>
            <div className="short-answer-stats-section-upper-section">
              <CopyButtonGraphComponent graphToCopyRef={graphToCopy} />
              <span className="question-name">{questionName}</span>
            </div>
            {getNumberOfCommentsText()}
            <ShortAnswerChartSection /> {/* עמודות אופקיות */}
          </div>
        )}
      </Card>
    </div>
  );
}

export default ShortAnswerStatsSection;
