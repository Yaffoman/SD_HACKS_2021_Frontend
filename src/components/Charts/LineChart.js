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
import useColors from '../../hooks/useColors';
import { randomColor } from '../../utils/index';

/**
 * Needs to be in the following format:
 * [
 *   date: "2/20/2021",
 *   You: Number,
 * ]
 */
export default function Chart({ data, width, height }) {
  const tealColor = teal[500];
  const colors = useColors().filter(color => color != tealColor);
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
      {lineKeys.map((key, i) => {
        const color =
          key === "You"
            ? tealColor :
          i >= colors.length
            ? randomColor()
          : colors[i];

        return (
          <Line
            type="monotone"
            dataKey={key}
            stroke={color}
            activeDot={{ r: key === "You" ? 6 : 2 }}
            key={key}
          />
        );
      })}
    </LineChart>
  );
}
