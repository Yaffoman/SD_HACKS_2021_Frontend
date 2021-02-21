import React, {useEffect, useState} from "react";

import {
    Button,
    Typography,
} from "@material-ui/core";
import BarChart from "../../components/BarChart/BarChart";
import PieChart from "../../components/Charts/PieChart";
import Grid from "@material-ui/core/Grid";
import { Link as RouterLink, useHistory } from "react-router-dom";

class ChartsFragment extends React.Component {

    render() {
        //In tons per year
        let world_emissions = 4
        let usa_emissions = 20
        let total_emissions = this.props.emission
        let data = [
            {label: "Utilities", value: this.props.utilities},
            {label: "Transportation", value: this.props.transportation},
            {label: "Food", value:this.props.food},
            {label: "Misc", value:this.props.misc}
        ]
        let goal = total_emissions * 0.88
        if (total_emissions == 0){
            world_emissions = 0
            usa_emissions = 0
        }
        return (
            <>
                <Typography variant={"h4"} color={"primary"}>
                    How Do You Stack Up?
                </Typography>
                <Grid container direction={"row"} alignItems={"center"}>
                    <Grid item><BarChart people={["You", "USA Average", "World Average"]} values={[total_emissions, usa_emissions, world_emissions]} /></Grid>
                    <Grid item><PieChart data={data}/></Grid>
                    <Grid item>
                        <Typography variant={"h4"}>
                            We recommend your initial goal to be: <b>{goal} kg/month</b> based on your current consumption and national averages
                        </Typography>
                    </Grid>
                </Grid>
            </>
        );
    }
}

async function getEmissions(state, setState){
    let r = await fetch('http://127.0.0.1:5000/user_emission',
        {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            }});
    console.log(r)
    let emissions = r.json()
    // kg/month

    // let footprint = emissions.carbon_footprint
    // let food = emissions.food_emissions
    // let car = emissions.car_emissions
    // let house = emissions['house_emission']

    //
    // console.log("FOLLOWING DATA")
    // console.log(footprint)
    // console.log(emissions)
    // setState(
    //     {
    //         ...state,
    //         total: footprint,
    //         food: food,
    //         travel: car,
    //         house: house
    //     }
    // )
}

export default function Results({ states }) {
    const history = useHistory();
    let [state, setState] = useState({
        total: 50,
        food: 10,
        travel: 20,
        house: 30,
        misc: 10
    })


    useEffect(() =>{
        getEmissions(state, setState)
    }, [])

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "column",
            height: "100vh",
        }}>
            <ChartsFragment emission={state.total} utilities={state.house} food={state.food} transportation={state.travel} misc={state.misc}/>
            <Button variant={"contained"} onClick={() => {
                history.push('/')
            }}>Enter Your Dashboard</Button>
        </div>
    );
}
