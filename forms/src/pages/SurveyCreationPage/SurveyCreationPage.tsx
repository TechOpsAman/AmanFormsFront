import { useEffect, useState } from "react";
import SurveySection from "./components/form/SurveySection/SurveySection";
import SurveyTitle from "./components/form/SurveyTitle/SurveyTitle";
import "./SurveyCreationPage.scss";
import plus from "../../assets/plus.svg";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { iQuestion, QuestionType } from "../../interfaces/iQuestion";
import { sectionsContext } from "../../context/sectionsContext";
import { useTranslation } from "react-i18next";

function SurveyCreationPage({ surveyName }: { surveyName: string }) {
  const { t } = useTranslation();

  const [sections, setSections] = useState<iQuestion[]>([
    {
      questionName: t("newQuestion") as string,
      questionType: QuestionType.radio,
      answers: [],
      mustAnswer: true,
    },
  ]);
  const addSection = () => {
    setSections([
      ...sections,
      {
        questionName: t("newQuestion") as string,
        questionType: QuestionType.radio,
        answers: [],
        mustAnswer: true,
      },
    ]);
  };

  const handleDrag = (result: any) => {
    if (!result.destination) return;
    const items = sections;
    const [recordedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, recordedItems);
    setSections(items);
  };

  useEffect(() => {}, [sections,setSections]);

  return (
    <div className="survey-creation-page-container">
      <div className="survey-creation-page-container-without-plus_svg">
        <div className="survey-creation-page-title-container">
          <SurveyTitle surveyName={surveyName} />
        </div>
        <div className="survey-creation-page-section-container">
          <DragDropContext onDragEnd={() => {}} onDragUpdate={handleDrag}>
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
                            <SurveySection section={section} index={i} />
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
          onClick={addSection}
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
