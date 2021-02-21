import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
export default function Chart({ data, width, height }) {
  const tealColor = teal[500];
  const amberColor = amber[300];
  const [lineKeys, setLineKeys] = useState([]);

  useEffect(() => {
    const keys = { ...data[0] };
    delete keys.date;

    setLineKeys(Object.keys(keys));
  }, []);

  return (
    <LineChart
      width={width !== undefined ? width : 400}
      height={height !== undefined ? height : 240}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      {lineKeys.map((key) => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
          16
        )}`;

        return (
          <Line
            type="monotone"
            dataKey={key}
            stroke={key === "You" ? tealColor : randomColor}
            activeDot={{ r: key === "You" ? 6 : 2 }}
            key={key}
          />
        );
      })}
    </LineChart>
  );
}
