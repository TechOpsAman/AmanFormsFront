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
import ISurveyAnswersActions from "../../../../utils/InterfacesActions/ISurveyAnswersActions";

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
    sectionData: (number | ISection)[]
  ): JSX.Element => {
    return (
      <div className="checkbox-answer-section">
        {(sectionData[0] as ISection).answers.map(
          (answer: string, answerIndex: number) => {
            return (
              <div className="checkbox-answer">
                <span className="answer">
                  {(sectionData[0] as ISection).answers[answerIndex]}
                </span>
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
        <div className="radio-answer">
          <span className="answer">
            {(sectionData[0] as ISection).answers[0]}
          </span>
          <div>
            <RadioButtonCheckedIcon />
          </div>
        </div>
        <hr />
        {(sectionData[1] as number) === 1 ? (
          <span className="answer-counter">תשובה אחת</span>
        ) : (
          <span className="answer-counter" dir="rtl">
            {sectionData[1] as number}
            תשובות
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
        return <div>{(sectionData[0] as ISection).answers[0]}</div>;
      case QuestionType.shortAnswer:
      case QuestionType.longAnswer:
      case QuestionType.title:
        return <h2>{(sectionData[0] as ISection).answers[0]}</h2>;
      default:
        return <div></div>;
    }
  };

  return (
    <div>
      <>
        {/* {console.log(
          ISurveyAnswersActions.getData(answerList, chosenQuestion.questionName)
        )} */}
      </>
      {answerList
        ? ISurveyAnswersActions.getData(
            answerList,
            chosenQuestion.questionName
          ).map((setionData: Array<ISection | number>, index: number) => {
            return (
              <Card className="answer-card" key={index}>
                {returnQuestionAccordingToType(setionData)}
              </Card>
            );
          })
        : null}
    </div>
  );
}

export default AnswersChosenSection;
