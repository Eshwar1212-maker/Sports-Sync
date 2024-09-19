import getCurrentUser from "../actions/getCurrentUser"
import prisma from "@/app/libs/prismadb"


const DAY_IN_MS = 86_400_000

export const checkSubscription = async () => {
    const user = await getCurrentUser()
    if(!user){
        return false
    }

    const userSubscription = await prisma.userSubscription.findUnique({
        where: {
            userId: user.id
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