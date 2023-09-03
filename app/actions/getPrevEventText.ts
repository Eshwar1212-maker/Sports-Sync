import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getPrevEventsText = async (eventName: string) => {
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
              events: {
                where: {
                    title: eventName
                },
            orderBy: {
                date: "desc"
            },
            select: {
                notes: true,
                date: true
            }
            },
        }
          })
          const notes = userWithEvents?.events.filter((event) => {
            return event.date?.toString().includes("2023")
          })
          return notes?.pop()
    }
    catch(error){
        return []
    }
} 

export default getPrevEventsText;