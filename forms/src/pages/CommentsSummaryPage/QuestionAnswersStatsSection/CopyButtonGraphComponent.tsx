import "./CopyButtonGraphComponent.scss";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton } from "@material-ui/core";

function CopyButtonGraphComponent({
  graphToCopyRef,
  takeScreenshot,
  onClickFunc,
}: {
  graphToCopyRef: React.RefObject<any>;
  takeScreenshot: (graphToCopy: React.MutableRefObject<HTMLElement>) => void;
  onClickFunc: any;
}) {
  return (
    <div className="copy-button-graph-component-main">
      <IconButton
        onClick={() => {
          takeScreenshot(graphToCopyRef);
        }}
      >
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
