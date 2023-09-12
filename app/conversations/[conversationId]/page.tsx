
import { getConversationById } from "@/app/actions/getConversationById"
import { getMessages } from "@/app/actions/getMessages"
import EmptyState from "@/app/components/EmptyState"
import Header from "../components/Header"
import Body from "../components/Body"
import Form from "../components/Form"
import getCurrentUser from "@/app/actions/getCurrentUser"
import getUsers from "@/app/actions/getUsers"


interface IParams {
    conversationId: string
}

const ConversationId = async ({ params }: { params: IParams }) => {
    const conversation = await getConversationById(params.conversationId)
    const messages = await getMessages(params.conversationId)
    const currentUser = await getCurrentUser()
    const users = await getUsers()

    if (!conversation) {
        return (
            <div className="lg:pl-80 h-full">
                <div className="h-full flex flex-col">
                    <EmptyState />
                </div>
            </div>
        )
    }
    return (
        <div className="lg:pl-80 h-full">
           <div className="h-full flex flex-col">
            <Header users={users} currentUser={currentUser} conversation={conversation} />
            <Body currentUser={currentUser} initialMessages={messages}/>
            <Form />
           </div>
        </div>
    )
}

export default ConversationId