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
export default function Chart ({ data }) {
  const tealColor = teal[500]
  const amberColor = amber[300]

  return (
    <PieChart width={1000} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        // cx={200}
        // cy={200}
        outerRadius={80}
        innerRadius={30}
        fill={tealColor}
        label
      />
      <Tooltip />
    </PieChart>
  );
}
