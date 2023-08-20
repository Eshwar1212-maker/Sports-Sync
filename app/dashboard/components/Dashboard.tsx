"use client";
import { LineChart, Card, AreaChart, Title } from "@tremor/react";
import clsx from "clsx";
import { useTheme } from "next-themes";
import DashBoardSelect from "./DashboardSelect";

const dataFormatter = (number: number) => {
  return `${Intl.NumberFormat("us").format(number).toString()}`;
};

const Dashboard = ({ workouts }: any) => {
  //Helper function to return days worked out for each month

  const getDaysWorkedOutByMonth = (month: string) => {
    const unique = new Set();
    workouts.forEach((workout: any) => {
      if (workout.date.toString().includes(month)) {
        unique.add(workout.date.toString().split(" ")[2]);
      }
    });
    return unique.size;
  };

  console.log(getDaysWorkedOutByMonth("Aug"));

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const unique: any = {};
  months.map((month) => {
    unique[month] = getDaysWorkedOutByMonth(month);
  });
  const exercisesPerMonth: any = {};
  const chartdata = [
    {
      year: "Jan",
      Consistency: unique["Jan"],
    },
    {
      year: "Feb",
      Consistency: unique["Feb"],
    },
    {
      year: "Mar",
      Consistency: unique["Mar"],
    },
    {
      year: "Apr",
      Consistency: unique["Apr"],
    },
    {
      year: "May",
      Consistency: unique["May"],
    },
    {
      year: "Jun",
      Consistency: unique["Jun"],
    },
    {
      year: "Jul",
      Consistency: unique["Jul"],
    },
    {
      year: "Aug",
      Consistency: unique["Aug"],
    },
    {
      year: "Sep",
      Consistency: unique["Sep"],
    },
    {
      year: "Oct",
      Consistency: unique["Oct"],
    },
    {
      year: "Nov",
      Consistency: unique["Nov"],
    },
    {
      year: "Dec",
      Consistency: unique["Dec"],
    },
  ];

  const exercisesData = [
    {
      year: "Jan",
      Intensity: 0,
    },
    {
      year: "Feb",
      Consistency: 10,
    },
    {
      year: "Mar",
      Intensity: 50,
    },
    {
      year: "Apr",
      Intensity: 60,
    },
    {
      year: "May",
      Intensity: 90,
    },
    {
      year: "Jun",
      Intensity: 20,
    },
    {
      year: "Jul",
      Intensity: 30,
    },
    {
      year: "Aug",
      Intensity: 45,
    },
    {
      year: "Sep",
      Intensity: 55,
    },
    {
      year: "Oct",
      Intensity: 44,
    },
    {
      year: "Nov",
      Intensity: 56,
    },
    {
      year: "Dec",
      Intensity: 64,
    },
  ];

  //const { theme } = useTheme();

  return (
    <div className="px-6 py-4">
      <DashBoardSelect />
      <div>
        <Card className="">
          <Title className="">Days you worked out each month</Title>
          <AreaChart
            className="mt-46"
            data={chartdata}
            index="year"
            categories={["Consistency"]}
            colors={["sky", "red"]}
            valueFormatter={dataFormatter}
            yAxisWidth={40}
          />
        </Card>
        <Card className="">
          <Title className="">Number of exercises completed each month</Title>
          <AreaChart
            className="mt-46"
            data={exercisesData}
            index="year"
            categories={["Intensity"]}
            colors={["red"]}
            valueFormatter={dataFormatter}
            yAxisWidth={40}
          />
        </Card>
      </div>
    </div>
  );
};
export default Dashboard;
