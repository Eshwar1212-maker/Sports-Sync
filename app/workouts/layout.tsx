import Sidebar from "../components/sidebar/Sidebar"
import Main from "./components/Main"

export default async function WorkoutsLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (

        <Sidebar>
            <div className="h-full">
                <Main />
                {children}
            </div>
        </Sidebar>

    )
}