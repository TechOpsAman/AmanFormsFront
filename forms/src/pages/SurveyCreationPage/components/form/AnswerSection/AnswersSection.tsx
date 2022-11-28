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

function AnswersSection({
  answers,
  questionType,
  handleRemoveAnswer,
  questionIndex,
}: {
  answers: iAnswer[];
  questionType: QuestionType;
  handleRemoveAnswer: any;
  questionIndex: number;
}) {
  const sections = useContext(sectionsContext);

  const detectAnswer = () => {
    let ans = <div></div>;
    switch (questionType) {
      case QuestionType.checkbox:
        ans = (
          <div>
            {answers?.map((answer, i) => {
              return (
                <div className="answers-section-answers-container" key={i}>
                  <button
                    className="answers-section-answers-X-button"
                    onClick={() => {
                      handleRemoveAnswer(i);

                      sections[questionIndex].answers = [
                        ...(sections[questionIndex].answers as iAnswer[]).slice(
                          0,
                          i
                        ),
                        ...(sections[questionIndex].answers as iAnswer[]).slice(
                          i + 1
                        ),
                      ];
                    }}
                  >
                    <CloseOutlinedIcon />
                  </button>
                  <CheckBoxAnswer
                    answer={answer}
                    index={i}
                    questionIndex={questionIndex}
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
              answer={answers.length > 0 ? answers[0] : { answer: "" }}
              questionIndex={questionIndex}
            />
          </div>
        );
        break;
      case QuestionType.radio:
        ans = (
          <div>
            {answers?.map((answer, i) => {
              return (
                <div className="answers-section-answers-container" key={i}>
                  <button
                    className="answers-section-answers-X-button"
                    onClick={() => {
                      handleRemoveAnswer(i);

                      sections[questionIndex].answers = [
                        ...(sections[questionIndex].answers as iAnswer[]).slice(
                          0,
                          i
                        ),
                        ...(sections[questionIndex].answers as iAnswer[]).slice(
                          i + 1
                        ),
                      ];
                    }}
                  >
                    <CloseOutlinedIcon />
                  </button>
                  <RadioAnswer
                    answer={answer}
                    index={i}
                    questionIndex={questionIndex}
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
            {answers?.map((answer, i) => {
              return (
                <div className="answers-section-answers-container" key={i}>
                  <button
                    className="answers-section-answers-X-button"
                    onClick={() => {
                      handleRemoveAnswer(i);

                      sections[questionIndex].answers = [
                        ...(sections[questionIndex].answers as iAnswer[]).slice(
                          0,
                          i
                        ),
                        ...(sections[questionIndex].answers as iAnswer[]).slice(
                          i + 1
                        ),
                      ];
                    }}
                  >
                    <CloseOutlinedIcon />
                  </button>
                  <SelectAnswer
                    answer={answer}
                    index={i}
                    questionIndex={questionIndex}
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
              answer={answers.length > 0 ? answers[0] : { answer: "" }}
              questionIndex={questionIndex}
            />
          </div>
        );
        break;

      default:
        break;
    }

    return ans;
  };

  return <div className="answers-section-container">{detectAnswer()}</div>;
}

export default AnswersSection;
