import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import styles from "./Progress.module.css";

export default function Progress({ percentage }) {
  return (
    <Grid container justify="center" alignItems="center" alignContent="center" direction={"column"}>
        <Grid item>
            <div className={styles.progressBarWrapper}>
              <LinearProgress
                color={"secondary"}
                variant={"determinate"}
                value={percentage}
                className={styles.progressBar}
              />
              </div>
        </Grid>
        <Grid item>
            <Typography
                variant="subtitle1"
                component="div"
                color="secondary"
            >{`${Math.round(percentage)}%`}</Typography>
    </Grid>
    </Grid>
  );
}
