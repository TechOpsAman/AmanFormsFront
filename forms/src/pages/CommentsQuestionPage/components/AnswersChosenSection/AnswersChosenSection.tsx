import "./AnswersChosenSection.scss";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Card } from "@material-ui/core";
import { ISection } from "../../../../interfaces/answers/iSection";
import { ISurveyAnswers } from "../../../../interfaces/answers/iSurvey";
import {
  IQuestion,
  QuestionType,
} from "../../../../interfaces/questions/iQuestion";

function AnswersChosenSection({
  answerList,
  chosenQuestion,
}: {
  answerList: ISurveyAnswers[];
  chosenQuestion: IQuestion;
}) {
  const checkAmountOfIdenticalAnswers = (
    answers: string[],
    data: Map<string[], number> = new Map<string[], number>()
  ) => {
    return data.get(answers);
  };

  const getCheckboxAnswerSectionWrap = (
    section: ISection,
    data: Map<string[], number> = new Map<string[], number>()
  ): JSX.Element => {
    return (
      <div className="checkbox-answer-section">
        {section.answers.map((answer: string, answerIndex: number) => {
          return (
            <div className="checkbox-answer">
              <span className="answer">{section.answers[answerIndex]}</span>
              <div>
                <CheckBoxIcon />
              </div>
            </div>
          );
        })}
        <hr />
        {checkAmountOfIdenticalAnswers(answers, data) ? (
          <span className="answer-counter">תשובה אחת</span>
        ) : (
          <span className="answer-counter" dir="rtl">
            {checkAmountOfIdenticalAnswers(answers, data)} תשובות
          </span>
        )}
      </div>
    );
  };

  const getRadioAnswerSectionWrap = (section: ISection): JSX.Element => {
    return (
      <div className="radio-answer-section">
        <div className="radio-answer">
          <span className="answer">{section.answers[0]}</span>
          <div>
            <RadioButtonCheckedIcon />
          </div>
        </div>
        <hr />
        {checkAmountOfIdenticalAnswers(section.answers, "boolean") === 1 ? (
          <span className="answer-counter">תשובה אחת</span>
        ) : (
          <span className="answer-counter" dir="rtl">
            {checkAmountOfIdenticalAnswers(section.answers, "boolean")} תשובות
          </span>
        )}
      </div>
    );
  };

  const returnQuestionAccordingToType = (section: ISection): JSX.Element => {
    switch (section.questionType) {
      case QuestionType.checkbox:
        return getCheckboxAnswerSectionWrap(section);

      case QuestionType.radio:
        return getRadioAnswerSectionWrap(section);

      case QuestionType.select:
        return <div>{section.answers[0]}</div>;
      case QuestionType.shortAnswer:
      case QuestionType.longAnswer:
      case QuestionType.title:
        return <h2>{section.answers[0]}</h2>;
      default:
        return <div></div>;
    }
  };

  return (
    <div>
      <>
        {answerList ? (
          <Card className="answer-card" key={sectionIndex}>
            {returnQuestionAccordingToType(section)}
          </Card>
        ) : null}
      </>
    </div>
  );
}

export default AnswersChosenSection;
