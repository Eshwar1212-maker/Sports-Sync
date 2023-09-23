import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";
import { redis } from "../libs/redis";

export const getUsersTeams = async () => {
  try {
    const start = Date.now();

    const currentUser = await getCurrentUser();
    const cacheKey = `team-${currentUser?.id}`;
    const cache = await redis.get(cacheKey);
    if (!currentUser?.email) return null;
    if (cache) {
      console.log(cache);

      console.log("WITH REDIS: ", Date.now() - start);
      return cache;
    } else {
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
      console.log("NO REDIS: ", Date.now() - start);
      await redis.set(cacheKey, JSON.stringify(team));
      const checkCache = await redis.get(cacheKey);
      console.log("Cache immediately after setting:", checkCache);
      await redis.expire(cacheKey, 800);
      return team;
    }
  } catch (error) {
    console.log(error);

    return null;
  }
};
