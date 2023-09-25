import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";
import { env } from "process";
import { redis } from "../libs/redis";



export const getTeamById = async(
    teamId: string
) => {
    try{
        const currentUser = await getCurrentUser()
        if(!currentUser?.email) return null

        const start = Date.now();
        const cache = await redis.get(`${teamId}team`)
        if(cache){
         //console.log("HITTING REDIS CACHE ", start - Date.now());
          return JSON.parse(cache)
        }else{
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
            //console.log("NOT HITTING REDIS CACHE ", start - Date.now());
            await redis.set(`${team?.id}team`, JSON.stringify(team));
            await redis.expire(`${team?.id}team`, 20000);
            return team;
        }

        

    }catch(error){
        return null
    }
}