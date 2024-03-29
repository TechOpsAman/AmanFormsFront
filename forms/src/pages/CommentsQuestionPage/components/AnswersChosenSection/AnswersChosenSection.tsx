import "./AnswersChosenSection.scss";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { ISection } from "../../../../interfaces/answers/iSection";
import { ISurveyAnswers } from "../../../../interfaces/answers/iSurvey";
import {
  IQuestion,
  QuestionType,
} from "../../../../interfaces/questions/iQuestion";
import ISurveyAnswersActions from "../../../../utils/InterfacesActions/ISurveyAnswersActions";
import { Card } from "@mui/material";

function AnswersChosenSection({
  answerList,
  chosenQuestion,
}: {
  answerList: ISurveyAnswers[];
  chosenQuestion: IQuestion;
}) {
  const getCheckboxAnswerSectionWrap = (
    sectionData: (number | ISection)[]
  ): JSX.Element => {
    return (
      <div className="checkbox-answer-section">
        {(sectionData[0] as ISection).answers.map(
          (answer: string, answerIndex: number) => {
            return (
              <div className="checkbox-answer" key={answerIndex}>
                <span className="answer">{answer}</span>
                <div>
                  <CheckBoxIcon />
                </div>
              </div>
            );
          }
        )}
        <hr />

        {(sectionData[1] as number) === 1 ? (
          <span className="answer-counter">תשובה אחת</span>
        ) : (
          <span className="answer-counter" dir="rtl">
            {sectionData[1] as number} תשובות
          </span>
        )}
      </div>
    );
  };

  const getRadioAnswerSectionWrap = (
    sectionData: (number | ISection)[]
  ): JSX.Element => {
    return (
      <div className="radio-answer-section">
        {(sectionData[0] as ISection).answers.map(
          (answer: string, answerIndex: number) => {
            return (
              <div className="radio-answer" key={answerIndex}>
                <span className="answer">{answer}</span>
                <div>
                  <RadioButtonCheckedIcon />
                </div>
              </div>
            );
          }
        )}
        <hr />
        {(sectionData[1] as number) === 1 ? (
          <span className="answer-counter">תשובה אחת</span>
        ) : (
          <span className="answer-counter" dir="rtl">
            {sectionData[1] as number} תשובות
          </span>
        )}
      </div>
    );
  };

  const returnQuestionAccordingToType = (
    sectionData: (number | ISection)[]
  ): JSX.Element => {
    switch ((sectionData[0] as ISection).questionType) {
      case QuestionType.checkbox:
        return getCheckboxAnswerSectionWrap(sectionData);

      case QuestionType.radio:
        return getRadioAnswerSectionWrap(sectionData);

      case QuestionType.select:
        return (
          <div dir="rtl">
            <h2>{(sectionData[0] as ISection).answers[0]}</h2>
            <hr />
            {(sectionData[1] as number) === 1 ? (
              <span className="answer-counter">תשובה אחת</span>
            ) : (
              <span className="answer-counter" dir="rtl">
                {sectionData[1] as number} תשובות
              </span>
            )}
          </div>
        );
      case QuestionType.shortAnswer:
      case QuestionType.longAnswer:
        return (
          <div dir="rtl">
            <h2>{(sectionData[0] as ISection).answers[0]}</h2>
            <hr />
            {(sectionData[1] as number) === 1 ? (
              <span className="answer-counter">תשובה אחת</span>
            ) : (
              <span className="answer-counter" dir="rtl">
                {sectionData[1] as number} תשובות
              </span>
            )}
          </div>
        );
      default:
        return <div></div>;
    }
  };

  return (
    <div>
      {answerList
        ? ISurveyAnswersActions.getData(
            answerList,
            chosenQuestion.questionName
          ).map((sectionData: Array<ISection | number>, index: number) => {
            return (
              <div key={index}>
                {(sectionData[0] as ISection).questionType !== "TITLE" ? (
                  <Card
                    style={{ 
                      boxShadow: "1px 2px 4px 1px rgb(131, 131, 131)",
                      borderRadius: "30px" 
                    }}
                    className="answer-card"
                    key={index}
                  >
                    {returnQuestionAccordingToType(sectionData)}
                  </Card>
                ) : null}
              </div>
            );
          })
        : null}
    </div>
  );
}

export default AnswersChosenSection;
