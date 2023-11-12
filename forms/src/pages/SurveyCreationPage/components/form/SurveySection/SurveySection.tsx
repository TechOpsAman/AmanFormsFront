import "./SurveySection.scss";
import {
  IQuestion,
  QuestionType,
} from "../../../../../interfaces/questions/iQuestion";
import { useTranslation } from "react-i18next";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { IAnswer } from "../../../../../interfaces/answers/iAnswer";
import AnswersSection from "../AnswerSection/AnswersSection";
import QuestionTypeSelection from "../QuestionTypeSelection/QuestionTypeSelection";
import Button from "@mui/material/Button";
import { sectionsContext } from "../../../../../context/sectionsContext";
import DragIndicatorRoundedIcon from "@mui/icons-material/DragIndicatorRounded";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import Switch from "@mui/material/Switch";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import TextFieldsTwoToneIcon from "@mui/icons-material/TextFieldsTwoTone";
import { useLocation } from "react-router-dom";
import { updateContent } from "../../../../../services/questionsService";

function SurveySection({
  section,
  index: questionIndex,
  render,
  setRender,
  addSectionWithParams,
  handleDelete,
  provided,
  addSection,
  addTitle,
  addQuestionorTitle,
  setAddQuestionorTitle,
}: {
  section: IQuestion;
  index: number;
  render: any;
  setRender: any;
  addSectionWithParams: any;
  handleDelete: any;
  provided: any;
  addSection: any;
  addTitle: any;
  addQuestionorTitle: any;
  setAddQuestionorTitle: any;
}) {
  //console.log(section);

  let sections = useContext(sectionsContext);
  const label = { inputProps: { "aria-label": "must" } };
  const { t } = useTranslation();

  let isSwitch = section.required;
  const [questionType, setQuestionType] = useState(section.questionType);
  const [questionName, setQuestionName] = useState(section.questionName);
  const [answers, setAnswers] = useState(section.answers);
  const location = useLocation();

  const handleQuestionNameCallBack = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestionName(e.target.value);
    sections[questionIndex].questionName = e.target.value;
    updateContent(location.state.survey.id, sections);
  };

  const handleAddAnswer = () => {
    sections[questionIndex].answers = [
      ...(sections[questionIndex].answers as IAnswer[]),
      {
        answer: "",
      },
    ];
    setAnswers([...(answers as IAnswer[]), { answer: "" }]);
    updateContent(location.state.survey.id, sections);
  };

  const handleRemoveAnswer = (answerIndex: number) => {
    if (answers?.length != 1) {
      // setAnswers([
      //   ...(answers as IAnswer[]).slice(0, answerIndex),
      //   ...(answers as IAnswer[]).slice(answerIndex + 1),
      // ]);

      const temp = sections;
      temp[questionIndex].answers = [
        ...(answers as IAnswer[]).slice(0, answerIndex),
        ...(answers as IAnswer[]).slice(answerIndex + 1),
      ];
      sections = temp;
      updateContent(location.state.survey.id, sections);
    }
  };

  const handleQuestionTypeChange = (newType: QuestionType) => {
    setQuestionType(newType);
    sections[questionIndex].questionType = newType;
    updateContent(location.state.survey.id, sections);
  };

  const handlerequiredChange = () => {
    sections[questionIndex].required = !sections[questionIndex].required;
    isSwitch = !isSwitch;
    updateContent(location.state.survey.id, sections);
    setRender(!render);
  };

  useEffect(() => {
    setQuestionName(sections[questionIndex].questionName);
    setQuestionType(sections[questionIndex].questionType);
    setAnswers(sections[questionIndex].answers);
  }, [
    questionIndex,
    section.answers,
    section.questionName,
    section.questionType,
    questionName,
    sections,
    answers,
    t,
  ]);

  return (
    <div
      onClick={() => {
        const temp = Array(sections.length).fill(false);
        temp[questionIndex] = true;
        setAddQuestionorTitle(temp);
      }}
    >
      {!(questionType === QuestionType.title) ? (
        <div>
          <div className="survey-section-container">
            <div
              className="survery-section-drag-indicatior-container"
              {...provided.dragHandleProps}
            >
              <DragIndicatorRoundedIcon fontSize="large" color="inherit" />
            </div>
            <div className="survey-section-input-type-question-name-container">
              <div className="survey-section-input_question_type">
                <QuestionTypeSelection
                  selected={questionType}
                  handleQuestionTypeChange={handleQuestionTypeChange}
                  index={questionIndex}
                />
                <span className="survey-section-input_question_type_text">
                  {t("questionType")}
                </span>
              </div>

              <input
                type="text"
                dir="rtl"
                className="survey-section-input_question_name"
                placeholder="כתוב שאלה חדשה"
                value={questionName}
                onChange={(e) => {
                  handleQuestionNameCallBack(e);
                }}
              />
            </div>
            <div className="survey-section-answers-wrapper">
              <AnswersSection
                answers={answers as IAnswer[]}
                questionType={questionType}
                handleRemoveAnswer={handleRemoveAnswer}
                questionIndex={questionIndex}
                setAnswers={setAnswers}
              />
            </div>
            <hr />
            <div className="bottom-container">
              <div className="bottom-container-must-wrapper">
                <div className="switch">
                  <Switch
                    {...label}
                    onChange={handlerequiredChange}
                    size="medium"
                    checked={isSwitch}
                  />
                </div>
                <div className="bottom-container-must">
                  <span>{t("required")}</span>
                </div>
                <div className="bottom-container-icons">
                  <DeleteForeverOutlinedIcon
                    fontSize="large"
                    onClick={() => {
                      handleDelete(questionIndex);
                    }}
                    sx={{ cursor: "pointer" }}
                  />
                  <CopyAllIcon
                    sx={{ cursor: "pointer" }}
                    fontSize="large"
                    onClick={() => {
                      addSectionWithParams(section, questionIndex, isSwitch);
                    }}
                  />
                </div>
              </div>
              {!(questionType === QuestionType.longAnswer) &&
              !(questionType === QuestionType.shortAnswer) ? (
                <div className="survey-section_add_answer">
                  <Button variant="outlined" onClick={handleAddAnswer}>
                    {t("addAnswer")}
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <div className="survey-section-container-title">
          <div
            className="survery-section-drag-indicatior-container"
            {...provided.dragHandleProps}
          >
            <DragIndicatorRoundedIcon fontSize="large" color="inherit" />
          </div>
          <input
            type="text"
            className="survey-section-input_question_name-title"
            value={questionName}
            onChange={(e) => {
              handleQuestionNameCallBack(e);
            }}
          />
          <hr />

          <div className="bottom-container">
            <div className="bottom-container-must-wrapper">
              <div className="bottom-container-icons">
                <DeleteForeverOutlinedIcon
                  sx={{ cursor: "pointer" }}
                  fontSize="large"
                  onClick={() => {
                    handleDelete(questionIndex);
                  }}
                />
                <CopyAllIcon
                  sx={{ cursor: "pointer" }}
                  fontSize="large"
                  onClick={() => {
                    addSectionWithParams(section, questionIndex, isSwitch);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {addQuestionorTitle[questionIndex] && (
        <div className="survey-section-add-title-container">
          <div className="survey-section-add-title">
            <AddCircleOutlineTwoToneIcon
              sx={{ cursor: "pointer" }}
              fontSize="large"
              onClick={() => {
                addSection(questionIndex);
              }}
            />
          </div>
          <div className="survey-section-add-title">
            <TextFieldsTwoToneIcon
              sx={{ cursor: "pointer" }}
              fontSize="large"
              onClick={() => {
                addTitle(questionIndex);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SurveySection;
