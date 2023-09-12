import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { pusherServer } from "@/app/libs/pusher";


export async function POST(
    request: Request
){
    try{
        const currentUser = await getCurrentUser()
        const body = await request.json()
        
        const { message, image, conversationId} = body
        if(!currentUser?.id || !currentUser?.email){
            return new NextResponse('Unauthorized', {status: 401})
        }
        const newMessage = await prisma.message.create({
            data: {
                body: message,
                image: image, 
                conversation: {
                    connect:{
                        id: conversationId
                    }
                },
                sender: {
                    connect: {
                        id: currentUser.id
                    }
                },
            },
            include: {
                sender: {
                    select: {
                        image: true,
                        email: true
                    }
                }
                
            },
        })
        const bufferSize1 = Buffer.from(JSON.stringify(newMessage)).length;
        const updatedConversation = await prisma.conversation.update({
            where: {
                id: conversationId
            },
            data: {
                lastMessageAt: new Date(),
                messages: {
                    connect: {
                        id: newMessage.id
                    }
                }
            },
            include: {
                users: true,
                messages: {
                    include: {
                        seen: true
                    }
                }
            }
        })

        console.log(bufferSize1);
        

        await pusherServer.trigger(conversationId, 'messages:new', newMessage)
        const lastMessage = updatedConversation.messages[updatedConversation.messages.length - 1].body
        updatedConversation.users.map((user) => pusherServer.trigger(user.email!, 'conversatin: update', {
            id: conversationId,
            messages: [lastMessage]
        }))

        return NextResponse.json(newMessage)
    }catch(error){
        console.log(error);
        return new NextResponse('Internal Error', {status: 500})
    }
}