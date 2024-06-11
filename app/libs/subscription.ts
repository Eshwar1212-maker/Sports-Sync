import prisma from "@/app/libs/prismadb";
import getCurrentUser from "../actions/getCurrentUser"

const DAY_IN_MS = 86_400_000;
export const checkSubscription = async () => {
    const user = await getCurrentUser()
    console.log(user?.id);
        
}


