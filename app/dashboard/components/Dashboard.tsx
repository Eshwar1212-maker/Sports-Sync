"use client"
import { LineChart, Card, Title, Text, Metric } from "@tremor/react";

const chartdata = [
  {
    year: 1970,
    "Consistency": 9.74,
    "Intensity": 1.53,
  },
  {
    year: 1971,
    "Consistency": 1.96,
    "Intensity": 5.58,
  },
  {
    year: 1972,
    "Consistency": 4.96,
    "Intensity": 1.61,
  },
  {
    year: 1973,
    "Consistency": 3.93,
    "Intensity": 1.61,
  },
  {
    year: 1974,
    "Consistency": 9.88,
    "Intensity": 1.67,
  },
  {
    year: 1973,
    "Consistency": 12.93,
    "Intensity": 1.61,
  },
  {
    year: 1974,
    "Consistency": 9.88,
    "Intensity": 1.67,
  }
  
];

const dataFormatter = (number: number) => {
    return `${Intl.NumberFormat("us").format(number).toString()}%`
};

const Dashboard = () => (
    <>
  <Card className="">
    <Title>Your consistency and intensity</Title>
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
    
  <Card className="" decoration="top" decorationColor="slate" >
    <Title>Consistency summary</Title>
    <Metric>$ 34,743</Metric>
  </Card>
  <Card className="" decoration="top" decorationColor="slate" >
    <Title>Intensity summary</Title>
    <Metric>8 gym visits in May</Metric>
  </Card>
  </div>
  </>
);


export default Dashboard