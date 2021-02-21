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
                >
                    <Grid item>
                        <InputLabel htmlFor={`food_${index}`}>{element}:</InputLabel>
                    </Grid>

                    <Grid item>
                        <Input type={'number'} id={`food_${index}`} placeholder={food_amounts[index]} onChange={(event)=>{
                            food_state[food_amounts[index]] = event.target.value
                        }}>{}</Input>
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


export default function Results({ states }) {
    let arr = [];

    for (let key in states) {
        arr.push(`${key} : ${states[key]}`);
    }
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "column",
            height: "100vh",
        }}>

            {arr.map((element, index)=>{
                return <p key={index}>{element}</p>
            })}
        </div>
    );
}
