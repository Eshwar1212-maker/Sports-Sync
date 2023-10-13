import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { redis } from "@/app/libs/redis";
import getUserById from "@/app/actions/getUserById";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const { notes, title, date, teamId, poster } = body;

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse("Unauthorized", { status: 400 });
    }
    //ADDING THE EVENT
    const newEvent = await prisma.event.create({
      data: {
        notes,
        title,
        date,
        poster,
        user: {
          connect: {
            id: currentUser.id,
          },
        },
        Team: {
          connect: {
            id: teamId,
          },
        },
      },
    });

    //SENDING NOTIFICATIONS TO ALL TEAM MEMBERS FOR THE NEW EVENT ADDED
    const team = await prisma.team.findUnique({
      where: {
        id: newEvent?.teamId!,
      },
      select: {
        userIds: true,
      },
    });
    console.log("TEAMS USER ID's: ", team?.userIds);
    const teamMembers = team?.userIds.map(async (member: string) => {
      return await prisma.user.findUnique({
        where: {
          id: member,
        },
        select: {
          email: true,
        },
      });
    });

    const teamMemberEmails = await (await Promise.all(teamMembers!)).map((m) => m?.email)
    console.log("TEAM MEMBERS: ", teamMemberEmails);

 


    await redis.del(`${teamId}team`);

    return NextResponse.json(newEvent);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
