import { Card } from "@material-ui/core";
import { useState } from "react";
import { IQuestion } from "../../../../interfaces/iQuestion";
import { QuestionType } from "../../../../interfaces/iQuestion";

function QuestionsAndPossibleAnswersSection({
  questionList,
}: {
  questionList: IQuestion[];
}) {
  const [chosenQuestion, setChosenQuestion] = useState<IQuestion>(
    questionList[questionList.length - 1]
  );

  const returnFullSection = (chosenQuestion: IQuestion): JSX.Element => {
    switch (chosenQuestion.questionType) {
      case QuestionType.radio:
      case QuestionType.checkbox:
      case QuestionType.select:
        return (
          <div>
            <Card>
              <span className="question-name">
                {chosenQuestion.questionName}
              </span>
              {getPossibleAnswersList(chosenQuestion)}
            </Card>
          </div>
        );

      case QuestionType.shortAnswer:
      case QuestionType.longAnswer:
      case QuestionType.title:
        return (
          <div>
            <Card>
              <span className="question-name">
                {chosenQuestion.questionName}
              </span>
            </Card>
          </div>
        );
    }
  };

  const getPossibleAnswersList = (
    chosenQuestion: IQuestion
  ): JSX.Element | undefined => {
    switch (chosenQuestion.questionType) {
      case QuestionType.checkbox:
        return <div>hi</div>; // TODO: change to actuall elements
      case QuestionType.radio:
        return <div>hi</div>; // TODO: change to actuall elements
      case QuestionType.select:
        return <div>hi</div>; // TODO: change to actuall elements
    }
  };

  return <div>{returnFullSection(chosenQuestion)}</div>;
}

export default QuestionsAndPossibleAnswersSection;
