import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { iSurvey } from "../../interfaces/iSurvey";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import { getAll, postSurvey } from "../../services/questionsService";
import ArticleIcon from "@mui/icons-material/Article";
import pic from "../../assets/forms.png";

export default function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const [surveys, setSurveys] = useState<iSurvey[]>([]);

  const [currSurveys, setCurrSurveys] = useState<any[]>(surveys);

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

  const handleAddSurvey = async () => {
    const newSurvey = await postSurvey({
      id: "123456123456123456123456",
      creatorId: "123456123456123456123456",
      surveyName: t("newSurvey"),
      content: [],
      surveyDescription: t("surveyDescription"),
    });
    console.log(newSurvey);
    await surveys.push(newSurvey);
    navigate("/createSurvey", {
      state: {
        survey: newSurvey,
      },
    });
  };

  const getDate = (date: string) => {
    let dateArr = date.split("-");
    const year = dateArr[0];
    const month = dateArr[1];
    dateArr = dateArr[2].split("T");
    const day = dateArr[0];
    dateArr = dateArr[1].split(":");
    const hour = parseInt(dateArr[0]) + 2;
    const minute = dateArr[1];
    dateArr = dateArr[2].split(".");
    const seconds = dateArr[0];

    return [`${day}.${month}.${year}`, `${hour}:${minute}:${seconds}`];
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const getSurveys = async () => {
      const groups = (await getAll()) || [];
      setSurveys(groups);
      setCurrSurveys(groups);
    };

    getSurveys();
  }, []);

  return (
    <Box width="100vh" minWidth="90rem">
      <Box >
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
                  width: 280,
                  height: 330,
                  boxShadow: 4,
                  cursor: "pointer",
                  borderRadius: 3,
                }}
                onClick={() => {
                  handleCardClick(survey);
                }}
              >
                <CardContent>
                  <CardMedia
                    component="img"
                    height="140"
                    image={pic}
                    alt="green iguana"
                    sx={{
                      border: 1,
                      borderRadius: 1,
                      borderColor: "#568ea8",
                      mb: 3,
                    }}
                  />
                  <Stack
                    direction="row-reverse"
                    spacing={1}
                    sx={{ height: 75 }}
                  >
                    <ArticleIcon
                      sx={{
                        pt: 0.5,
                        display: { xs: "none", md: "flex" },
                        color: "#4491fd",
                      }}
                      fontSize="large"
                    />
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ textAlign: "right" }}
                    >
                      {survey.surveyName}
                    </Typography>
                  </Stack>

                  <hr />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "right" }}
                  >
                    {t("lastOpened") + " "}
                    {getDate(survey.lastUpdated)[0]}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "right" }}
                  >
                    {t("atTime")}
                    {getDate(survey.lastUpdated)[1]}
                  </Typography>
                  {/* <Typography>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    <MenuItem onClick={handleCloseNavMenu}></MenuItem>
                  </Menu>
                </Typography> */}
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
    </Box>
  );
}
