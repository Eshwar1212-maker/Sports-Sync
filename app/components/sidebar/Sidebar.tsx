import getNotifications from "@/app/actions/getNotifications";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getWorkouts from "@/app/actions/getWorkouts";
import deleteAcceptedNotifications from "@/app/actions/deleteAcceptedNotifications";

async function Sidebar({children}: {
    children: React.ReactNode,
}){
    const currentUser = await getCurrentUser()
    const workouts = await getWorkouts()
    const notifications = await getNotifications()
    const recordWorkouts = workouts?.filter((workout) => {
        return workout.isPersonalRecord === true
    })
    
    await deleteAcceptedNotifications()
    
    return (
        <div className="h-full">
            <DesktopSidebar notifications={notifications} currentUser={currentUser!}/>
            <MobileFooter user = {currentUser} />
            <main className="lg:pl-[76px] h-full">
            {children}
            </main>
        </div>
    );
}

export default Sidebar;