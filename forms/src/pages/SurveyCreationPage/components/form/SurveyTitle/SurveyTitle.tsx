import "./SurveyTitle.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { updateSurvey } from "../../../../../services/questionsService";
import { TextField } from "@mui/material";

function SurveyTitle({
  surveyName,
  surveyDescription,
  surveyId,
}: {
  surveyName: string;
  surveyDescription: string;
  surveyId: string;
}) {
  const { t } = useTranslation();
  const [title, setTitle] = useState(surveyName);
  const [description, setDescription] = useState(surveyDescription);

  return (
    <div className="survey-title-container">
      <TextField
        type="text"
        placeholder="סקר ללא כותרת"
        className="survey-title-text-input_survey_name"
        inputProps={{
          maxLength: 35,
          style: {
            fontSize: "2.5rem",
            marginTop: 8,
          },
        }}
        dir="rtl"
        value={title}
        // label={title}
        variant="standard"
        onChange={(e) => {
          //console.log(e.target.value);
          setTitle(e.target.value);
          updateSurvey(surveyId, e.target.value);
        }}
      />
      <TextField
        type="text"
        className="survey-title-text-input_survey_description"
        placeholder="תיאור הסקר"
        variant="standard"
        dir="rtl"
        inputProps = {{
          maxLength: 90,
        }}
        sx={{ marginTop: 8 }}
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          updateSurvey(surveyId, title, e.target.value);
        }}
      />
    </div>
  );
}

export default SurveyTitle;
