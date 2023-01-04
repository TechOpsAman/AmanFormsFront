import "./CopyButtonGraphComponent.scss";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton } from "@material-ui/core";

function CopyButtonGraphComponent({
  graphToCopyRef,
  takeScreenshot,
}: {
  graphToCopyRef: React.RefObject<unknown>;
  takeScreenshot: () => void;
}) {
  return (
    <div className="copy-button-graph-component-main">
      <IconButton onClick={takeScreenshot}>
        <span className="copy-graph-text">העתקה</span>
        <ContentCopyIcon
          fontSize="small"
          style={{ color: "blue" }}
        ></ContentCopyIcon>
      </IconButton>
    </div>
  );
}

export default CopyButtonGraphComponent;
