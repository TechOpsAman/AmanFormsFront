import { createRef, useEffect, useState } from "react";
import { ISurveyAnswers } from "../../interfaces/answers/iSurvey";
import { IQuestion, QuestionType } from "../../interfaces/questions/iQuestion";
import { ISurveyQuestions } from "../../interfaces/questions/iSurvey";
import CompositorService from "../../services/compositor.service";
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

  const surveyId: string = "6395e7bc9821e79971898be3";

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

  const returnMatchingComponentToQuestion = (question: IQuestion) => {
    switch (question.questionType) {
      case QuestionType.checkbox:
        return (
          <CheckboxAnswerStatsSection
            graphToCopy={graphToCopy}
            questionList={questionList}
            answerList={answerList}
          />
        );

      case QuestionType.radio:
        return (
          <RadioAnswerStatsSection
            graphToCopy={graphToCopy}
            questionList={questionList}
            answerList={answerList}
          />
        );

      case QuestionType.select:
        return (
          <SelectAnswerStatsSection
            graphToCopy={graphToCopy}
            questionList={questionList}
            answerList={answerList}
          />
        );
      case QuestionType.shortAnswer:
        return (
          <ShortAnswerStatsSection
            graphToCopy={graphToCopy}
            questionList={questionList}
            answerList={answerList}
          />
        );
      case QuestionType.longAnswer:
        return <LongAnswerStatsSection />;
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
