import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import teal from "@material-ui/core/colors/teal";
import amber from "@material-ui/core/colors/amber";

/**
 * Needs to be in the following format:
 * [
 *   date: "2/20/2021",
 *   You: Number,
 *   National Avg: Number,
 * ]
 */
export default function Chart({ data }) {
  const tealColor = teal[500]
  const amberColor = amber[300]

  return (
    <LineChart
      width={400}
      height={240}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="You"
        stroke={tealColor}
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="National Avg" stroke={amberColor} />
    </LineChart>
  );
}