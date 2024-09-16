import Stripe from "stripe";
import { headers } from "next/headers";
import { stripe } from "@/app/libs/stripe";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    console.log("ERROR");
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (event.type === "checkout.session.completed") {
    try {
      const subscription = await stripe.subscriptions.retrieve(
        session.subscription as string
      );

      if (!session.metadata?.userId) {
        return new NextResponse("User ID is required", { status: 400 });
      }

      await prisma.userSubscription.create({
        data: {
          userId: session.metadata.userId,
          stripeSubscriptionId: subscription.id,
          stripeCustomerId: subscription.customer as string,
          stripePriceId: subscription.items.data[0].price.id,
          stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000), // Corrected timestamp
        },
      });

      return new NextResponse("Subscription created successfully", { status: 200 });
    } catch (error: any) {
      console.error("Error creating subscription:", error);
      return new NextResponse(`Subscription creation error: ${error.message}`, { status: 500 });
    }
  }

  if (event.type === "invoice.payment_succeeded") {
    try {
      const subscription = await stripe.subscriptions.retrieve(
        session.subscription as string
      );

      // Check if subscription exists
      const existingSubscription = await prisma.userSubscription.findUnique({
        where: { stripeSubscriptionId: subscription.id },
      });

      if (!existingSubscription) {
        return new NextResponse("Subscription not found", { status: 404 });
      }

      await prisma.userSubscription.update({
        where: {
          stripeSubscriptionId: subscription.id,
        },
        data: {
          stripeCustomerId: subscription.items.data[0].price.id,
          stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000), // Corrected timestamp
        },
      });

      return new NextResponse("Subscription updated successfully", { status: 200 });
    } catch (error: any) {
      console.error("Error updating subscription:", error);
      return new NextResponse(`Subscription update error: ${error.message}`, { status: 500 });
    }
  }

  // Return 200 if the event type is not handled explicitly
  return new NextResponse("Event not handled", { status: 200 });
}
