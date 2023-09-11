import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";


export const getUsersTeams = async() => {
    try{
        const currentUser = await getCurrentUser()
        if(!currentUser?.email) return null
        const team = await prisma.team.findMany({
            where: {
                users: {
                    some: {
                        id: currentUser.id
                    }
                }
            },
            select: {
                title: true,
                users: true,
                id: true
            }
        })
        return team;
    }catch(error){
        console.log(error);
        return null
    }
}