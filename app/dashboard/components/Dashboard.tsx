"use client";
import { LineChart, Card, AreaChart, Title } from "@tremor/react";

import DashBoardSelect from "./DashboardSelect";
import { useMemo } from "react";

const dataFormatter = (number: number) => {
  return `${Intl.NumberFormat("us").format(number).toString()}`;
};

const Dashboard = ({ workouts }: any) => {
  //Helper function to return days worked out for each month

  const getDaysWorkedOutByMonth = (month: string) => {
    return useMemo(() => {
      const unique = new Set();
      workouts.forEach((workout: any) => {
        if (workout.date.toString().includes(month)) {
          unique.add(workout.date.toString().split(" ")[2]);
        }
      });
      return unique.size;
    }, [workouts, month]);
  }
  
  

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
  const getExercisesByMonth = (month: string) => {
    let totalExercises = 0
    workouts.forEach((workout: any) => {        
      if(workout.date.toString().split(" ")[1].includes(month))
      totalExercises += 1
    })
    return totalExercises
}



const exercisesPerMonth: any = {};
months.forEach((month) => {
  exercisesPerMonth[month] = getExercisesByMonth(month)
})


  const exercisesData = [
    {
      year: "Jan",
      Exercises: exercisesPerMonth["Jan"],
    },
    {
      year: "Feb",
      Exercises: exercisesPerMonth["Feb"],
    },
    {
      year: "Mar",
      Exercises: exercisesPerMonth["Mar"],
    },
    {
      year: "Apr",
      Exercises: exercisesPerMonth["Apr"],
    },
    {
      year: "May",
      Exercises: exercisesPerMonth["May"],
    },
    {
      year: "Jun",
      Exercises: exercisesPerMonth["Jun"],
    },
    {
      year: "Jul",
      Exercises: exercisesPerMonth["Jul"],
    },
    {
      year: "Aug",
      Exercises: exercisesPerMonth["Aug"],
    },
    {
      year: "Sep",
      Exercises: exercisesPerMonth["Sep"],
    },
    {
      year: "Oct",
      Exercises: exercisesPerMonth["Oct"],
    },
    {
      year: "Nov",
      Exercises: exercisesPerMonth["Nov"],
    },
    {
      year: "Dec",
      Exercises: exercisesPerMonth["Dec"],
    },
  ];


  


  //const { theme } = useTheme();

  return (
    <div className="px-6 mt-8 pb-20 mb-20 sm:pb-0 sm:mb-0">
     <div className="">
     <DashBoardSelect />

     </div>
      <main>
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
            categories={["Exercises"]}
            colors={["red"]}
            valueFormatter={dataFormatter}
            yAxisWidth={40}
          />
        </Card>
      </main>
    </div>
  );
};
export default Dashboard;
