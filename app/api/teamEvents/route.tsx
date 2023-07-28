import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(
  request: Request,
) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const {
     notes,
     title
    } = body;

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse('Unauthorized', { status: 400 });
    }

      const newEvent = await prisma.event.create({
        data: {
          notes, 
          title
    
        },
      });
      return NextResponse.json(newEvent);
    } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}