import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
  conversationId?: string;
}

export async function PATCH(
  request: Request,
  { params }: { params: IParams }
) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const {conversationId, bootedMember} = body

    if (!currentUser?.id) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!bootedMember) {
      return new NextResponse("bootedMemberId is required", { status: 400 });
    }

    const conversation = await prisma.conversation.findUnique({
      where: {
        id: conversationId,
      },
      include: {
        users: true
        },
       
    });

    const newUsers = conversation?.userIds.filter((userId) => {
      return userId !== bootedMember
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
    console.log(error);
    
    return new NextResponse('Error', { status: 500 });
  }
}