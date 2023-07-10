import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";


export async function POST(
    request: Request
){
    try{
        const currentUser = await getCurrentUser()
        const {userId, isGroup, members, name} = await request.json()
        if (!currentUser?.id || !currentUser?.email) {
            return new NextResponse('Unauthorized', { status: 400 });
          }
        if(isGroup && (!members || members.length < 2) || !name){
            return new NextResponse("Invalid data",{status: 400})
        }
        if(isGroup){
            const newConversation = await prisma.conversation.create({
                data: {
                    name, 
                    isGroup,
                    users: {
                        connect: [
                            ...members.map((member: {value: string}) => () => ({
                                id: member.value
                            })),
                            {
                                id: currentUser?.id
                            }
                        ]
                    }
                },
                include: {
                    users: true
                }
            })
            return NextResponse.json(newConversation)
        }
    }catch(error){
        return new NextResponse("Internal Error", {status: 500})
    }
}