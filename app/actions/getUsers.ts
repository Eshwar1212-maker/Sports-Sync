import getSession from "./getSession"
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getUsers = async () => {
    const currentUser = await getCurrentUser()
    const session = await getSession();
    if (!session?.user?.email) return [];
    try {
        if (false) {
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
            

            return users;
        }
    } catch (error) {
        //console.error("Error retrieving users:", error);
        return [];
    }
}

export default getUsers;
