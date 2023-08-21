import prisma from "@/app/libs/prismadb";
import getCurrentUser from "../getCurrentUser";

  const getUnseenMessages = async () => {
        const currentUser = await getCurrentUser();
        if (!currentUser?.id) {
            return [];
        }
        try {
            const messages = await prisma.message.findMany({
            where: {
                conversation: {
                users: {
                    some: {
                    id: currentUser.id,
                    },
                },
                },
            },
            select: {
                id: true,
                body: true,
                createdAt: true,
                seenIds: true,
                conversationId: true,
                sender: {
                select: {
                    name: true,
                    image: true
                },
                },
            },
            });
            const unseenMessages = messages.filter((message) => !currentUser.seenMessageIds.includes(message.id));
            return unseenMessages;
        } catch (error) {
            return [];
        }
        };

  export default getUnseenMessages;
