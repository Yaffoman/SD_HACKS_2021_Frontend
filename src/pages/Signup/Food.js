import React from "react";

import {
  Grid,
  Button,
  Typography,
} from "@material-ui/core";
import teal from "@material-ui/core/colors/teal";
import amber from "@material-ui/core/colors/amber";
import { NativeSelect, InputLabel } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

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
let food_state = {}

class GridFragment extends React.Component {
  render() {
    let food_inputs = food_types.map((element, index) => {
      return (
          <Grid
            container
            item
            direction="row"
            alignItems="center"
            justify="center"
            spacing={5}
            key={element}
          >
            <Grid item>
              <InputLabel htmlFor={`food_${index}`}>{element}:</InputLabel>
            </Grid>

            <Grid item>
              <Input type={'number'} id={`food_${index}`} placeholder={food_amounts[index]} onChange={(event)=>{
                  food_state[food_types[index]] = event.target.value
              }}>{}</Input>
            </Grid>
          </Grid>
      );
    });

      return (
      <>
        <Typography variant={"h4"} color={"primary"}>
          Which of the following best describes your eating habits?
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


export default function Transportation({ nextStep, updateStore }) {
    const [value, setValue] = React.useState('heavy_meat');
    const handleChange = (event) => {
        food_state['diet'] = event.target.value
        setValue(event.target.value);
    };
  return (
      <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
          height: "100vh",
      }}>
        {/*<GridFragment title={"food"}/>*/}

              <Typography variant={"h4"} color={"primary"}>
                  Which of the following best describes your eating habits?
              </Typography>

              <FormControl component="fieldset">
                  <FormLabel component="legend">Diets</FormLabel>
                  <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                      <FormControlLabel value="heavy_meat" control={<Radio />} label="Heavy Meat Eater" />
                      <FormControlLabel value="medium_meat" control={<Radio />} label="Medium Meat Eater" />
                      <FormControlLabel value="light_meat" control={<Radio />} label="Light Meat Eater" />
                      <FormControlLabel value="pescatarian" control={<Radio />} label="Pescatarian" />
                      <FormControlLabel value="vegetarian" control={<Radio />} label="Vegetarian" />
                      <FormControlLabel value="vegan" control={<Radio />} label="Vegan" />
                  </RadioGroup>
              </FormControl>
        <Button variant="contained" color="primary" onClick={()=>{
            updateStore(food_state);
            nextStep();
        }}>
          Next
        </Button>
      </div>
  );
}
