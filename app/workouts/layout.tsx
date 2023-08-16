
import getRecordWorkout from "../actions/getRecordWorkout"
import getWorkouts from "../actions/getWorkouts"
import Sidebar from "../components/sidebar/Sidebar"
import Workout from "./components/Workout"

export default async function WorkoutsLayout({
    children
}: {
    children: React.ReactNode
}) {
    const workouts = await getWorkouts()
    const getRecordWorkouts = await getRecordWorkout()
    console.log(workouts);
    
    console.log("RECORD WORKOUTS: " + getRecordWorkouts);
    

    return (

        <Sidebar>
            <div className="h-[100vh]">
                <Workout workoutRecord={getRecordWorkouts} workouts={workouts}/>
            </div>
        </Sidebar>

    )
}