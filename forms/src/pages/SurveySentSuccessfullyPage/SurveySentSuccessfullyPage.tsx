import { Card } from "@mui/material";
import "./SurveySentSuccessfullyPage.scss";

const SurveySentSuccessfullyPage = () => {
  // keep working on it (should have massage and upper navbar)
  return (
    <div className="survey-sent-successfully-page-main">
      <Card
        style={{ borderRadius: "30px" }}
        className="survey-sent-successfully-page-message-box"
      >
        <h2 dir="rtl">תגובתך נשלחה בהצלחה!</h2>
      </Card>
    </div>
  );
};

export default SurveySentSuccessfullyPage;
