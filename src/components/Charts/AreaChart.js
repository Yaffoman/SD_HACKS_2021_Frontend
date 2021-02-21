import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import teal from "@material-ui/core/colors/teal";
import amber from "@material-ui/core/colors/amber";

export default function App({ data, width, height }) {
  const tealColor = teal[500];
  const amberColor = amber[300];
  const [lineKeys, setLineKeys] = useState([]);

  useEffect(() => {
    const keys = { ...data[0] };
    delete keys.date;
    const arrKeys = Object.keys(keys);
    const index = arrKeys.findIndex((x) => x === "You");
    const t = arrKeys[index];
    arrKeys[index] = arrKeys[0];
    arrKeys[0] = t;

    setLineKeys(arrKeys);
  }, []);

  return (
    <AreaChart
      width={width !== undefined ? width : 400}
      height={height !== undefined ? height : 200}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      {lineKeys.map((key, i) => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
          16
        )}`;

        return (
          <Area
            type="monotone"
            dataKey={key}
            stroke={key === "You" ? tealColor : randomColor}
            stackId={i + 1}
            fill={key === "You" ? tealColor : randomColor}
            key={key}
          />
        );
      })}
    </AreaChart>
  );
}
