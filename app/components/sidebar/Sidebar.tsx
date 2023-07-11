import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getUsers from "@/app/actions/getUsers";

async function Sidebar({children}: {
    children: React.ReactNode,
}){
    const currentUser = await getCurrentUser()
    const allUsers = await getUsers()
    console.log(allUsers);
    
    return (
        <div className="h-full">
            <DesktopSidebar currentUser={currentUser!}/>
            <MobileFooter />
            <main className="lg:pl-20 h-full">
            {children}
            </main>
        </div>
    );
}

export default Sidebar;