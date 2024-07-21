import getWorkouts from "../actions/getWorkouts";
import Sidebar from "../components/sidebar/Sidebar";
import { checkSubscription } from "../libs/subscription";
import Dashboard from "./components/Dashboard";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const workouts = await getWorkouts();
  console.log("hello");
  checkSubscription()
  return (
    <Sidebar>
      <div className="h-full">
        <Dashboard workouts={workouts}/>
      </div>
    </Sidebar>
  );
}
