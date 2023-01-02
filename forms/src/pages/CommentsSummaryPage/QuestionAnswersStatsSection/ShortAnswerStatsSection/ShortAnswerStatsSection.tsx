import * as Lodash from "lodash";
import { Card } from "@material-ui/core";
import { ISection } from "../../../../interfaces/answers/iSection";
import { ISurveyAnswers } from "../../../../interfaces/answers/iSurvey";
import { IQuestion } from "../../../../interfaces/questions/iQuestion";
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
  questionList,
  getNumberOfCommentsText,
}: {
  questionName: string;
  graphToCopy: React.RefObject<unknown>;
  answerList: ISurveyAnswers[];
  questionList: IQuestion[];
  getNumberOfCommentsText: () => JSX.Element;
}) {
  const didUsersAnswerSameAnswer = () => {
    const answers: Array<string[]> = [];
    let flag = false;

    const sectionsOfQuestion =
      ISurveyAnswersActions.getArrayOfSectionsAccordingToQuestionName(
        answerList,
        questionName
      );

    sectionsOfQuestion.forEach((section) => {
      if (answers.some((answer) => Lodash.isEqual(answer, section.answers)))
        flag = true;
      else answers.push(section.answers);
    });

    return flag;
  };

  return (
    <div>
      <Card className="short-answer-stats-section-main">
        {didUsersAnswerSameAnswer() ? (
          <>
            {console.log(didUsersAnswerSameAnswer())}
            <div className="short-answer-stats-section-upper-section">
              <CopyButtonGraphComponent graphToCopyRef={graphToCopy} />
              <span className="question-name">{questionName}</span>
            </div>
            {getNumberOfCommentsText()}
            <ShortAnswerGraphSection
              answerList={answerList}
              questionName={questionName}
              questionList={questionList}
            />
            {/* גרף עמודות אנכי */}
          </>
        ) : (
          <div>
            <>{console.log(didUsersAnswerSameAnswer())}</>
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
