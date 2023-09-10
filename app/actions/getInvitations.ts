import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getInvitations = async () => {
    const currentUser = await getCurrentUser()
    if(!currentUser?.id){
        return []
    }
    try{
        const userWithEvents = await prisma.user.findUnique({
            where: {
              email: currentUser.email!
            }
          });
          return userWithEvents
    }
    catch(error){
        return []
    }
} 

export default getInvitations;