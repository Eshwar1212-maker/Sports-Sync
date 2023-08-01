import getEvents from "../actions/getEvents"
import Sidebar from "../components/sidebar/Sidebar"
import Calender from "../teams/components/Calender"


export default async function CalenderLayout({
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