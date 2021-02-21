import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import styles from "./Progress.module.css";

export default function Progress({ percentage }) {
  return (
    <Grid container justify="center" alignItems="center" alignContent="center">
      <Box position="relative" display="inline-flex">
        <CircularProgress
          color={"secondary"}
          variant={"determinate"}
          value={percentage}
        />
      </Box>
      <div className={styles.label}>
        <Box position="relative" alignItems="center" justifyContent="center">
          <Typography
            variant="subtitle1"
            component="div"
            color="secondary"
          >{`${Math.round(percentage)}%`}</Typography>
        </Box>
      </div>
    </Grid>
  );
}
