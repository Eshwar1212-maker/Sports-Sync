import getWorkouts from "../actions/getWorkouts";
import getWorkoutsByMonth from "../actions/getWorkoutsByMonth";
import Sidebar from "../components/sidebar/Sidebar";
import Dashboard from "./components/Dashboard";
import DashBoardSelect from "./components/DashboardSelect";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const workouts = await getWorkouts();
  console.log(workouts);
  return (
    <Sidebar>
      <div className="h-full">
        <DashBoardSelect />
        <Dashboard workouts={workouts}/>
      </div>
    </Sidebar>
  );
}
