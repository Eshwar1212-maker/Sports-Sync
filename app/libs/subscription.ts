import prisma from "@/app/libs/prismadb";
import getCurrentUser from "../actions/getCurrentUser"

const DAY_IN_MS = 86_400_000;
export const checkSubscription = async () => {
    const user = await getCurrentUser()
    console.log(user?.id);
    if(!user?.id){
        return false
    }
    const userSubscription = await prisma.userSubscription.findUnique({
        where: {
            userId: user?.id
        },
        select: {
            stripeCurrentPeriodEnd: true,
            stripeCustomerId: true,
            stripePriceId: true,
            stripeSubscriptionId: true
        }
    })
    if(!userSubscription){
        return false
    }
    const isValid = userSubscription.stripePriceId && userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now()
    return !!isValid
}


