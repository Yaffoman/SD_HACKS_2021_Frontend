import React from 'react';
import {Router} from 'react-router-dom'

import {Paper, Grid,Button, Card, CardContent, CardActions, Typography, createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import teal from "@material-ui/core/colors/teal";
import amber from "@material-ui/core/colors/amber";
import {NativeSelect, InputLabel} from "@material-ui/core";
import Input from "@material-ui/core/Input";
import {CheckBox} from "@material-ui/icons";
import Checkbox from "@material-ui/core/Checkbox";

const car_types = [
    'Car',
    'Bus',
    'Train',
    'Rideshare',
    'E-Scooter',
    'Motorcycle'
]

const city_types = [
    'Urban',
    'Rural',
    'Suburban'
]


let selected = car_types[0]
let number = 0
let carpool = false

let travel_state = {
    'flights_per_year' : 0,
    selected : number,
    'carpool' : carpool,
}
class GridFragment extends React.Component {
    state = {
        checked: true
    }
    render(){
        return(
            <><Grid container direction={"column"} spacing={5} justify={"space-between"}>
                <Grid container direction={"row"} spacing={5} alignItems={"flex-end"} justify={"center"}>
                    <Grid item>
                        <InputLabel htmlFor={`select${this.props.title}`}>Select Type</InputLabel>
                        <NativeSelect id={`select${this.props.title}`} onChange={(event)=>{
                            selected = event.target.value
                        }}>
                            {car_types.map((element) => {
                                return <option value={element} key={`option_${element}`}>{element}</option>
                            })}
                        </NativeSelect>
                    </Grid>
                    <Grid item>
                        <Input type="number" id={`input${this.props.title}`} placeholder={"Enter Miles per month"} onChange={(event)=>{
                            number = event.target.value
                        }}/>
                    </Grid>
                    <Grid item>
                        <Typography variant={"body1"}>Carpool?</Typography>

                        <Checkbox
                            checked={this.state.checked}
                            onChange={(event) => {
                                carpool = event.target.checked;
                                this.state.checked = carpool
                                this.setState(this.state)
                            }}
                            name="checkedB"
                            color="primary"
                        />
                    </Grid>
                </Grid>

                <Grid item container direction={"row"} spacing={5} alignItems={"center"} justify={"center"}>
                    <Grid item xs={3}>
                        <Input inputProps={{style: {textAlign: 'end'}}} fullWidth id={`input${this.props.title}`} placeholder={"Flights Per Year (roundtrip)"} onChange={(event)=>{
                            travel_state["flights_per_year"] = event.target.value
                        }}/>
                    </Grid>
                </Grid>
            </Grid>
            </>
        )
    }
}


export default function Transportation({updateStore, nextStep}) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'column',
            height: '100vh'
        }}>
        <GridFragment />
        <Button variant="contained" color="primary" onClick={() => {
            travel_state[selected] = number
            travel_state['carpool'] = carpool
            updateStore(travel_state);
            nextStep();
        }}>
            Next
        </Button>
        </div>
    );
}
