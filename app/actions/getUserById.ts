import getSession from "./getSession"
import prisma from "@/app/libs/prismadb";


const getUserById = async (id: string) => {    
    const session = await getSession()
    if(!session?.user?.email) return []
    try{
        const user = await prisma.user.findUnique({
            where: {
                id: id
            },
            select: {
                name: true,
                image: true,
                id: true,
                
            }
        })
        return user
    }catch(error){
        return []
    }
}
export default getUserById;