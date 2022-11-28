import "./SurveySection.scss";
import { iQuestion, QuestionType } from "../../../../../interfaces/iQuestion";
import { useTranslation } from "react-i18next";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { iAnswer } from "../../../../../interfaces/iAnswer";
import AnswersSection from "../AnswerSection/AnswersSection";
import QuestionTypeSelection from "../QuestionTypeSelection/QuestionTypeSelection";
import Button from "@mui/material/Button";
import { sectionsContext } from "../../../../../context/sectionsContext";
import DragIndicatorRoundedIcon from "@mui/icons-material/DragIndicatorRounded";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import Switch from "@mui/material/Switch";

function SurveySection({
  section,
  index: questionIndex,
  render,
  setRender,
  addSectionWithParams,
  handleDelete,
}: {
  section: iQuestion;
  index: number;
  render: any;
  setRender: any;
  addSectionWithParams: any;
  handleDelete: any;
}) {
  let sections = useContext(sectionsContext);
  const label = { inputProps: { "aria-label": "must" } };
  const { t } = useTranslation();

  const [questionType, setQuestionType] = useState(section.questionType);
  const [questionName, setQuestionName] = useState(section.questionName);
  const [answers, setAnswers] = useState(section.answers);

  const handleQuestionNameCallBack = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestionName(e.target.value);
    sections[questionIndex].questionName = e.target.value;
    console.log(sections);
  };

  const handleAddAnswer = () => {
    sections[questionIndex].answers = [
      ...(sections[questionIndex].answers as iAnswer[]),
      { answer: "" },
    ];
    setAnswers([...(answers as iAnswer[]), { answer: "" }]);
  };

  const handleRemoveAnswer = (answerIndex: number) => {
    setAnswers([
      ...(answers as iAnswer[]).slice(0, answerIndex),
      ...(answers as iAnswer[]).slice(answerIndex + 1),
    ]);
  };

  const handleQuestionTypeChange = (newType: QuestionType) => {
    setQuestionType(newType);
  };

  const handleMustAnswerChange = () => {
    sections[questionIndex].mustAnswer = !sections[questionIndex].mustAnswer;
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
    t,
  ]);

  return (
    <div className="survey-section-container">
      <div className="survery-section-drag-indicatior-container">
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
          className="survey-section-input_question_name"
          value={questionName}
          onChange={(e) => {
            handleQuestionNameCallBack(e);
          }}
        />
      </div>
      <div className="survey-section-answers-wrapper">
        <AnswersSection
          answers={answers as iAnswer[]}
          questionType={questionType}
          handleRemoveAnswer={handleRemoveAnswer}
          questionIndex={questionIndex}
        />
      </div>
      <hr />
      <div className="bottom-container">
        <div className="bottom-container-must-wrapper">
          <div className="switch">
            <Switch
              {...label}
              onChange={handleMustAnswerChange}
              defaultChecked
              size="small"
            />
          </div>
          <div className="bottom-container-must">
            <span>{t("mustAnswer")}</span>
          </div>
          <div className="bottom-container-icons">
            <DeleteForeverOutlinedIcon
              fontSize="large"
              onClick={() => {
                handleDelete(questionIndex);
              }}
            />
            <CopyAllIcon
              fontSize="large"
              onClick={() => {
                addSectionWithParams(section, questionIndex);
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
  );
}

export default SurveySection;
