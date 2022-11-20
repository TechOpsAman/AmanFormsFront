import "./AnswersSection.scss";
import { iAnswer } from "../../../../../interfaces/iAnswer";
import { QuestionType } from "../../../../../interfaces/iQuestion";
import CheckBoxAnswer from "./AnswerType/CheckBoxAnswer";
import LongAnswer from "./AnswerType/LongAnswer";
import RadioAnswer from "./AnswerType/RadioAnswer";
import SelectAnswer from "./AnswerType/SelectAnswer";
import ShortAnswer from "./AnswerType/ShortAnswer";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { sectionsContext } from "../../../../../context/sectionsContext";
import { useContext } from "react";

function AnswersSection(props: {
  answers: iAnswer[];
  questionType: QuestionType;
  handleRemoveAnswer: any;
  questionIndex: number;
}) {
  const sections = useContext(sectionsContext);

  const detectAnswer = () => {
    let ans = <div></div>;
    switch (props.questionType) {
      case QuestionType.checkbox:
        ans = (
          <div>
            {props.answers?.map((answer, i) => {
              return (
                <div className="answers-section-answers-container" key={i}>
                  <button
                    className="answers-section-answers-X-button"
                    onClick={() => {
                      props.handleRemoveAnswer(i);

                      sections[props.questionIndex].answers = [
                        ...(
                          sections[props.questionIndex].answers as iAnswer[]
                        ).slice(0, i),
                        ...(
                          sections[props.questionIndex].answers as iAnswer[]
                        ).slice(i + 1),
                      ];
                    }}
                  >
                    <CloseOutlinedIcon />
                  </button>
                  <CheckBoxAnswer
                    answer={answer}
                    index={i}
                    questionIndex={props.questionIndex}
                  />
                </div>
              );
            })}
          </div>
        );
        break;
      case QuestionType.longAnswer:
        ans = (
          <div>
            <LongAnswer
              answer={props.answers[0]}
              questionIndex={props.questionIndex}
            />
          </div>
        );
        break;
      case QuestionType.radio:
        ans = (
          <div>
            {props.answers?.map((answer, i) => {
              return (
                <div className="answers-section-answers-container" key={i}>
                  <button
                    className="answers-section-answers-X-button"
                    onClick={() => {
                      props.handleRemoveAnswer(i);

                      sections[props.questionIndex].answers = [
                        ...(
                          sections[props.questionIndex].answers as iAnswer[]
                        ).slice(0, i),
                        ...(
                          sections[props.questionIndex].answers as iAnswer[]
                        ).slice(i + 1),
                      ];
                    }}
                  >
                    <CloseOutlinedIcon />
                  </button>
                  <RadioAnswer
                    answer={answer}
                    index={i}
                    questionIndex={props.questionIndex}
                  />
                </div>
              );
            })}
          </div>
        );
        break;

      case QuestionType.select:
        ans = (
          <div>
            {props.answers?.map((answer, i) => {
              return (
                <div className="answers-section-answers-container" key={i}>
                  <button
                    className="answers-section-answers-X-button"
                    onClick={() => {
                      props.handleRemoveAnswer(i);

                      sections[props.questionIndex].answers = [
                        ...(
                          sections[props.questionIndex].answers as iAnswer[]
                        ).slice(0, i),
                        ...(
                          sections[props.questionIndex].answers as iAnswer[]
                        ).slice(i + 1),
                      ];
                    }}
                  >
                    <CloseOutlinedIcon />
                  </button>
                  <SelectAnswer
                    answer={answer}
                    index={i}
                    questionIndex={props.questionIndex}
                  />
                </div>
              );
            })}
          </div>
        );
        break;

      case QuestionType.shortAnswer:
        ans = (
          <div>
            <ShortAnswer
              answer={props.answers[0]}
              questionIndex={props.questionIndex}
            />
          </div>
        );
        break;

      default:
        break;
    }

    return ans;
  };

  return <div>{detectAnswer()}</div>;
}

export default AnswersSection;
