import React from "react";
import {PieChart, Pie, Legend, Tooltip, Cell} from "recharts";
import teal from "@material-ui/core/colors/teal";
import amber from "@material-ui/core/colors/amber";

/**
 * parameter data needs to be in the form:
 * [
 *   { label: "String", value: number }
 * ]
 * The pie chart will proportion the values (i.e. they don't need to add up to 100).
 */
export default function Chart ({ data, className, width, height }) {
  const tealColor = teal[500]
  const amberColor = amber[300]

    let colors = data.map((element, index) => {
        return "#" + Math.floor(Math.random()*16777215).toString(16);

    })


  return (
    <PieChart width={width !== undefined ? width : 300} height={height !== undefined ? height : 200}>
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
          {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
      </Pie>
      <Legend />
      <Tooltip />
    </PieChart>
  );
}
