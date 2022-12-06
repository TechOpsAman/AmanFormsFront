import "./QuestionChoosingSection.scss";
import { Card } from "@material-ui/core";
import { IQuestion } from "../../../../interfaces/questions/iQuestion";
import QuestionChoosingByIndexSection from "./QuestionChoosingByIndexSection/QuestionChoosingByIndexSection";
import QuestionChoosingByNameSection from "./QuestionChoosingByNameSection/QuestionChoosingByNameSection";

function QuestionChoosingSection({
  questionList,
  chosenQuestion,
  setChosenQuestion,
}: {
  questionList: IQuestion[];
  chosenQuestion: IQuestion;
  setChosenQuestion: React.Dispatch<React.SetStateAction<IQuestion>>;
}) {
  return (
    <Card className="question-choosing-section-main">
      <QuestionChoosingByIndexSection
        questionList={questionList}
        chosenQuestion={chosenQuestion}
        setChosenQuestion={setChosenQuestion}
      ></QuestionChoosingByIndexSection>
      <QuestionChoosingByNameSection
        questionList={questionList}
        chosenQuestion={chosenQuestion}
        setChosenQuestion={setChosenQuestion}
      ></QuestionChoosingByNameSection>
    </Card>
  );
}

export default QuestionChoosingSection;
