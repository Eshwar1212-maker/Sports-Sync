import getEvents from "../actions/getEvents";
import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import Calender from "../teams/components/Calender";
import UserList from "../users/components/UserList";
import CalenderSidebar from "./components/calenderSidebar";

export default async function CalenderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userEvents = await getEvents();

  return (
    <Sidebar>
      <div className="py-8 text-[12px]">
        {children}
      </div>
    </Sidebar>
  );
}
