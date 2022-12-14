import { Card } from "@material-ui/core";
import { ISurveyAnswers } from "../../../../interfaces/answers/iSurvey";
import ISectionActions from "../../../../utils/ISectionActions";
import ISurveyAnswersActions from "../../../../utils/ISurveyAnswersActions";
import CheckboxAnswerGraphSection from "../CheckboxAnswerStatsSection/CheckboxAnswerGraphSection/CheckboxAnswerGraphSection";
import CopyButtonGraphComponent from "../CopyButtonGraphComponent";
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
      {didUsersAnswerSameAnswer() ? (
        <Card className="short-answer-stats-section-main">
          <div className="short-answer-stats-section-upper-section">
            <CopyButtonGraphComponent graphToCopyRef={graphToCopy} />
            <span className="question-name">{questionName}</span>
          </div>
          {getNumberOfCommentsText()}
          <CheckboxAnswerGraphSection />
        </Card>
      ) : (
        <div></div> // TODO: change to the other shape of info (not graph)!!!
      )}
    </div>
  );
}

export default ShortAnswerStatsSection;
