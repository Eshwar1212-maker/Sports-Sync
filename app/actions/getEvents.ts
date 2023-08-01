import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getEvents = async () => {
    const currentUser = await getCurrentUser()
    if(!currentUser?.id){
        return []
    }
    try{
        const userWithEvents = await prisma.event.findUnique({
            where: {
              id: currentUser.id,
            },
          });
          return userWithEvents
    }
    catch(error){
        return []
    }
} 

export default getEvents;