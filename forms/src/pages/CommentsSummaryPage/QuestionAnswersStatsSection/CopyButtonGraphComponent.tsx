import "./CopyButtonGraphComponent.scss";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton } from "@material-ui/core";

function CopyButtonGraphComponent({
  graphToCopyRef,
}: {
  graphToCopyRef: React.RefObject<unknown>;
}) {
  return (
    <div className="copy-button-graph-component-main">
      <IconButton>
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
