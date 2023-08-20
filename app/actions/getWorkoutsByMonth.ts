
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";
import getWorkouts from "./getWorkouts";

const getWorkoutsByMonth = async (date?: any) => {
    const currentUser = await getCurrentUser()
    if(!currentUser?.id){
        return []
    }
    
    const workouts = getWorkouts()

    const filteredWorkouts = await workouts.then((workout) => {
        return workout?.filter((workout) => {
            return workout.date.toString().includes(date)
        })
    })

    return filteredWorkouts
} 

export default getWorkoutsByMonth;