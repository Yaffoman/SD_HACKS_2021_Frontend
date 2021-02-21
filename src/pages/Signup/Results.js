import React from "react";

import {
    Typography,
} from "@material-ui/core";
import BarChart from "../../components/BarChart/BarChart";
import PieChart from "../../components/Charts/PieChart";
import Grid from "@material-ui/core/Grid";

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
        return (
            <>
                <Typography variant={"h4"} color={"primary"}>
                    How Do You Stack Up?
                </Typography>
                <Grid container direction={"row"}>
                    <Grid item><BarChart people={["You", "USA Average", "World Average"]} values={[total_emissions, usa_emissions, world_emissions]} /></Grid>
                    <Grid item><PieChart data={data}/></Grid>
                </Grid>
            </>
        );
    }
}


export default function Results({ states }) {

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "column",
            height: "100vh",
        }}>
            <ChartsFragment emission={10} electricity={5} gas={4} food={12} transportation={33}/>
        </div>
    );
}
