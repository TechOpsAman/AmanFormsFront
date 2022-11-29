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
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DragIndicatorRoundedIcon from "@mui/icons-material/DragIndicatorRounded";

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

  const handleDrag = (result: any) => {
    if (!result.destination) return;
    const items = sections[questionIndex].answers;
    const [recordedItems] = (items as iAnswer[]).splice(result.source.index, 1);
    (items as iAnswer[]).splice(result.destination.index, 0, recordedItems);
    sections[questionIndex].answers = items;
  };

  const detectAnswer = () => {
    let ans = <div></div>;
    switch (questionType) {
      case QuestionType.checkbox:
        ans = (
          <div className="answers-section-answers-container">
            <DragDropContext onDragEnd={handleDrag}>
              <Droppable droppableId="characters">
                {(provided) => (
                  <ul
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="ulclass"
                  >
                    {answers?.map((answer, i) => (
                      <Draggable key={i} draggableId={`id${i}`} index={i}>
                        {(provided) => (
                          <li
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                            className="liClass"
                          >
                            <button
                              className="answers-section-answers-X-button"
                              onClick={() => {
                                handleRemoveAnswer(i);

                                sections[questionIndex].answers = [
                                  ...(sections[questionIndex]
                                    .answers as iAnswer[]).slice(0, i),
                                  ...(sections[questionIndex]
                                    .answers as iAnswer[]).slice(i + 1),
                                ];
                              }}
                            >
                              <CloseOutlinedIcon />
                            </button>
                            <div className="answers">
                              <CheckBoxAnswer
                                answer={answer}
                                index={i}
                                questionIndex={questionIndex}
                              />
                              <div className="dragIconAnswer" {...provided.dragHandleProps}>
                                <DragIndicatorRoundedIcon />
                              </div>
                            </div>
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
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
          <div className="answers-section-answers-container">
            <DragDropContext onDragEnd={handleDrag}>
              <Droppable droppableId="characters">
                {(provided) => (
                  <ul
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="ulclass"
                  >
                    {answers?.map((answer, i) => (
                      <Draggable key={i} draggableId={`id${i}`} index={i}>
                        {(provided) => (
                          <li
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                            className="liClass"
                          >
                            <button
                              className="answers-section-answers-X-button"
                              onClick={() => {
                                handleRemoveAnswer(i);

                                sections[questionIndex].answers = [
                                  ...(sections[questionIndex]
                                    .answers as iAnswer[]).slice(0, i),
                                  ...(sections[questionIndex]
                                    .answers as iAnswer[]).slice(i + 1),
                                ];
                              }}
                            >
                              <CloseOutlinedIcon />
                            </button>
                            <div className="answers">
                              <RadioAnswer
                                answer={answer}
                                index={i}
                                questionIndex={questionIndex}
                              />
                              <div className="dragIconAnswer" {...provided.dragHandleProps}>
                                <DragIndicatorRoundedIcon />
                              </div>
                            </div>
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        );
        break;

      case QuestionType.select:
        ans = (
          <div className="answers-section-answers-container">
            <DragDropContext onDragEnd={handleDrag}>
              <Droppable droppableId="characters">
                {(provided) => (
                  <ul
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="ulclass"
                  >
                    {answers?.map((answer, i) => (
                      <Draggable key={i} draggableId={`id${i}`} index={i}>
                        {(provided) => (
                          <li
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                            className="liClass"
                          >
                            <button
                              className="answers-section-answers-X-button"
                              onClick={() => {
                                handleRemoveAnswer(i);

                                sections[questionIndex].answers = [
                                  ...(sections[questionIndex]
                                    .answers as iAnswer[]).slice(0, i),
                                  ...(sections[questionIndex]
                                    .answers as iAnswer[]).slice(i + 1),
                                ];
                              }}
                            >
                              <CloseOutlinedIcon />
                            </button>
                            <div className="answers">
                              <SelectAnswer
                                answer={answer}
                                index={i}
                                questionIndex={questionIndex}
                              />
                              <div className="dragIconAnswerselect" {...provided.dragHandleProps}>
                                <DragIndicatorRoundedIcon />
                              </div>
                            </div>
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
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
