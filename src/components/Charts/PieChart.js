import React from "react";
import {PieChart, Pie, Legend, Tooltip, Cell} from "recharts";
import useColors from '../../hooks/useColors';

/**
 * parameter data needs to be in the form:
 * [
 *   { label: "String", value: number }
 * ]
 * The pie chart will proportion the values (i.e. they don't need to add up to 100).
 */
export default function Chart ({ data, className, width, height }) {
  const colors = useColors();

  return (
    <PieChart width={width !== undefined ? width : 300} height={height !== undefined ? height : 300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="label"
        cx="50%"
        cy="50%"
        isAnimationActive={true}
        outerRadius={80}
        innerRadius={30}
        fill={colors}
        className={className}
        label
      >
          {data.map((entry, i) => (
              <Cell key={`cell-${i}`} fill={colors[i % colors.length]} />
          ))}
      </Pie>
      <Legend />
      <Tooltip />
    </PieChart>
  );
}
