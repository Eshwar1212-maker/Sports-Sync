import getWorkouts from "../actions/getWorkouts"
import Sidebar from "../components/sidebar/Sidebar"
import Workout from "./components/Workout"

export default async function WorkoutsLayout({
    children
}: {
    children: React.ReactNode
}) {
    const workouts = await getWorkouts()

    return (

        <Sidebar>
            <div className="h-[100vh]">
                <Workout workouts={workouts}/>
            </div>
        </Sidebar>

    )
}