import DownloadIcon from "@mui/icons-material/Download";
import { IconButton } from "@mui/material";
import { CSVLink } from "react-csv";
import "./CsvDownloadButton.scss";

function CsvDownloadButton({ data }: { data: Array<string[]> }) {
  return (
    <div className="csv-download-button-main">
      <IconButton onClick={() => {}}>
        <CSVLink data={data} filename={"my-file.csv"} />
        <span className="csv-download-text">הורדה</span>
        <DownloadIcon fontSize="small" style={{ color: "blue" }}></DownloadIcon>
      </IconButton>
    </div>
  );
}

export default CsvDownloadButton;
