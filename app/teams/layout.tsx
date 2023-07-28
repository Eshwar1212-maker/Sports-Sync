import Sidebar from "../components/sidebar/Sidebar"
import Calender from "./components/Calender"


export default async function UsersLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <Sidebar>
            <div className="py-8 px-20 text-[12px]">
                <Calender />
                {children}
            </div>
        </Sidebar>

    )
}