import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { pusherServer } from "@/app/libs/pusher";

interface IParams {
  conversationId?: string;
}

export async function POST(
  request: Request,
  { params }: { params: IParams }
) {
  try {
    
    return new NextResponse('Success');
  } catch (error) {
    return new NextResponse('Error', { status: 500 });
  }
}