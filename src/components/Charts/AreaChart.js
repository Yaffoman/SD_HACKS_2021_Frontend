import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
import teal from "@material-ui/core/colors/teal";
import useColors from '../../hooks/useColors';
import { randomColor } from '../../utils/index';

export default function App({ data, width, height }) {
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
    <AreaChart
      width={width !== undefined ? width : 400}
      height={height !== undefined ? height : 200}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Legend />
      <Tooltip />
      {lineKeys.map((key, i) => {
        const color =
          key === "You"
            ? tealColor :
          i >= colors.length
            ? randomColor()
          : colors[i];

        return (
          <Area
            type="monotone"
            dataKey={key}
            stroke={color}
            stackId={i + 1}
            fill={color}
            key={key}
          />
        );
      })}
    </AreaChart>
  );
}
