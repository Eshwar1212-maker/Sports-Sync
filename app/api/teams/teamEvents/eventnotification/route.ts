import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function PATCH(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const {notificationId, groupChatId } = body;

    //DELETE THE NOTIFICATION, SINCE A USER WILL ACCEPT, OR DELETE


      await prisma.notifications.delete({
        where: {
          id: notificationId
        }
      })
    

      return new NextResponse("Ok", { status: 200 });
    } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}