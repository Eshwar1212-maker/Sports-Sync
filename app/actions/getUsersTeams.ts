import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";
import { redis } from "../libs/redis";

export const getUsersTeams = async () => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser?.email) return null;
    const start = Date.now();
    const cache = await redis.get(`${currentUser?.id}team`)
    if(cache && false){
      //console.log("HITTING REDIS CACHE ", start - Date.now());
      //return JSON.parse(cache)
    }else {
      const team = await prisma.team.findMany({
        where: {
          users: {
            some: {
              id: currentUser.id,
            },
          },
        },
        select: {
          title: true,
          users: true,
          id: true,
        },
      });
      //console.log("NOT HITTING REDIS CACHE ", start - Date.now());
      await redis.set(`${currentUser?.id}team`, JSON.stringify(team));
      await redis.expire(`${currentUser?.id}team`, 200);
      return team;
    }
  } catch (error) {

    return null;
  }
};
