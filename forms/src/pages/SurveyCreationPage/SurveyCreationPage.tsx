import { useEffect, useState } from "react";
import SurveySection from "./components/form/SurveySection/SurveySection";
import SurveyTitle from "./components/form/SurveyTitle/SurveyTitle";
import "./SurveyCreationPage.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { iQuestion, QuestionType } from "../../interfaces/iQuestion";
import { sectionsContext } from "../../context/sectionsContext";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

function SurveyCreationPage() {
  const location = useLocation();
  const { t } = useTranslation();
  const [render, setRender] = useState(false);
  const [addQuestionorTitle, setAddQuestionorTitle] = useState<boolean[]>([]);

  const [sections, setSections] = useState<iQuestion[]>([
    {
      questionName: t("newQuestion") as string,
      questionType: QuestionType.radio,
      answers: [],
      required: true,
    },
  ]);

  const addSection = (questionIndex: number) => {
    const temp = sections;
    const recordedItems = temp.splice(questionIndex, 1);
    recordedItems.push({
      questionName: t("newQuestion") as string,
      questionType: QuestionType.radio,
      answers: [],
      required: true,
    });
    temp.splice(questionIndex, 0, ...recordedItems);
    setSections(temp);
    setRender(!render);
  };

  const addTitle = (questionIndex: number) => {
    const temp = sections;
    const recordedItems = temp.splice(questionIndex, 1);
    recordedItems.push({
      questionName: t("newTitle") as string,
      questionType: QuestionType.title,
      answers: [],
      required: false,
    });
    temp.splice(questionIndex, 0, ...recordedItems);
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
      required: isSwitch,
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

  useEffect(() => {
    if (location.state?.survey.content.length > 0) {
      setSections(location.state.survey.content);
    }
  }, [location.state.survey.content, render]);

  return (
    <div className="survey-creation-page-container">
      <div className="survey-creation-page-container-without-plus_svg">
        <div className="survey-creation-page-title-container">
          <SurveyTitle
            surveyName={location.state.survey.surveyName}
            surveyDescription={location.state.survey.surveyDescription}
          />
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
                              addTitle={addTitle}
                              addQuestionorTitle={addQuestionorTitle}
                              setAddQuestionorTitle={setAddQuestionorTitle}
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
