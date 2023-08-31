import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getWorkouts from "@/app/actions/getWorkouts";



export async function PATCH(request: Request) {
    try {
      const currentUser = await getCurrentUser();
      const body = await request.json();
      const { workoutId, weight, reps, sets, isPersonalRecord, date } = body;
  
      if (!currentUser?.id || !currentUser?.email) {
        return new NextResponse("Unauthorized", { status: 400 });
      }
  
      if (!workoutId) {
        return new NextResponse("Workout ID is required", { status: 400 });
      }  
      const updatedEvent = await prisma.workout.update({
        where: { id: workoutId },
        data: {
          weight,
          reps,
          sets,
          isPersonalRecord,
          date,
          user: {
            connect: { id: currentUser.id },
          },
        },
      });
  
      return NextResponse.json(updatedEvent);
    } catch (error) {
      console.log(error);
      return new NextResponse("Internal Error", { status: 500 });
    }
  }
  