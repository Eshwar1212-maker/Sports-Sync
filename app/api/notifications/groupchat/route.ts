import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { pusherServer } from "@/app/libs/pusher";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const { users, title, groupId } = body;

    const recipientIds = users?.map((user: any) => user.email);
    if (!recipientIds) {
      return new NextResponse("NO IDS", { status: 500 });
    }

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse("Unauthorized", { status: 400 });
    }

    const recipientImageResult = await prisma.user.findUnique({
      where: {
        email: title.split(" ")[0],
      },
      select: {
        image: true,
      },
    });

    if (!recipientImageResult || !recipientImageResult.image) {
      return new NextResponse('Recipient image not found', { status: 400 });
    }
    
    const recipientImageUrl = recipientImageResult.image;

    const notificationRequest = await prisma.notifications.create({
      data: {
        title: title,
        groupId: groupId,
        recipient: recipientIds,
        recipientImage: recipientImageUrl,
        user: {
          connect: {
            id: currentUser.id,
          },
        },
      },
    });

    return new NextResponse('Notification Created', { status: 200 });


  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}