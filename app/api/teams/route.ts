import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";


export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const {title, users} = body;

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse("Unauthorized", { status: 400 });
    }

    const team = await prisma.team.create({
        data: {
            title: title,
            admin: currentUser.id,
            users: {
                connect: [
                  ...users.map((member: { value: string }) => ({  
                    id: member.value 
                  })),
                  {
                    id: currentUser.id
                  }
                ]
              }
        },
        include: {
          users: true
        }
    })

    
 
   
    return NextResponse.json(team);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
