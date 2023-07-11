import getUsers from "../actions/getUsers"
import Sidebar from "../components/sidebar/Sidebar"
import UserList from "../users/components/UserList"
import ConversationList from "./components/ConversationList"

export default async function ConversationsLayout({
    children
}: {
    children: React.ReactNode
}) {
    
    return (
        <Sidebar>
            <div className="h-full">
                <ConversationList 
                initialItems = {[]}
                />
                {children}
            </div>
        </Sidebar>
    )
}