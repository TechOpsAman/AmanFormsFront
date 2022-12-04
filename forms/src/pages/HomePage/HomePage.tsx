import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { iSurvey } from "../../interfaces/iSurvey";
import pic from "../../assets/th.png";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useTranslation } from "react-i18next";
import { getAll } from "../../data/axios/questionsService";

export default function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [surveys, setSurveys] = useState<iSurvey[]>([]);

  const [currSurveys, setCurrSurveys] = useState<iSurvey[]>(surveys);

  const filterSurveys = (filter: any): void => {
    if (filter.length === 0) setCurrSurveys(surveys);
    else
      setCurrSurveys(
        surveys.filter((survey) => survey.surveyName.includes(filter))
      );
  };

  const handleCardClick = (survey: iSurvey) => {
    navigate("/createSurvey", {
      state: {
        survey: survey,
      },
    });
  };

  const handleAddSurvey = () => {
    const newSurvey = {
      id: "123456123456123456123456",
      creatorId: "123456123456123456123456",
      surveyName: "",
      content: [],
      surveyDescription: "",
    };
    surveys.push(newSurvey); //add survey to backend effect
    navigate("/createSurvey", {
      state: {
        survey: newSurvey,
      },
    });
  };

  useEffect(() => {
    const getSurveys = async () => {
      const groups = (await getAll()) || [];
      setSurveys(groups);
      setCurrSurveys(groups)
    };

    getSurveys();
  }, []);

  return (
    <Box>
      <Box
        sx={{
          mt: 0,
          display: "flex",
          justifyContent: "right",
          mr: 10,
          ml: 30,
          pt: 5,
          fontSize: "2rem",
          mb: 4,
        }}
      >
        <Autocomplete
          freeSolo
          disablePortal
          options={surveys.map((survey) => survey.surveyName)}
          sx={{ width: 300, mr: 1 }}
          onInputChange={(event, inputValue) => {
            filterSurveys(inputValue);
          }}
          renderInput={(params) => (
            <Box
              dir="rtl"
              className="survey-answer-unit_page_conter"
              sx={{
                bgcolor: "white",
                borderRadius: 30,
                p: 0,
                m: 0,
                mt: 0.6,
                mr: 2,
              }}
            >
              <TextField
                {...params}
                placeholder={t("searchSurveys")}
                variant="standard"
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                }}
                sx={{ mt: 0.6, pr: 1, maxWidth: 250 }}
              />
            </Box>
          )}
        />

        <Box component="span" sx={{ fontSize: "2rem" }}>
          {t("lastSurveys")}
        </Box>
      </Box>
      
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "right",
            mx: 10,
          }}
        >
          {currSurveys.map((survey, index) => {
            return (
              <Card
                key={index}
                sx={{
                  width: 200,
                  minHeight: 250,
                  boxShadow: 4,
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleCardClick(survey);
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={pic}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    {survey.surveyName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "right" }}
                  >
                    פתחתי לאחרונה 9 בנוב׳ 2022
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      
      <IconButton
        sx={{
          boxShadow: 7,
          bgcolor: "white",
          position: "absolute",
          ml: 3,
          bottom: 25,
          color: "#3c87ef",
          "&:hover": {
            bgcolor: "white",
          },
        }}
        onClick={handleAddSurvey}
      >
        <AddIcon fontSize="large" />
      </IconButton>
    </Box>
  );
}
