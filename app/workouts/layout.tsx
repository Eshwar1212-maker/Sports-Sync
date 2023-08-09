import Sidebar from "../components/sidebar/Sidebar"
import Desktop from "./components/Desktop"

export default async function WorkoutsLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (

        <Sidebar>
            <div className="h-full">
                {children}
            </div>
        </Sidebar>

    )
}