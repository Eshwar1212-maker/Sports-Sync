import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getNotifications = async () => {
    const currentUser = await getCurrentUser()
    if(!currentUser?.id){
        return []
    }
    try{
        const userWithNotifications = await prisma.notifications.findMany({
            where: {
                recipient: {
                    has: currentUser?.email,
                },
            },
        });

        
          return userWithNotifications
    }
    catch(error){
        return []
    }
} 

export default getNotifications;