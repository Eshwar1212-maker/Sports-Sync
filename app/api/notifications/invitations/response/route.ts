import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function PATCH(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const { response, notificationId, groupChatId } = body;

    //MAKE PATCH REQUEST TO EXISTING NOTIFICATION, UPDATE ACCEPTED OR NOT
    const notification = await prisma.notifications.update({
      where: {
        id: notificationId,
      },
      data: {
        accepted: response,
      },
    });

    let newConversation = null;

    if (response === true) {
      const existingConversation = await prisma.conversation.findUnique({
        where: {
          id: groupChatId,
        },
        select: {
          userIds: true,
        },
      });

      if (existingConversation?.userIds && currentUser?.id) {
        const newUsers = [...existingConversation.userIds, currentUser.id];

        newConversation = await prisma.conversation.update({
          where: {
            id: groupChatId,
          },
          data: {
            userIds: newUsers,
          },
        });
      }
    }

    if(response === false){
      await prisma.notifications.delete({
        where: {
          id: notificationId
        }
      })
    }

    return NextResponse.json({ notification, newConversation });
  } catch (error) {
    console.log(error);

    return new NextResponse("Internal Error", { status: 500 });
  }
}
