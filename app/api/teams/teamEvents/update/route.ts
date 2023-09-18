import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";



export async function PATCH(request: Request) {
    try {
      const currentUser = await getCurrentUser();
      const body = await request.json();
      const { eventId, notes, title, date, teamId, priority } = body;
  
      if (!currentUser?.id || !currentUser?.email) {
        return new NextResponse("Unauthorized", { status: 400 });
      }
  
      if (!eventId) {
        return new NextResponse("Event ID is required", { status: 400 });
      }
  
      const updatedEvent = await prisma.event.update({
        where: { id: eventId },
        data: {
          notes,
          title,
          date,
          priority,
          Team: {
            connect: { id: teamId},
          },
        },
      });
  
      return NextResponse.json(updatedEvent);
    } catch (error) {
      console.log(error);
      return new NextResponse("Internal Error", { status: 500 });
    }
  }
  