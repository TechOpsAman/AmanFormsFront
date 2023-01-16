import DownloadIcon from "@mui/icons-material/Download";
import { IconButton } from "@mui/material";
import "./CsvDownloadButton.scss";

function CsvDownloadButton() {
  return (
    <div className="csv-download-button-main">
      <IconButton>
        <span className="csv-download-text">הורדה</span>
        <DownloadIcon fontSize="small" style={{ color: "blue" }}></DownloadIcon>
      </IconButton>
    </div>
  );
}

export default CsvDownloadButton;
