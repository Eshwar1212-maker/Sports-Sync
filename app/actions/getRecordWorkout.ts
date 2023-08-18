
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getRecordWorkout = async (exercise?: string) => {
    const currentUser = await getCurrentUser()
    if(!currentUser?.id){
        return []
    }
    try{
        const usersWorkouts = await prisma.user.findUnique({
            where: {
              id: currentUser.id,
            },
            include: {
                workouts: {
                    where: {
                        title: exercise,
            
                    }
                },
            },
   
          });
          return usersWorkouts?.workouts
    }
    catch(error){
        return []
    }
} 

export default getRecordWorkout;