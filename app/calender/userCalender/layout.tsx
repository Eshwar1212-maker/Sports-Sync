import getEvents from "@/app/actions/getEvents";
import Sidebar from "@/app/components/sidebar/Sidebar";
import Calender from "../components/Calender"
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";


export default async function CalenderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userEvents = await getEvents();
  

  return (
    <Sidebar>
      <div className="py-8 px-10 lg:px-0 lg:mr-20 text-[12px]">
        <Calender userEvents={userEvents} />
        {children}
      </div>
    </Sidebar>
  );
}
