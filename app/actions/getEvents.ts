import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getEvents = async () => {
    const currentUser = await getCurrentUser()
    if(!currentUser?.id){
        return []
    }
    try{ 
        const userWithEvents = await prisma.user.findUnique({
            where: {
              id: currentUser.id,
            },
            include: {
              events: true,
            }
          });
          return userWithEvents?.events 
    }
    catch(error){
        return []
    }
} 

export default getEvents;