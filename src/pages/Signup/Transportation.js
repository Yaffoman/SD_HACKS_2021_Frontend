import React from 'react';
import {Router} from 'react-router-dom'

import {Paper, Grid,Button, Card, CardContent, CardActions, Typography, createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import teal from "@material-ui/core/colors/teal";
import amber from "@material-ui/core/colors/amber";
import {NativeSelect, InputLabel} from "@material-ui/core";
import Input from "@material-ui/core/Input";

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

const food_types = [
    'beef',
    'lamb',
    'pork',
    'chicken',
    'other'
]

const appliances_types = [
    'laundry',
    'dishwasher',
    'pool heater',
    'AC'
]

class Title extends React.Component {
  render() {
    return (
        <>
          <Typography variant={'h2'} color={"primary"}>Update Your Daily Carbon Footprint</Typography>
        </>
    )
  }
}

function renderDropDownOptions(type){
    switch(type) {
        case 'Transportation':
            return car_types.map((element) => {
                return <option value={element}>{element}</option>
            })
        case 'Food':
            return food_types.map((element) => {
                return <option value={element}>{element}</option>
            })
        case 'Appliances':
            return appliances_types.map((element) => {
                return <option value={element}>{element}</option>
            })
        case 'Misc':
            return car_types.map((element) => {
                return <option value={element}>{element}</option>
            })
    }
}

function getAmountText(type){
    switch(type){
        case 'Transportation':
            return 'Enter Mileage (mi):'
        case 'Food':
            return 'Enter Amount (oz):'
        case 'Appliances':
            return 'Enter Usage (min):'
        case 'Misc':
            return 'Enter Amount'
    }
}
class EmissionSource extends React.Component {

    render(){
        return(
            <>
                <Card variant={'outlined'} className='sourcebox'>
                    <CardContent>
                        <Grid container direction={"row"} spacing={5} alignItems={"center"} justify={"center"}>

                        <Grid item>
                            <Typography variant={'h5'} color={'textPrimary'}>
                            {this.props.title}
                            </Typography>
                        </Grid>

                        </Grid>
                        <Grid container direction={"row"} spacing={5} alignItems={"center"} justify={"center"}>
                            <Grid item>
                                <InputLabel htmlFor={`select${this.props.title}`}>Select Type</InputLabel>
                            <NativeSelect id={`select${this.props.title}`}>
                                {renderDropDownOptions(this.props.title)}
                            </NativeSelect>
                            </Grid>
                            <Grid item>
                            <div>
                            <InputLabel htmlFor={`input${this.props.title}`}>{getAmountText(this.props.title)}</InputLabel>
                            <Input id={`input${this.props.title}`} />
                            </div>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </>
        )
    }
}

class GridFragment extends React.Component {
    render() {
        return (
            <>
                <Title />

                <EmissionSource title={"Transportation"} />
        </>
        );

    };

}


class Page extends React.Component {
  render() {

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'column',
            height: '100vh'
        }}>
            <GridFragment />

        </div>
    );
  }
}

export default function Transportation({updateStore, nextStep}) {
    return (
        <div>
        <Page/>
        <Button variant="contained" color="primary" onClick={nextStep}>
            Next
        </Button>
        </div>
    );
}
