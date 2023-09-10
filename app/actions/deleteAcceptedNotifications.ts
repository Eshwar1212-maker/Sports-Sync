import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const deleteAcceptedNotifications = async () => {
    const currentUser = await getCurrentUser()
    if(!currentUser?.id){
        return []
    }
    try{
        
        await prisma.notifications.deleteMany({
            where: {
                accepted: true
            }
        })
        
    }
    catch(error){
        return []
    }
} 

export default deleteAcceptedNotifications;