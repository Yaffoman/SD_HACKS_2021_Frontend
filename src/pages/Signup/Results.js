import React from "react";

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
        const world_emissions = 4
        const usa_emissions = 20
        let total_emissions = this.props.emission
        let data = [
            {label: "gas", value: this.props.gas},
            {label: "electricity", value: this.props.electricity},
            {label: "transportation", value: this.props.transportation},
            {label: "food", value:this.props.food}
        ]
        let goal = total_emissions * 0.88
        return (
            <>
                <Typography variant={"h4"} color={"primary"}>
                    How Do You Stack Up?
                </Typography>
                <Grid container direction={"row"}>
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


export default function Results({ states }) {
    const history = useHistory();
    let resp = fetch('/user_emission')
    console.log(resp)
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "column",
            height: "100vh",
        }}>
            <ChartsFragment emission={10} electricity={5} gas={4} food={12} transportation={33}/>
            <Button variant={"contained"} onClick={()=>{
                history.push('/')
            }}>Enter Your Dashboard</Button>
        </div>
    );
}
