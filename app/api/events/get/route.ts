import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getPrevEventsText from "@/app/actions/getPrevEventText";

export async function POST(request: Request, res: any) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const {title} = body;

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse("Unauthorized", { status: 400 });
    }
    const specificEvents = getPrevEventsText("Leg Workouts")

    return res.status(200).json(specificEvents);

  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
