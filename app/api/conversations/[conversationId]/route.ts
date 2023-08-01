import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { pusherServer } from "@/app/libs/pusher";


interface IParams {
  conversationId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  try {
    const currentUser = await getCurrentUser();
    const {conversationId} = params;
    if(!currentUser?.id) return new NextResponse("Unauthorized", {status: 401})
    const existingConversation = await prisma.conversation.findUnique({
      where: {
        id: conversationId
      },
      include: {
        users: true
      }
    })
    if(!existingConversation) return new NextResponse("Invalid Id", {status: 400})
    const deletedConversation = await prisma.conversation.deleteMany({
      where: {
        id: conversationId,
        userIds: {
          hasSome: [currentUser.id]
        } 
      }
    })
    existingConversation.users.forEach((user) => {
      if(user.email){
        pusherServer.trigger(user.email, 'conversation:remove', existingConversation)
      }
    })
    return NextResponse.json(deletedConversation)
  } catch (error) {
    return new NextResponse('Error', { status: 500 });
  }
}