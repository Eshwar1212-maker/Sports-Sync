import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";
import { env } from "process";



export const getTeamById = async(
    teamId: string
) => {
    try{
        const currentUser = await getCurrentUser()
        if(!currentUser?.email) return null

        
        const team = await prisma.team.findUnique({
            where: {
                id: teamId
            },
            include: {
                users: true,
                events: {
                    orderBy: {
                        date: "asc"
                    }
                }
            }
        })
        return team;
    }catch(error){
        return null
    }
}