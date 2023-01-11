import "./CopyButtonGraphComponent.scss";
import DownloadIcon from "@mui/icons-material/Download";
import { IconButton } from "@material-ui/core";

function CopyButtonGraphComponent({
  graphToCopyRef,
  takeScreenshot,
}: {
  graphToCopyRef: React.RefObject<any>;
  takeScreenshot: (graphToCopy: React.MutableRefObject<HTMLElement>) => void;
}) {
  return (
    <div className="copy-button-graph-component-main">
      <IconButton
        onClick={() => {
          takeScreenshot(graphToCopyRef);
        }}
      >
        <span className="copy-graph-text">הורדה</span>
        <DownloadIcon fontSize="small" style={{ color: "blue" }}></DownloadIcon>
      </IconButton>
    </div>
  );
}

export default CopyButtonGraphComponent;
