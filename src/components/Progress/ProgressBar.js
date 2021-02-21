import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import styles from "./Progress.module.css";

export default function Progress({ percentage }) {
  return (
    <Grid container justify="center" alignItems="center" alignContent="center" direction="column">
      <Box position="relative" width="100%" m={2} display="inline-flex">
        <div className={styles.progressBarWrapper}>
          <LinearProgress
            color={"primary"}
            variant={"determinate"}
            value={percentage}
            className={styles.progressBar}
          />
        </div>
      </Box>
      <div className={styles.label}>
        <Box position="relative" alignItems="center" justifyContent="center">
          <Typography
            variant="subtitle1"
            component="div"
            color="primary"
          >You've completed {`${Math.round(percentage)}%`} of your goal so far!</Typography>
        </Box>
      </div>
    </Grid>
  );
}
