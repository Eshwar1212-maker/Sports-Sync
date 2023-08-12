import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getWorkouts = async () => {
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
                workouts: true
            }
          });
          return usersWorkouts?.workouts
    }
    catch(error){
        return []
    }
} 

export default getWorkouts;