import { useState } from "react";
import SurveySection from "./components/form/SurveySection/SurveySection";
import SurveyTitle from "./components/form/SurveyTitle/SurveyTitle";
import "./SurveyCreationPage.scss";
import plus from "../../assets/plus.svg";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { iQuestion, QuestionType } from "../../interfaces/iQuestion";
import { sectionsContext } from "../../context/sectionsContext";

function SurveyCreationPage(props: { surveyName: string }) {
  const mock: iQuestion = {
    id: "123456123456123456123456",
    questionName: "מה קורה?",
    questionType: QuestionType.radio,
    answers: [
      { answer: "בסדר" },
      { answer: "" },
      { answer: "על הפנים" },
      { answer: "שורד." },
    ],
  };

  const [sections, setSections] = useState([mock]);

  const addSection = () => {
    setSections([
      ...sections,
      {
        questionName: "??מה קורה?",
        questionType: QuestionType.checkbox,
        answers: [
          { answer: "בסדר" },
          { answer: "בסדר גמור אפילו" },
          { answer: "על הפנים" },
          { answer: "שורד." },
        ],
      },
    ]);
  };

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = sections;
    const [recordedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, recordedItems);
    setSections(items);
  };

  return (
    <div className="survey-creation-page-container">
      <div className="survey-creation-page-container-without-plus_svg">
        <div className="survey-creation-page-title-container">
          <SurveyTitle surveyName={props.surveyName} />
        </div>
        <div className="survey-creation-page-section-container">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <ul
                  className="survey-creation-page-secion-list"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {sections.map((section, i) => (
                    <Draggable key={i} draggableId={`id${i}`} index={i}>
                      {(provided) => (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <sectionsContext.Provider value={sections}>
                            <SurveySection
                              section={section}
                              index={i}
                            />
                          </sectionsContext.Provider>
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
        <div
          className="survey-creation-page-plus-container"
          onClick={() => addSection()}
        >
          <img
            src={plus}
            alt="add survey"
            className="survey-creation-page-plus_svg"
          />
        </div>
      </div>
    </div>
  );
}

export default SurveyCreationPage;
