import getNotifications from "@/app/actions/getNotifications";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";
import getCurrentUser from "@/app/actions/getCurrentUser";
import deleteAcceptedNotifications from "@/app/actions/deleteAcceptedNotifications";

async function Sidebar({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();
  const notifications = await getNotifications();

  if (notifications?.length > 0) {
    await deleteAcceptedNotifications();
  }

  return (
    <div className="h-full">
      <DesktopSidebar
        notifications={notifications}
        currentUser={currentUser!}
      />
      <MobileFooter user={currentUser} />
      <main className="lg:pl-[59px] h-full">{children}</main>
    </div>
  );
}

export default Sidebar;
