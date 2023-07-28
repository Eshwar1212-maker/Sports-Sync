import Sidebar from "../components/sidebar/Sidebar"
import Calender from "../teams/components/Calender"


export default async function UsersLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (

        <Sidebar>
            <div className="h-full p-10">
                <Calender />
                {children}
            </div>
        </Sidebar>

    )
}