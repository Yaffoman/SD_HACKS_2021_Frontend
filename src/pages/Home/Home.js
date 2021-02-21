import React from 'react';
import Progress from "../../components/Progress/Progress";
import BarChart from "../../components/BarChart/BarChart";

export default function Home() {
  return (
    <BarChart people={['john', 'me', 'you']} values={[10,3,12]}/>
  )
}