import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { iSurvey } from "../../interfaces/iSurvey";
import pic from "../../assets/th.png";

export default function HomePage() {
  const mock: iSurvey[] = [
    {
      id: "123456123456123456123456",
      creatorId: "123456123456123456123456",
      surveyName: "סקר 1",
      content: [],
    },
    {
      id: "123456123456123456123456",
      creatorId: "123456123456123456123456",
      surveyName: "סקר 1",
      content: [],
    },
    {
      id: "123456123456123456123456",
      creatorId: "123456123456123456123456",
      surveyName: "סקר 1",
      content: [],
    },
    {
      id: "123456123456123456123456",
      creatorId: "123456123456123456123456",
      surveyName: "סקר 1",
      content: [],
    },
    {
      id: "123456123456123456123456",
      creatorId: "123456123456123456123456",
      surveyName: "סקר 1",
      content: [],
    },
    {
      id: "123456123456123456123456",
      creatorId: "123456123456123456123456",
      surveyName: "סקר 1",
      content: [],
    },
    {
      id: "123456123456123456123456",
      creatorId: "123456123456123456123456",
      surveyName: "סקר 1",
      content: [],
    },
    {
      id: "123456123456123456123456",
      creatorId: "123456123456123456123456",
      surveyName: "סקר 1",
      content: [],
    },
    {
      id: "123456123456123456123456",
      creatorId: "123456123456123456123456",
      surveyName: "סקר 1",
      content: [],
    },
    {
      id: "123456123456123456123416",
      creatorId: "123456123456123416123456",
      surveyName: "סקר 2",
      content: [],
    },
    {
      id: "123456123456123111123456",
      creatorId: "123456123456123456123456",
      surveyName: "סקר 3",
      content: [],
    },
    {
      id: "123456123456123456111456",
      creatorId: "123456123456123456123456",
      surveyName: "סקר 4",
      content: [],
    },
  ];

  return (
    <Box>
      <Box
        component="h1"
        sx={{ mt: 0, display: "flex", justifyContent: "center" }}
      >
        hi im daniel
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          mx: 10,
        }}
      >
        {mock.map((survey, index) => {
          return (
            <Card key={index} sx={{ width: 200, minHeight: 250, boxShadow: 4 }}>
              <CardActions onClick={() => {console.log(1)}}>
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
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
