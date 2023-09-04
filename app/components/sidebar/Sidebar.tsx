import getUnseenMessages from "@/app/actions/notifications/getUnseenMessages";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getWorkouts from "@/app/actions/getWorkouts";

async function Sidebar({children}: {
    children: React.ReactNode,
}){
    const currentUser = await getCurrentUser()
    const unSeenMessages = await getUnseenMessages()
    const workouts = await getWorkouts()
    
    const recordWorkouts = workouts?.filter((workout) => {
        return workout.isPersonalRecord === true
    })
    
    
    return (
        <div className="h-full">
            <DesktopSidebar workouts={recordWorkouts} unSeen={unSeenMessages} currentUser={currentUser!}/>
            <MobileFooter user = {currentUser} />
            <main className="lg:pl-[76px] h-full">
            {children}
            </main>
        </div>
    );
}

export default Sidebar;