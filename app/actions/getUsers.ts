import getSession from "./getSession"
import prisma from "@/app/libs/prismadb";


const getUser = async () => {
    const session = await getSession()
    if(!session?.user?.email) return []
    try{
        const users = await prisma.user.findMany({
            orderBy: {
                createdAt: "desc"
            },
            where: {
                NOT: {
                    email: session.user.email
                }
            }
        })
    }catch(error){
        return []
    }
}