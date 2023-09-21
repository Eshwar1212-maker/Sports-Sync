import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";


interface IParams {
    teamCalender?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  try {
    const currentUser = await getCurrentUser();
    const {teamCalender} = params;

    if(!teamCalender) return new NextResponse("No Id", {status: 401})
    
    if(!currentUser?.id) return new NextResponse("Unauthorized", {status: 401})


      const deletedTeam = await prisma.team.delete({
        where: {
          id: teamCalender
        }
      })
      return NextResponse.json(deletedTeam)
    

  } catch (error) {
    console.log(error);
    
    return new NextResponse('Error', { status: 500 });
  }
}