import getCurrentUser from "@/app/actions/getCurrentUser";

import { absoluteUrl } from "@/lib/utils";
import { NextResponse } from "next/server";


const settingsUrl = absoluteUrl("/dashboard")

export async function GET(){
    try{
        const user = await getCurrentUser()
        if(user?.id) return new NextResponse("Unauthorized", {status: 401})
        const userSubscription = await prisma?.userSubscription.findUnique({
            where: {
                userId
            }
    })

    }catch(error){
        console.log("STRIPE ERROR", error)
        return new NextResponse("INTERNAL ERROR, ", {status: 500});
        
    }
}