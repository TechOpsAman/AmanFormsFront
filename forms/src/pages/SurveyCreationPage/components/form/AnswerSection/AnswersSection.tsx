import "./AnswersSection.scss";
import { IAnswer } from "../../../../../interfaces/answers/iAnswer";
import { QuestionType } from "../../../../../interfaces/questions/iQuestion";
import CheckBoxAnswer from "./AnswerType/CheckBoxAnswer";
import RadioAnswer from "./AnswerType/RadioAnswer";
import SelectAnswer from "./AnswerType/SelectAnswer";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { sectionsContext } from "../../../../../context/sectionsContext";
import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DragIndicatorRoundedIcon from "@mui/icons-material/DragIndicatorRounded";
import { updateContent } from "../../../../../services/questionsService";
import { useLocation } from "react-router-dom";

function AnswersSection({
  answers,
  questionType,
  handleRemoveAnswer,
  questionIndex,
  setAnswers,
}: {
  answers: IAnswer[];
  questionType: QuestionType;
  handleRemoveAnswer: any;
  questionIndex: number;
  setAnswers: Dispatch<SetStateAction<IAnswer[] | undefined>>;
}) {
  const location = useLocation();
  const sections = useContext(sectionsContext);

  const handleDrag = (result: any) => {
    if (!result.destination) return;
    const items = sections[questionIndex].answers;
    const [recordedItems] = (items as IAnswer[]).splice(result.source.index, 1);
    (items as IAnswer[]).splice(result.destination.index, 0, recordedItems);
    sections[questionIndex].answers = items;
    updateContent(location.state.survey.id, sections);
    // setAnswers(items);
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
                                // setAnswers([
                                //   ...(answers as IAnswer[]).slice(0, i),
                                //   ...(answers as IAnswer[]).slice(i + 1),
                                // ]);
                              }}
                            >
                              <CloseOutlinedIcon />
                            </button>
                            <div className="answers">
                              <CheckBoxAnswer
                                answer={answer}
                                index={i}
                                questionIndex={questionIndex}
                                answers={answers}
                              />
                              <div
                                className="dragIconAnswerCheckbox"
                                {...provided.dragHandleProps}
                              >
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
      // case QuestionType.longAnswer:
      //   ans = (
      //     <div>
      //       {/* <LongAnswer
      //         answer={answers.length > 0 ? answers[0] : { answer: "" }}
      //         questionIndex={questionIndex}
      //       /> */}
      //     </div>
      //   );
      //   break;
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
                              }}
                            >
                              <CloseOutlinedIcon />
                            </button>
                            <div className="answers">
                              <RadioAnswer
                                answer={answer}
                                index={i}
                                questionIndex={questionIndex}
                                answers={answers}
                              />
                              <div
                                className="dragIconAnswer"
                                {...provided.dragHandleProps}
                              >
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
                                // setAnswers([
                                //   ...(answers as IAnswer[]).slice(0, i),
                                //   ...(answers as IAnswer[]).slice(i + 1),
                                // ]);
                              }}
                            >
                              <CloseOutlinedIcon />
                            </button>
                            <div className="answers">
                              <SelectAnswer
                                answer={answer}
                                index={i}
                                questionIndex={questionIndex}
                                answers={answers}
                              />
                              <div
                                className="dragIconAnswerselect"
                                {...provided.dragHandleProps}
                              >
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

      default:
        break;
    }

    return ans;
  };

  return <div className="answers-section-container">{detectAnswer()}</div>;
}

export default AnswersSection;
