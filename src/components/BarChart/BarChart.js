import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const bar_colors = ["#8888d8", "#6874a8", "#126428", ]

export default function MyChart({people, values}) {
    let dictionary = {}
    people.forEach((element, index) => {
        dictionary[element] = values[index]
    })
    let data = [dictionary]
    console.log(data)
    return (
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />

            <YAxis />
            <Tooltip />
            <Legend />
            {people.map((element, index) => {
                let randomColor = Math.floor(Math.random()*16777215).toString(16);

                return <Bar dataKey={element} fill={'#' + randomColor} />

            })
            }
        </BarChart>
    );
}
