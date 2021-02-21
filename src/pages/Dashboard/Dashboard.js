import React from "react";
import PieChart from "../../components/Charts/PieChart";
import LineChart from "../../components/Charts/LineChart";
import BarChart from "../../components/BarChart/BarChart";
import AreaChart from "../../components/Charts/AreaChart";
import { Grid, Typography } from "@material-ui/core";
import styles from "./Dashboard.module.css";
import ProgressBar from "../../components/Progress/ProgressBar";
import useAuth from "../../components/Auth/Auth";

export default function Dashboard() {
  const { user } = useAuth();
  const chartWidth = 400;
  const chartHeight = 250;

  return (
    <div>
      <div className={styles.title}>
        <Typography variant="h4" color="primary">
          Your Progress
        </Typography>
        <div className={styles.subtitle}>
          <Typography variant="subtitle1" color="primary">
            You're doing great so far{user && user.firstName ? ` ${user.firstName}` : ''}!
          </Typography>
        </div>
      </div>
      <div>
        <ProgressBar percentage={60} />
      </div>
      <div className={styles.wrapper}>
        <Grid container justify="center" alignItems="center">
          <Grid container item justify="center" alignItems="center">
            <Grid item>
              <div className={styles.title}>
                <Typography color="primary">Breakdown by Sector</Typography>
              </div>

              <PieChart
                data={[
                  { label: "Transportation", value: 400 },
                  { label: "Food", value: 300 },
                  { label: "House", value: 300 },
                  { label: "Miscellaneous", value: 150 },
                ]}
                width={chartWidth}
                height={chartHeight}
              />
            </Grid>

            <Grid item>
              <div className={styles.title}>
                <Typography color="primary">Monthly Comparison</Typography>
              </div>

              <BarChart
                people={["Oct", "Nov", "Dec", "Jan", "Feb (current)"]}
                values={[2400, 1398, 9800, 3908, 4800]}
                width={chartWidth}
                height={chartHeight}
              />
            </Grid>
          </Grid>

          <Grid container item justify="center" alignItems="center">
            <Grid item>
              <div className={styles.title}>
                <Typography color="primary">Daily Avg</Typography>
              </div>

              <LineChart
                width={chartWidth}
                height={chartHeight}
                data={[
                  {
                    date: "2/14",
                    You: 2400,
                  },
                  {
                    date: "2/15",
                    You: 1398,
                  },
                  {
                    date: "2/16",
                    You: 9800,
                  },
                  {
                    date: "2/17",
                    You: 3908,
                  },
                  {
                    date: "2/18",
                    You: 4800,
                  },
                  {
                    date: "2/19",
                    You: 3800,
                  },
                  {
                    date: "2/20",
                    You: 4300,
                  },
                ]}
              />
            </Grid>

            <Grid item>
              <div className={styles.title}>
                <Typography color="primary">National Comparison</Typography>
              </div>

              <AreaChart
                width={chartWidth}
                height={chartHeight}
                data={[
                  {
                    date: "2/14",
                    "National Avg": 4000,
                    You: 2400,
                  },
                  {
                    date: "2/15",
                    "National Avg": 3000,
                    You: 1398,
                  },
                  {
                    date: "2/16",
                    "National Avg": 2000,
                    You: 9800,
                  },
                  {
                    date: "2/17",
                    "National Avg": 2780,
                    You: 3908,
                  },
                  {
                    date: "2/18",
                    "National Avg": 1890,
                    You: 4800,
                  },
                  {
                    date: "2/19",
                    "National Avg": 2390,
                    You: 3800,
                  },
                  {
                    date: "2/20",
                    "National Avg": 3490,
                    You: 4300,
                  },
                ]}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
