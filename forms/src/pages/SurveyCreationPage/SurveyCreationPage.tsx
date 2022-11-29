import { useEffect, useState } from "react";
import SurveySection from "./components/form/SurveySection/SurveySection";
import SurveyTitle from "./components/form/SurveyTitle/SurveyTitle";
import "./SurveyCreationPage.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { iQuestion, QuestionType } from "../../interfaces/iQuestion";
import { sectionsContext } from "../../context/sectionsContext";
import { useTranslation } from "react-i18next";

function SurveyCreationPage({ surveyName }: { surveyName: string }) {
  const { t } = useTranslation();
  const [render, setRender] = useState(false);

  const [sections, setSections] = useState<iQuestion[]>([
    {
      questionName: t("newQuestion") as string,
      questionType: QuestionType.radio,
      answers: [],
      mustAnswer: true,
    },
  ]);
  const addSection = (questionIndex: number) => {
    console.log('he')
    console.log(questionIndex as number);
    const temp = sections;
    const recordedItems = temp.splice(questionIndex, 1);
    console.log(recordedItems);
    recordedItems.push({
      questionName: t("newQuestion") as string,
      questionType: QuestionType.radio,
      answers: [],
      mustAnswer: true,
    });
    console.log(recordedItems);
    temp.splice(questionIndex, 0, ...recordedItems);
    console.log(temp);
    setSections(temp);
    setRender(!render);
  };

  const addSectionWithParams = (
    section: iQuestion,
    questionIndex: number,
    isSwitch: boolean
  ) => {
    const temp = sections;
    const recordedItems = temp.splice(questionIndex, 1);
    recordedItems.push({
      questionName: section.questionName,
      questionType: section.questionType,
      answers: section.answers,
      mustAnswer: isSwitch,
    });
    temp.splice(questionIndex, 0, ...recordedItems);
    setSections(temp);
    setRender(!render);
  };

  const handleDelete = (questionIndex: number) => {
    const temp = [...sections];
    const recordedItems = temp.splice(questionIndex, 1);
    recordedItems.pop();
    temp.splice(questionIndex, 0, ...recordedItems);
    setSections(temp);
    setRender(!render);
  };

  const handleDrag = (result: any) => {
    if (!result.destination) return;
    const items = sections;
    const [recordedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, recordedItems);
    setSections(items);
  };

  useEffect(() => {}, [render]);

  return (
    <div className="survey-creation-page-container">
      <div className="survey-creation-page-container-without-plus_svg">
        <div className="survey-creation-page-title-container">
          <SurveyTitle surveyName={surveyName} />
        </div>
        <div className="survey-creation-page-section-container">
          <DragDropContext onDragEnd={handleDrag}>
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
                          ref={provided.innerRef}
                        >
                          <sectionsContext.Provider value={sections}>
                            <SurveySection
                              section={section}
                              index={i}
                              render={render}
                              setRender={setRender}
                              addSectionWithParams={addSectionWithParams}
                              handleDelete={handleDelete}
                              provided={provided}
                              addSection={addSection}
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
      </div>
    </div>
  );
}

export default SurveyCreationPage;
