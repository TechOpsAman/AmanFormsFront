import "./QuestionsAndPossibleAnswersSection.scss";
import { Card } from "@material-ui/core";
import { useState } from "react";
import { IQuestion, QuestionType } from "../../../../interfaces/iQuestion";
import { IAnswer } from "../../../../interfaces/iAnswer";
import CheckboxAnswer from "./CheckboxAnswer/CheckboxAnswer";
import RadioAnswer from "./RadioAnswer/RadioAnswer";
import DisplayOptions from "./DisplayOptions/DisplayOptions";

function QuestionsAndPossibleAnswersSection({
  questionList,
}: {
  questionList: IQuestion[];
}) {
  const [chosenQuestion, setChosenQuestion] = useState<IQuestion>(
    questionList[questionList.length - 1]
  );

  const [areAnswersDisplayed, setAreAnswersDisplayed] =
    useState<boolean>(false);

  // const returnListOfSpecificQuestionType = ( // TODO: ask daniel how to pass props of a component in a function!!!
  //   chosenQuestion: IQuestion,
  //   answerComponent: JSX.Element,
  //   prop: React.ReactNode
  // ): JSX.Element => {
  //   return (
  //     <div>
  //       <ul>
  //         {chosenQuestion.answers?.map((answer: IAnswer) => (
  //           <li>
  //             <answerComponent prop={answer}></answerComponent>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // };

  const returnFullSection = (chosenQuestion: IQuestion): JSX.Element => {
    switch (chosenQuestion.questionType) {
      case QuestionType.radio:
      case QuestionType.checkbox:
      case QuestionType.select:
        return (
          <Card className="questions-and-possible-answers-container">
            <div className="display-button-and-title">
              <DisplayOptions
                questionList={questionList}
                areAnswersDisplayed={areAnswersDisplayed}
                setAreAnswersDisplayed={setAreAnswersDisplayed}
              ></DisplayOptions>
              {areAnswersDisplayed
                ? getPossibleAnswersList(chosenQuestion)
                : null}
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

  const getPossibleAnswersList = (
    chosenQuestion: IQuestion
  ): JSX.Element | undefined => {
    switch (chosenQuestion.questionType) {
      case QuestionType.checkbox:
        return (
          <div>
            <ul>
              {chosenQuestion.answers?.map((answer: IAnswer) => (
                <li>
                  <CheckboxAnswer checkboxAnswer={answer}></CheckboxAnswer>
                </li>
              ))}
            </ul>
          </div>
        );
      case QuestionType.radio:
        return (
          <div>
            <ul>
              {chosenQuestion.answers?.map((answer: IAnswer) => (
                <li>
                  <RadioAnswer radioAnswer={answer}></RadioAnswer>
                </li>
              ))}
            </ul>
          </div>
        );
      case QuestionType.select:
        return (
          <div>
            <ul>
              {chosenQuestion.answers?.map((answer: IAnswer) => (
                <li>
                  {answer.answer} .{chosenQuestion.answers?.indexOf(answer)}
                </li>
              ))}
            </ul>
          </div>
        );
    }
  };

  return (
    <div className="questions-and-possible-answers-section-main">
      {returnFullSection(chosenQuestion)}
    </div>
  );
}

export default QuestionsAndPossibleAnswersSection;
