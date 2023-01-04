import { createRef, useEffect, useState } from "react";
import { ISurveyAnswers } from "../../interfaces/answers/iSurvey";
import { IQuestion, QuestionType } from "../../interfaces/questions/iQuestion";
import { ISurveyQuestions } from "../../interfaces/questions/iSurvey";
import CompositorService from "../../services/compositor.service";
import ISurveyAnswersActions from "../../utils/InterfacesActions/ISurveyAnswersActions";
import "./CommentsSummaryPage.scss";
import CheckboxAnswerStatsSection from "./QuestionAnswersStatsSection/CheckboxAnswerStatsSection/CheckboxAnswerStatsSection";
import LongAnswerStatsSection from "./QuestionAnswersStatsSection/LongAnswerStatsSection/LongAnswerStatsSection";
import RadioAnswerStatsSection from "./QuestionAnswersStatsSection/RadioAnswerStatsSection/RadioAnswerStatsSection";
import SelectAnswerStatsSection from "./QuestionAnswersStatsSection/SelectAnswerStatsSection/SelectAnswerStatsSection";
import ShortAnswerStatsSection from "./QuestionAnswersStatsSection/ShortAnswerStatsSection/ShortAnswerStatsSection";

function CommentsSummaryPage() {
  const [questionList, setQuestionList] = useState<IQuestion[]>([]);
  const [answerList, setAnswerList] = useState<ISurveyAnswers[]>([]);
  const graphToCopy = createRef();

  const surveyId: string = "63b41b59f7ddfee84ad409ca";

  const getNumberOfCommentsText = (questionName: string): JSX.Element => {
    return (
      <div className="number-of-comments-text">
        {ISurveyAnswersActions.getNumberOfCommentsAccordingToQuestion(
          answerList,
          questionName
        ) === 1 ? (
          <span dir="rtl">תגובה אחת</span>
        ) : (
          <span dir="rtl">
            {ISurveyAnswersActions.getNumberOfCommentsAccordingToQuestion(
              answerList,
              questionName
            )}{" "}
            תגובות
          </span>
        )}
      </div>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const temp = await CompositorService.getSurveyQuestionsAndUsersAnswers(
        surveyId
      );
      setQuestionList((temp[0] as ISurveyQuestions).content);
      setAnswerList(temp[1] as ISurveyAnswers[]);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const returnMatchingComponentToQuestion = (
    question: IQuestion
  ): JSX.Element => {
    switch (question.questionType) {
      case QuestionType.checkbox:
        return (
          <CheckboxAnswerStatsSection
            questionName={question.questionName}
            graphToCopy={graphToCopy}
            answerList={answerList}
            getNumberOfCommentsText={getNumberOfCommentsText(
              question.questionName
            )}
            questionList={questionList}
          />
        );

      case QuestionType.radio:
        return (
          <RadioAnswerStatsSection
            questionName={question.questionName}
            graphToCopy={graphToCopy}
            answerList={answerList}
            getNumberOfCommentsText={getNumberOfCommentsText(
              question.questionName
            )}
            questionList={questionList}
          />
        );

      case QuestionType.select:
        return (
          <SelectAnswerStatsSection
            questionName={question.questionName}
            graphToCopy={graphToCopy}
            answerList={answerList}
            getNumberOfCommentsText={getNumberOfCommentsText(
              question.questionName
            )}
            questionList={questionList}
          />
        );
      case QuestionType.shortAnswer:
        return (
          <ShortAnswerStatsSection
            questionName={question.questionName}
            graphToCopy={graphToCopy}
            answerList={answerList}
            getNumberOfCommentsText={getNumberOfCommentsText(
              question.questionName
            )}
            questionList={questionList}
          />
        );
      case QuestionType.longAnswer:
        return (
          <LongAnswerStatsSection
            questionName={question.questionName}
            answerList={answerList}
            getNumberOfCommentsText={getNumberOfCommentsText(
              question.questionName
            )}
            questionList={questionList}
          />
        );
      default:
        return <div></div>;
    }
  };

  return (
    <div className="comments-summary-page-main">
      {questionList.length > 0
        ? questionList.map((question: IQuestion, questionIndex: number) => {
            return (
              <div key={questionIndex}>
                {returnMatchingComponentToQuestion(question)}
              </div>
            );
          })
        : null}
    </div>
  );
}

export default CommentsSummaryPage;
