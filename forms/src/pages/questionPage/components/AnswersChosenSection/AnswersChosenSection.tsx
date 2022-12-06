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
  questionList,
  answerList,
  chosenQuestion,
}: {
  questionList: IQuestion[];
  answerList: ISurveyAnswers[];
  chosenQuestion: IQuestion;
}) {
  const getCheckBoxAnswerSectionWrap = (
    section: ISection,
    answerIndex: number
  ): JSX.Element => {
    return (
      <div className="answer-section">
        <span className="answer">{section.answers[answerIndex]}</span>;
        <div>
          <CheckBoxIcon />
        </div>
      </div>
    );
  };

  const getRadioAnswerSectionWrap = (
    section: ISection,
    answerIndex: number
  ): JSX.Element => {
    return (
      <div className="answer-section">
        <span className="answer">{section.answers[answerIndex]}</span>;
        <div>
          <RadioButtonCheckedIcon />
        </div>
      </div>
    );
  };

  const returnQuestionAccordingToType = (
    section: ISection,
    answerIndex: number
  ): JSX.Element | null => {
    switch (section.questionType) {
      case QuestionType.checkbox:
        return getCheckBoxAnswerSectionWrap(section, answerIndex);

      case QuestionType.radio:
        return getRadioAnswerSectionWrap(section, answerIndex);

      case QuestionType.select:
        return <div>{section.answers[answerIndex]}</div>;
      case QuestionType.shortAnswer:
      case QuestionType.longAnswer:
      case QuestionType.title:
        return <h2>{section.answers[answerIndex]}</h2>;
      default:
        return null;
    }
  };

  return (
    <div>
      <>
        {answerList
          ? answerList[0].content.map(
              (section: ISection, sectionIndex: number) => {
                section.answers.map((answer: string, answerIndex: number) => {
                  <Card className="answer-card">
                    {returnQuestionAccordingToType(section, answerIndex)}
                  </Card>;
                });
              }
            )
          : null}
      </>
    </div>
  );
}

export default AnswersChosenSection;
