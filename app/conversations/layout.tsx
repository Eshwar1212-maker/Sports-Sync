import getUsers from "../actions/getUsers"
import Sidebar from "../components/sidebar/Sidebar"
import UserList from "../users/components/UserList"

export default async function UsersLayout({
    children
}: {
    children: React.ReactNode
}) {
    const users = await getUsers()
    console.log(users);
    
    return (

        <Sidebar>
            <div className="h-full">
                
                {children}
            </div>
        </Sidebar>

    )
}