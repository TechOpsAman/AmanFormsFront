import { useContext, useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { useTranslation } from "react-i18next";
import { QuestionType } from "../../../../../interfaces/questions/iQuestion";
import { sectionsContext } from "../../../../../context/sectionsContext";

function QuestionTypeSelection({
  selected,
  handleQuestionTypeChange,
  index,
}: {
  selected: QuestionType;
  handleQuestionTypeChange: any;
  index: number;
}) {
  const sections = useContext(sectionsContext);
  const { t } = useTranslation();
  const [questionType, setQuestionType] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setQuestionType(event.target.value);

    switch (event.target.value) {
      case t("selectQuestionType.checkbox"):
        sections[index].questionType = QuestionType.checkbox;
        handleQuestionTypeChange(QuestionType.checkbox);
        break;
      case t("selectQuestionType.longAnswer"):
        sections[index].questionType = QuestionType.longAnswer;
        handleQuestionTypeChange(QuestionType.longAnswer);
        break;
      case t("selectQuestionType.select"):
        sections[index].questionType = QuestionType.select;
        handleQuestionTypeChange(QuestionType.select);
        break;
      case t("selectQuestionType.shortAnswer"):
        sections[index].questionType = QuestionType.shortAnswer;
        handleQuestionTypeChange(QuestionType.shortAnswer);
        break;
      case t("selectQuestionType.radio"):
        sections[index].questionType = QuestionType.radio;
        handleQuestionTypeChange(QuestionType.radio);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    switch (selected) {
      case QuestionType.checkbox:
        setQuestionType(t("selectQuestionType.checkbox") as string);
        break;
      case QuestionType.longAnswer:
        setQuestionType(t("selectQuestionType.longAnswer") as string);
        break;
      case QuestionType.select:
        setQuestionType(t("selectQuestionType.select") as string);
        break;
      case QuestionType.shortAnswer:
        setQuestionType(t("selectQuestionType.shortAnswer") as string);
        break;
      case QuestionType.radio:
        setQuestionType(t("selectQuestionType.radio") as string);
        break;

      default:
        break;
    }
  }, [selected, t]);

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <Select value={questionType} onChange={handleChange} label="hello">
        <MenuItem value={t("selectQuestionType.radio")}>
          {t("selectQuestionType.radio")}
        </MenuItem>
        <MenuItem value={t("selectQuestionType.checkbox")}>
          {t("selectQuestionType.checkbox")}
        </MenuItem>
        <MenuItem value={t("selectQuestionType.select")}>
          {t("selectQuestionType.select")}
        </MenuItem>
        <MenuItem value={t("selectQuestionType.shortAnswer")}>
          {t("selectQuestionType.shortAnswer")}
        </MenuItem>
        <MenuItem value={t("selectQuestionType.longAnswer")}>
          {t("selectQuestionType.longAnswer")}
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default QuestionTypeSelection;
