import React from "react";
import PieChart from "../../components/PieChart/PieChart";

export default function Dashboard() {
  return (
    <div>
      here
      <PieChart
        data={[
          { label: "Group A", value: 400 },
          { label: "Group B", value: 300 },
          { label: "Group C", value: 300 },
          { label: "Group D", value: 200 },
          { label: "Group E", value: 278 },
          { label: "Group F", value: 189 },
        ]}
      />
    </div>
  );
}
