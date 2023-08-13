"use client";
import { LineChart, Card, Title, Text, Metric } from "@tremor/react";
import clsx from "clsx";
import { useTheme } from "next-themes";

const chartdata = [
  {
    month: 1,
    Consistency: 9.74,
    Intensity: 1.53,
  },
  {
    month: 2,
    Consistency: 1.96,
    Intensity: 5.58,
  },
  {
    month: 3,
    Consistency: 4.96,
    Intensity: 1.61,
  },
  {
    month: 4,
    Consistency: 3.93,
    Intensity: 1.61,
  },
  {
    month: 5,
    Consistency: 9.88,
    Intensity: 1.67,
  },
  {
    month: 6,
    Consistency: 12.93,
    Intensity: 1.61,
  },
  {
    month: 7,
    Consistency: 9.88,
    Intensity: 1.67,
  },
];

const dataFormatter = (number: number) => {
  return `${Intl.NumberFormat("us").format(number).toString()}%`;
};

const Dashboard = () => {
  const { theme } = useTheme();

  return (
    <>
      <Card className="">
        <h1 className="text-lg font-semibold">
          Your consistency and intensity the past 12 months
        </h1>
        <LineChart
          className="mt-46"
          data={chartdata}
          index="year"
          categories={["Consistency", "Intensity"]}
          colors={["blue", "gray"]}
          valueFormatter={dataFormatter}
          yAxisWidth={40}
        />
      </Card>
      <div className="flex">
        <Card className="" decoration="top" decorationColor="slate">
          <h2 className="text-md font-semibold">Consistency summary</h2>
          <ul             className={clsx(
              "flex list-disc gap-2 flex-col px-6 py-1",
              theme === "dark" ? "text-white" : "text-black"
            )}>
            <li>8 workouts in May</li>
            <li>8 workouts in June</li>
          </ul>
        </Card>
        <Card className="" decoration="top" decorationColor="slate">
          <h2 className="text-md font-semibold">Intensity summary</h2>
          <ul
            className={clsx(
              "flex list-disc gap-2 flex-col px-6 py-1 text-sm",
              theme === "dark" ? "text-white" : "text-black"
            )}
          >
            <li>16 workouts in May</li>
            <li>13 workouts in June</li>
            <li>22 workouts in July</li>
            <li>21 workouts in August</li>
            <li>22 workouts in September</li>
            <li>24 workouts in October</li>
            <li>19 workouts in November</li>
            <li>18 workouts in December</li>
            <li>22 workouts in January</li>
            <li>26 workouts in February</li>
            <li>14 workouts in March</li>
          </ul>
        </Card>
      </div>
    </>
  );
};
export default Dashboard;
