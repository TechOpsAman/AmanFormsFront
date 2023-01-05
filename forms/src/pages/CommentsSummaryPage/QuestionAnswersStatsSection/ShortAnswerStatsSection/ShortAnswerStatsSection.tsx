import * as Lodash from "lodash";
import { Card } from "@material-ui/core";
import { ISurveyAnswers } from "../../../../interfaces/answers/iSurvey";
import { IQuestion } from "../../../../interfaces/questions/iQuestion";
import ISurveyAnswersActions from "../../../../utils/InterfacesActions/ISurveyAnswersActions";
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
  takeScreenshot,
}: {
  questionName: string;
  graphToCopy: React.RefObject<unknown>;
  answerList: ISurveyAnswers[];
  questionList: IQuestion[];
  getNumberOfCommentsText: JSX.Element;
  takeScreenshot: (graphToCopy: React.MutableRefObject<HTMLElement>) => void;
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
  const onClickFunc = (newGraphToCopy: React.RefObject<any>) => {
    // graphToCopy = newGraphToCopy;
    // takeScreenshot();
  };

  return (
    <div>
      <Card className="short-answer-stats-section-main">
        {didUsersAnswerSameAnswer() ? (
          <>
            {console.log(didUsersAnswerSameAnswer())}
            <div className="short-answer-stats-section-upper-section-graph">
              <CopyButtonGraphComponent
                graphToCopyRef={graphToCopy}
                takeScreenshot={takeScreenshot}
                onClickFunc={onClickFunc}
              />
              <span className="question-name">{questionName}</span>
            </div>
            {getNumberOfCommentsText}
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
            <div className="short-answer-stats-section-upper-section-chart">
              <span className="question-name">{questionName}</span>
            </div>
            <div className="comments-number-div">{getNumberOfCommentsText}</div>
            <br />
            <ShortAnswerChartSection
              answerList={answerList}
              questionName={questionName}
              questionList={questionList}
            />
            {/* עמודות אופקיות */}
          </div>
        )}
      </Card>
    </div>
  );
}

export default ShortAnswerStatsSection;
