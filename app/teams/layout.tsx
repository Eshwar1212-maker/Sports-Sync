import getEvents from "../actions/getEvents"
import Sidebar from "../components/sidebar/Sidebar"
import Calender from "./components/Calender"


export default async function UsersLayout({
    children
}: {
    children: React.ReactNode
}) {

    const userEvents = await getEvents()
    console.log(userEvents);
    

    return (
        <Sidebar>
            <div className="py-8 px-20 text-[12px]">
                <Calender userEvents={userEvents}/>
                {children}
            </div>
        </Sidebar>

    )
}