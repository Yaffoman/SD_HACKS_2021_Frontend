import React from "react";
import {
  BarChart,
  Bar,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import useColors from '../../hooks/useColors';
import { randomColor } from '../../utils/index';

export default function MyChart({ people, values, width, height }) {
  let dictionary = {};
  people.forEach((element, index) => {
    dictionary[element] = values[index];
  });
  let data = [dictionary];
  const colors = useColors();

  return (
    <BarChart
      width={width !== undefined ? width : 500}
      height={height !== undefined ? height : 300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />

      <YAxis />
      <Tooltip />
      <Legend />
      {people.map((key, i) => {
        const color = i >= colors.length ? randomColor() : colors[i];

        return <Bar dataKey={key} fill={color} />;
      })}
    </BarChart>
  );
}
