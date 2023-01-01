import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { iSurvey } from "../../interfaces/iSurvey";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useTranslation } from "react-i18next";
import { getAll, postSurvey } from "../../services/questionsService";
import ArticleIcon from "@mui/icons-material/Article";
import pic from "../../assets/forms.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { deleteSurveyById } from "../../services/compositorService";

export default function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [menu, setMenu] = useState<null | HTMLElement>(null);
  const [currSurvey, setCurrSurvey] = useState<iSurvey>();
  const menuOpen = Boolean(menu);
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);
  const [surveys, setSurveys] = useState<iSurvey[]>([]);
  const [currSurveys, setCurrSurveys] = useState<any[]>(surveys);
  const [render, setRender] = useState(false);

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

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenu(null);
  };

  const handleDeleteSurvey = () => {
    deleteSurveyById((currSurvey as iSurvey).id as string);
    setCurrSurvey(undefined);
    setRender(!render);
  };

  useEffect(() => {
    const getSurveys = async () => {
      const groups = (await getAll()) || [];
      setSurveys(groups);
      setCurrSurveys(groups);
    };

    getSurveys();
  }, [render]);

  return (
    <Box>
      <Box sx={{ mr: 10 }}>
        <Box
          sx={{
            mt: 0,
            display: "flex",
            justifyContent: "right",
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
            sx={{ width: 300 }}
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
                  placeholder={t("searchSurveys") as string}
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
                    onClick={() => {
                      handleCardClick(survey);
                    }}
                  />
                  <Stack
                    onClick={() => {
                      handleCardClick(survey);
                    }}
                    direction="row-reverse"
                    spacing={1}
                    sx={{ height: 75 }}
                  >
                    <ArticleIcon
                      sx={{
                        pt: 0.5,
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
                  <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                    <Typography>
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={(event) => {
                          handleOpenMenu(event);
                          setCurrSurvey(survey);
                        }}
                      >
                        <MoreVertIcon />
                      </IconButton>
                    </Typography>
                    <Box>
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
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Box>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          anchorEl={menu}
          open={menuOpen}
          onClose={handleCloseMenu}
        >
          <MenuItem
            onClick={() => {
              handleCloseMenu();
              handleCardClick(currSurvey as iSurvey);
            }}
          >
            {t("editSurvey")}
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCloseMenu();
              handleDialogOpen();
            }}
          >
            {t("deleteSurvey")}
          </MenuItem>
        </Menu>
        <Dialog
          open={dialogOpen}
          onClose={handleDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" sx={{ direction: "rtl" }}>
            {t("removeSurveyDialog")}
          </DialogTitle>
          <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={handleDialogClose} variant="outlined">
              {t("no")}
            </Button>
            <Button
              onClick={() => {
                handleDialogClose();
                handleDeleteSurvey();
              }}
              variant="outlined"
              autoFocus
            >
              {t("yes")}
            </Button>
          </DialogActions>
        </Dialog>
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
