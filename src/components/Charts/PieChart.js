import React from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";
import teal from "@material-ui/core/colors/teal";
import amber from "@material-ui/core/colors/amber";

/**
 * parameter data needs to be in the form:
 * [
 *   { label: "String", value: number }
 * ]
 * The pie chart will proportion the values (i.e. they don't need to add up to 100).
 */
export default function Chart ({ data, className }) {
  const tealColor = teal[500]
  const amberColor = amber[300]

  return (
    <PieChart width={300} height={200}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="label"
        cx="50%"
        cy="50%"
        isAnimationActive={true}
        outerRadius={80}
        innerRadius={30}
        fill={tealColor}
        className={className}
        label
      />
      <Tooltip />
    </PieChart>
  );
}
