import "./QuestionsAndPossibleAnswersSection.scss";
import { Card } from "@material-ui/core";
import { useState } from "react";
import {
  IQuestion,
  QuestionType,
} from "../../../../interfaces/questions/iQuestion";
import { IAnswer } from "../../../../interfaces/questions/iAnswer";
import CheckboxAnswer from "./CheckboxAnswer/CheckboxAnswer";
import RadioAnswer from "./RadioAnswer/RadioAnswer";
import DisplayOptions from "./DisplayOptions/DisplayOptions";

function QuestionsAndPossibleAnswersSection({
  questionList,
  chosenQuestion,
  setChosenQuestion,
}: {
  questionList: IQuestion[];
  chosenQuestion: IQuestion;
  setChosenQuestion: React.Dispatch<React.SetStateAction<IQuestion>>;
}) {
  const [areAnswersDisplayed, setAreAnswersDisplayed] =
    useState<boolean>(false);

  const returnFullSection = (chosenQuestion: IQuestion): JSX.Element => {
    switch (chosenQuestion.questionType) {
      case QuestionType.radio:
      case QuestionType.checkbox:
      case QuestionType.select:
        return (
          <Card className="questions-and-possible-answers-container">
            <div className="display-button-and-title">
              <DisplayOptions
                areAnswersDisplayed={areAnswersDisplayed}
                setAreAnswersDisplayed={setAreAnswersDisplayed}
                chosenQuestion={chosenQuestion}
              ></DisplayOptions>
              {areAnswersDisplayed ? (
                <div>
                  <ul>
                    {chosenQuestion.answers?.map(
                      (answer: IAnswer, index: number) => (
                        <li key={index}>{getPossibleAnswersList(answer)}</li>
                      )
                    )}
                  </ul>
                </div>
              ) : null}
            </div>
          </Card>
        );

      case QuestionType.shortAnswer:
      case QuestionType.longAnswer:
      case QuestionType.title:
        return (
          <Card className="questions-and-possible-answers-container">
            <div className="only-title">
              <span className="question-name">
                {chosenQuestion.questionName}
              </span>
            </div>
          </Card>
        );
    }
  };

  const getPossibleAnswersList = (answer: IAnswer): JSX.Element | null => {
    switch (chosenQuestion.questionType) {
      case QuestionType.checkbox:
        return <CheckboxAnswer checkboxAnswer={answer}></CheckboxAnswer>;

      case QuestionType.radio:
        return <RadioAnswer radioAnswer={answer}></RadioAnswer>;
      case QuestionType.select:
        return (
          <div>
            {answer.answer} .{chosenQuestion.answers?.indexOf(answer)}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="questions-and-possible-answers-section-main">
      {returnFullSection(chosenQuestion)}
    </div>
  );
}

export default QuestionsAndPossibleAnswersSection;