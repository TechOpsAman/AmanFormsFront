import { useEffect, useState } from "react";
import SurveySection from "./components/form/SurveySection/SurveySection";
import SurveyTitle from "./components/form/SurveyTitle/SurveyTitle";
import "./SurveyCreationPage.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { IQuestion, QuestionType } from "../../interfaces/questions/iQuestion";
import { sectionsContext } from "../../context/sectionsContext";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import {
  getById,
  updateContent,
  updateLastUpdated,
  updateSurvey,
} from "../../services/questionsService";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  DialogContent,
  Alert,
} from "@mui/material";
import { writeText } from "clipboard-polyfill";
import { config } from "../../data/config/config";

function SurveyCreationPage({
  isOpen,
  setIsOpen,
  setSurveyUrl,
}: {
  isOpen: boolean;
  setIsOpen: (bool: boolean) => void;
  setSurveyUrl: (url: string) => void;
}) {
  const location = useLocation();
  const { t } = useTranslation();
  const [render, setRender] = useState(false);
  const [addQuestionorTitle, setAddQuestionorTitle] = useState<boolean[]>([]);
  const [sections, setSections] = useState<IQuestion[]>([]);
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [currSurvey, setCurrSurvey] = useState("");

  const handleshareDialogClose = () => {
    setShareDialogOpen(false);
    setIsOpen(false);
  };

  const swapContent = async (temp: IQuestion[]) => {
    updateContent(location.state.survey.id, temp);
  };

  const addSection = (questionIndex: number) => {
    const temp = sections;
    const recordedItems: any[] = temp.splice(questionIndex, 1);
    recordedItems.push({
      questionName: t("newQuestion") as string,
      questionType: QuestionType.radio as string,
      answers: [],
      required: true,
    });
    temp.splice(questionIndex, 0, ...recordedItems);
    swapContent(temp);
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
    swapContent(temp);
    setRender(!render);
  };

  const addSectionWithParams = async (
    section: IQuestion,
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
    swapContent(temp);
    setRender(!render);
  };

  const handleDelete = (questionIndex: number) => {
    const temp = [...sections];
    const recordedItems = temp.splice(questionIndex, 1);
    recordedItems.pop();
    temp.splice(questionIndex, 0, ...recordedItems);
    swapContent(temp);
    setRender(!render);
  };

  const handleDrag = (result: any) => {
    if (!result.destination) return;
    const items = sections;
    const [recordedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, recordedItems);
    swapContent(items);
  };

  const copyToClipboard = () => {
    writeText(currSurvey).then(
      function () {
        <Alert severity="success">{t("copiedToClipboard")}</Alert>;
      },
      function (error: any) {
        <Alert severity="error">{t("filedToCopy")}</Alert>;
      }
    );
  };

  useEffect(() => {
    const getSurvey = async () => {
      const currSurvey = await getById(location.state.survey.id);
      if (currSurvey.content.length > 0) {
        setSections(currSurvey.content);
      } else {
        const tempSections = [
          {
            questionName: t("newQuestion") as string,
            questionType: QuestionType.radio,
            answers: [],
            required: true,
          },
        ];

        await updateSurvey(location.state.survey.id, "", "", tempSections);
        const newSurvey = await getById(location.state.survey.id);
        setSections(newSurvey.content);
      }
      updateLastUpdated(location.state.survey.id);
      setCurrSurvey(`${config.website.address}/answerSurvey/${currSurvey.id}`);
      setSurveyUrl(`${config.website.address}/answerSurvey/${currSurvey.id}`);
    };
    getSurvey();

    setShareDialogOpen(isOpen);
  }, [isOpen, location, render, t]);

  return (
    <div className="survey-creation-page-container">
      <div className="survey-creation-page-container-without-plus_svg">
        <div className="survey-creation-page-title-container">
          <SurveyTitle
            surveyName={location.state.survey.surveyName}
            surveyDescription={location.state.survey.surveyDescription}
            surveyId={location.state.survey.id}
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
      <Dialog
        open={shareDialogOpen}
        onClose={handleshareDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ direction: "rtl" }}>
          {t("copyLink")}
        </DialogTitle>
        <DialogContent>{currSurvey}</DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => {
              copyToClipboard();
              handleshareDialogClose();
            }}
            variant="outlined"
          >
            {t("copy")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SurveyCreationPage;
