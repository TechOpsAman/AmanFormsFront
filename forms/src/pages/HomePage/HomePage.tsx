import { Box } from "@mui/material";
import { makeStyles } from '@mui/styles';

export default function HomePage() {
  const classes = useStyles();
  return (
    <Box>
      <Box component="h1" className={classes.homeContainer}>
        hi im daniel
      </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  homeContainer: {
    marginTop: 0,
    display: "flex",
    justifyContent: "center",
  }
})