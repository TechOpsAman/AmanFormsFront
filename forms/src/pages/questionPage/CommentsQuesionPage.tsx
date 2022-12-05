import "./CommentsQuesionPage.scss";
import { IQuestion } from "../../interfaces/iQuestion";
import QuestionChoosingSection from "./components/QuestionChoosingSection/QuestionChoosingSection";
import QuestionsAndPossibleAnswersSection from "./components/QuestionsAndPossibleAnswersSection/QuestionsAndPossibleAnswersSection";

function CommentsQuestionPage({ questionList }: { questionList: IQuestion[] }) {
  return (
    <div className="comments-question-page-main">
      <QuestionChoosingSection
        questionList={questionList}
      ></QuestionChoosingSection>
      <QuestionsAndPossibleAnswersSection
        questionList={questionList}
      ></QuestionsAndPossibleAnswersSection>
    </div>
  );
}

export default CommentsQuestionPage;
