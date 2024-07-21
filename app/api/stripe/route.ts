import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { stripe } from "@/app/libs/stripe";
import { absoluteUrl } from "@/lib/utils";
import { NextResponse } from "next/server";

const settingsUrl = absoluteUrl("/workouts");

export async function GET() {
    try {
        const user = await getCurrentUser();
        if (!user?.id || !user?.email) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        
        const userSubscription = await prisma?.userSubscription.findUnique({
            where: {
                userId: user.id
            }
        });

        const stripeSession = await stripe.checkout.sessions.create({
            success_url: settingsUrl,
            cancel_url: settingsUrl,
            payment_method_types: ['card'],
            mode: 'subscription',
            billing_address_collection: "auto",
            customer_email: user.email,
            line_items: [
                {
                    price_data: {
                        currency: "USD",
                        product_data: {
                            name: "Synced Pro",
                            description: "Upgrade to Synced Pro"
                        },
                        unit_amount: 999,
                        recurring: {
                            interval: "month"
                        }
                    },
                    quantity: 1
                }
            ],
            metadata: {
                userId: user.id // Ensure user.id is used here
            }
        });

        // Return or handle the stripeSession as needed
        return new NextResponse(JSON.stringify(stripeSession), { status: 200 });

    } catch (error) {
        console.log("STRIPE ERROR", error);
        return new NextResponse("INTERNAL ERROR", { status: 500 });
    }
}
