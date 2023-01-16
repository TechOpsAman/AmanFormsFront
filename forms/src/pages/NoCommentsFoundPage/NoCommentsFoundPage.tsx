import { Card } from "@mui/material";
import "./NoCommentsFoundPage.scss";

const NoCommentsFoundPage = () => {
  return (
    <div className="no-comments-found-page-main">
      <Card
        style={{ borderRadius: "30px" }}
        className="no-comments-found-page-message-box"
      >
        <h2 dir="rtl">לא נמצאו תגובות</h2>
      </Card>
    </div>
  );
};

export default NoCommentsFoundPage;
