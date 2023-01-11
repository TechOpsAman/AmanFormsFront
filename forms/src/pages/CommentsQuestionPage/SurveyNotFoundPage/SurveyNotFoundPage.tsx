import { Card } from "@mui/material";
import "./SurveyNotFoundPage.scss";

const SurveyNotFoundPage = () => {
  // keep working on it (should have massage and upper navbar)
  return (
    <div className="survey-not-found-page-main">
      <Card
        style={{ borderRadius: "30px" }}
        className="survey-not-found-page-message-box"
      >
        <h2 dir="rtl">הסקר לא נמצא</h2>
      </Card>
    </div>
  );
};

export default SurveyNotFoundPage;
