"use client";
import { LineChart, Card, AreaChart} from "@tremor/react";
import clsx from "clsx";
import { useTheme } from "next-themes";


const dataFormatter = (number: number) => {
  return `${Intl.NumberFormat("us").format(number).toString()}`;
};

const Dashboard = ({workouts}: any) => {

  //Helper function to return days worked out for each month

  const getDaysWorkedOutByMonth = (month: string) => {
       const unique = new Set()
       workouts.forEach((workout: any) => {
          if(workout.date.toString().includes(month)){
            unique.add(workout.date.toString().split(" ")[2])
          }
       })

       return unique.size
  }

  console.log(getDaysWorkedOutByMonth("Aug"));

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const unique: any = {}
    months.map((month) => {
        unique[month] = getDaysWorkedOutByMonth(month)
    })
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
      Consistency: unique["Sept"],
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
    }
  ];
  
  const exercisesData = [
    {
      year: "Jan",
      exercises: 0,
    },
    {
      year: "Feb",
      Consistency: 10
    },
    {
      year: "Mar",
      Consistency: 50,
    },
    {
      year: "Apr",
      Consistency: 60,
    },
    {
      year: "May",
      Consistency: 90,
    },
    {
      year: "Jun",
      Consistency: 20,
    },
    {
      year: "Jul",
      Consistency: 30,
    },
    {
      year: "Aug",
      Consistency: 45,
    },
    {
      year: "Sep",
      Consistency: 55,
    },
    {
      year: "Oct",
      Consistency: 44,
    },
    {
      year: "Nov",
      Consistency: 56,
    },
    {
      year: "Dec",
      Consistency: 64,
    }
  ];
  


  const { theme } = useTheme();
  
  return (
    <div className="px-6">
      <div>
      <Card className="">

        <h1 className="text-lg font-semibold text-black">
          Days you worked out each month
        </h1>
        <AreaChart
          className="mt-46"
          data={chartdata}
          index="year"
          categories={["Consistency", "Intensity"]}
          colors={["sky", "red"]}
          valueFormatter={dataFormatter}
          yAxisWidth={40}
        />
      </Card>
      <Card className="">

        <h1 className="text-lg font-semibold text-black">
          Number of exercises completed each month
        </h1>
        <AreaChart
          className="mt-46"
          data={exercisesData}
          index="year"
          categories={["Consistency"]}
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
