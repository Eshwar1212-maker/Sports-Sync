import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";




export async function DELETE(req: any, res: any) {
  try {
    const currentUser = await getCurrentUser();
    const eventId = req.body

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse("Unauthorized", { status: 400 });
    }

    if (!eventId) {
      return new NextResponse("Event ID is required", { status: 400 });
    }

    const deletedEvent = await prisma.event.delete({
      where: { id: eventId },
    });

    return NextResponse.json(deletedEvent);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
