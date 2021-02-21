import React from "react";
import { Router } from "react-router-dom";

import {
  Paper,
  Grid,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core";
import teal from "@material-ui/core/colors/teal";
import amber from "@material-ui/core/colors/amber";
import { NativeSelect, InputLabel } from "@material-ui/core";
import Input from "@material-ui/core/Input";

const food_types = [
  "Beef",
  "Lamb",
  "Pork",
  "Chicken",
  "Cheese",
  "Chocolate",
  "Coffee",
];

const food_amounts = [
    "Amount in lbs",
    "Amount in lbs",
    "Amount in lbs",
    "Amount in lbs",
    "Amount in lbs",
    "Amount in oz",
    "Amount in Cups",
  ];

class EmissionSource extends React.Component {
  render() {
    let food_inputs = food_types.map((element, index) => {
      return (
          <Grid
            container
            item
            direction="row"
            alignItems="center"
            justify="center"
          >
            <Grid item xs={1.8}>
              <InputLabel htmlFor={`food_${index}`}>{element}:</InputLabel>
            </Grid>

            <Grid item xs={3}>
              <Input type={'number'} id={`food_${index}`} placeholder={food_amounts[index]}>{}</Input>
            </Grid>
          </Grid>
      );
    });

    return (
      <>
        <Typography variant={"h4"} color={"primary"}>
          Enter Estimated Amount of Each Food Per Week
        </Typography>

        <Grid
          container
          direction="column"
          spacing={5}
          alignItems="center"
        >
          {food_inputs}
        </Grid>
      </>
    );
  }
}

class Page extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <EmissionSource title={"Food"} />
      </div>
    );
  }
}

export default function Transportation({ nextStep, updateStore }) {
  return (
      <div>
        <Page />
        <Button variant="contained" color="primary" onClick={nextStep}>
          Next
        </Button>
      </div>
  );
}
