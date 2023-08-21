import getUnseenMessages from "@/app/actions/notifications/getUnseenMessages";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";
import getCurrentUser from "@/app/actions/getCurrentUser";

async function Sidebar({children}: {
    children: React.ReactNode,
}){
    const currentUser = await getCurrentUser()
    const unSeenMessages = await getUnseenMessages()
    console.log("UNSEEN: ",  unSeenMessages);
    console.log("huuh");
    
    
    
    return (
        <div className="h-full">
            <DesktopSidebar unSeen={unSeenMessages} currentUser={currentUser!}/>
            <MobileFooter />
            <main className="lg:pl-20 h-full">
            {children}
            </main>
        </div>
    );
}

export default Sidebar;