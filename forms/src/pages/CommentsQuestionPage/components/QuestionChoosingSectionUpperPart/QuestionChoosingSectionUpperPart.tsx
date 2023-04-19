import "./QuestionChoosingSectionUpperPart.scss";
import { IQuestion } from "../../../../interfaces/questions/iQuestion";
import QuestionChoosingByIndexSection from "./QuestionChoosingByIndexSection/QuestionChoosingByIndexSection";
import QuestionChoosingByNameSection from "./QuestionChoosingByNameSection/QuestionChoosingByNameSection";
import { Card } from "@mui/material";

function QuestionChoosingSectionUpperPart({
  questionList,
  chosenQuestion,
  setChosenQuestion,
}: {
  questionList: IQuestion[];
  chosenQuestion: IQuestion;
  setChosenQuestion: React.Dispatch<React.SetStateAction<IQuestion>>;
}) {
  return (
    <Card
      className="question-choosing-section-upper-part-main"
      style={{ boxShadow: "1px 2px 4px 1px rgb(131, 131, 131)",
      borderRadius: "30px" }}
    >
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

export default QuestionChoosingSectionUpperPart;
