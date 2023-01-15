import { Button } from "@mui/material";
import "./CommentButton.scss";

function CommentButton({
  handleUnitClicked,
  commentTypeToHandle,
  commentTypeName,
  isClicked,
}: {
  handleUnitClicked: (value: string) => void;
  commentTypeToHandle: string;
  commentTypeName: string;
  isClicked: boolean;
}) {
  return (
    <div>
      <Button
        sx={{
          width: 100,
          padding: 1,
          margin: 2,
          fontSize: 20,
          fontWeight: 600,
          color: "black",
        }}
        onClick={() => {
          handleUnitClicked(commentTypeToHandle);
        }}
      >
        <div className="comment-button-title-div">
          <span>{commentTypeName}</span>
          {isClicked ? (
            <div className="comment-button-underscore-line"></div>
          ) : null}
        </div>
      </Button>
    </div>
  );
}

export default CommentButton;
