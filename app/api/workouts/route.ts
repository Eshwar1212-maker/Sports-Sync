import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const {title, weight, reps, sets, date} = body;

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse("Unauthorized", { status: 400 });
    }
    const newEvent = await prisma.workout.create({
      data: {
        title,
        weight,
        date,
        sets,
        reps,
        user: {
          connect: {
            id: currentUser.id
          }
        }
      },
    });

    return NextResponse.json(newEvent);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
