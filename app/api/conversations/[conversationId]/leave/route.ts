import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { pusherServer } from "@/app/libs/pusher";

interface IParams {
  conversationId?: string;
}

export async function PATCH(
  request: Request,
  { params }: { params: IParams }
) {
  try {
    const currentUser = await getCurrentUser();
    const {conversationId} = params;

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const conversation = await prisma.conversation.findUnique({
      where: {
        id: conversationId,
      },
      include: {
        messages: {
          include: {
            seen: true
          },
        },
        users: true,
      },
    });

    if (!conversation) {
      return new NextResponse('Invalid ID', { status: 400 });
    }

    console.log("CONVERSATION  " , conversation.userIds );
    console.log("CURRENT USER  " + currentUser.id );


    const newUsers = conversation.userIds.filter((userId) => {
      return userId !== currentUser.id
    })
    
    const newConversation = await prisma.conversation.update({
      where: {
        id: conversationId
      },
      data: {
        userIds: newUsers
      }
    })



    return NextResponse.json(newConversation);
  } catch (error) {
    return new NextResponse('Error', { status: 500 });
  }
}