import getEvents from "@/app/actions/getEvents";
import Sidebar from "@/app/components/sidebar/Sidebar";
import Calender from "../../teams/components/Calender"


export default async function CalenderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userEvents = await getEvents();

  return (
    <Sidebar>
      <div className="py-8 pr-20 text-[12px]">
        <Calender userEvents={userEvents} />
        {children}
      </div>
    </Sidebar>
  );
}
