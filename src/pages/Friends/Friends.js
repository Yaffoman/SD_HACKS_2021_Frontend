import React from "react";
import PieChart from "../../components/Charts/PieChart";
import LineChart from "../../components/Charts/LineChart";
import BarChart from "../../components/BarChart/BarChart";
import AreaChart from "../../components/Charts/AreaChart";
import { Grid, Typography } from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import {amber} from "@material-ui/core/colors";
import teal from "@material-ui/core/colors/teal";

class FriendBox extends React.Component{
    data = [
        {label: "Utilities", value: this.props.stats['house']},
        {label: "Transportation", value: this.props.stats['travel']},
        {label: "Food", value:this.props.stats['food']},
        {label: "Misc", value:this.props.stats['misc']}
    ]
    render(){
        return (
            <div>
                <Typography variant={"body1"}>{this.props.name}</Typography>
                <PieChart height={300} data={this.data}/>
            </div>
        )
    }
}


class FriendsComponent1 extends React.Component{
    friends = ["Tommy", "You", "Sarah", "Josh"]

    stats = [{
        total: 22,
        food: 10,
        travel: 5,
        house: 2,
        misc: 6
        },
        {total: 50,
        food: 10,
        travel: 20,
        house: 30,
        misc: 10
        },
        {
        total: 75,
        food: 10,
        travel: 20,
        house: 30,
        misc: 10
        },
        {
        total: 20,
        food: 8,
        travel: 2,
        house: 5,
        misc: 5
    }]
    render(){
        return(
            this.friends.map((element, index) => {
                if(index < 2)
                    return <Grid item><FriendBox name={element} stats={this.stats[index]}/></Grid>
        }))
    }
}


class FriendsComponent2 extends React.Component{
    friends = ["Tommy", "You", "Sarah", "Josh"]

    stats = [{
        total: 22,
        food: 10,
        travel: 5,
        house: 2,
        misc: 6
    },
        {total: 50,
            food: 10,
            travel: 20,
            house: 30,
            misc: 10
        },
        {
            total: 75,
            food: 10,
            travel: 20,
            house: 30,
            misc: 10
        },
        {
            total: 20,
            food: 8,
            travel: 2,
            house: 5,
            misc: 5
        }]
    render(){
        return(
            this.friends.map((element, index) => {
                if(index > 1)
                    return <Grid item><FriendBox name={element} stats={this.stats[index]}/></Grid>
            }))
    }
}


export default function Friends() {
    return (
        <div style={{
            background: amber[50],
            height: '200vh'
        }}>
            <Typography variant={'h4'} color={"primary"}>Friends Ranking</Typography>
            <BarChart people={["Sarah", "You", "Tommy", "Josh"]} values={[75,50,22,20]}/>
            <Grid container direction={"column"} spacing={5}>
                <Grid item container direction={"row"} spacing={5}>
                    <FriendsComponent1 />
                </Grid>
                <Grid item container direction={"row"} spacing={5}>
                    <FriendsComponent2 />
                </Grid>
            </Grid>
        </div>
    );
}