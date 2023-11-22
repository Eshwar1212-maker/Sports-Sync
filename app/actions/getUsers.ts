import getSession from "./getSession"
import prisma from "@/app/libs/prismadb";
import { redis } from "../libs/redis";
import getCurrentUser from "./getCurrentUser";

const getUsers = async () => {
    const currentUser = await getCurrentUser()
    const session = await getSession();
    if (!session?.user?.email) return [];
    try {
        const cache = await redis.get(`${currentUser?.name}users`);
        if (cache && false) {
            //console.log("HITTING REDIS CACHE ", start - Date.now()); // Uncomment if you need this log
            //return JSON.parse(cache);
        } else {
            const users = await prisma.user.findMany({
                orderBy: {
                    createdAt: "asc"
                },
                where: {
                    NOT: {
                        email: session.user.email
                    }
                }
            });
            
            await redis.set(`${currentUser?.name}users`, JSON.stringify(users));
            await redis.expire(`${currentUser?.name}users`, 20000);
            return users;
        }
    } catch (error) {
        //console.error("Error retrieving users:", error);
        return [];
    }
}

export default getUsers;
