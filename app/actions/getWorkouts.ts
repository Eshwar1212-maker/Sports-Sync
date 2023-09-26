import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";
import { redis } from "../libs/redis";

const getWorkouts = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser?.id) {
    return [];
  }
  const start = Date.now();
  //const cache = await redis.get(`${currentUser?.id}workouts`);
  //if (cache && false) {
    //console.log("HITTING REDIS CACHE ", start - Date.now());
    //return JSON.parse(cache);
  //}
  try {
    const usersWorkouts = await prisma.user.findUnique({
      where: {
        id: currentUser.id,
      },
      include: {
        workouts: true,
      },
    });
    //console.log("NOT HITTING REDIS CACHE ", start - Date.now());
    //await redis.set(`${currentUser?.id}workouts`, JSON.stringify(usersWorkouts));
    //await redis.expire(`${currentUser?.id}workouts`, 2000);
    
    return usersWorkouts?.workouts;
  } catch (error) {
    return [];
  }
};

export default getWorkouts;
