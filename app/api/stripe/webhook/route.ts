import Stripe from "stripe"
import {headers} from "next/headers"
import { stripe } from "@/app/libs/stripe"

export async function POST(req: Request){
    const body = await req.text()
    const signature = headers().get("Stripe-Signature") as string
    let event: Stripe.Event

    try{
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        )
    }catch{

    }
}