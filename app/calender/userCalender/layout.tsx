import getEvents from "@/app/actions/getEvents";
import Sidebar from "@/app/components/sidebar/Sidebar";
import Calender from "../../teams/components/Calender"
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
            <Link
          href="/calender" 
          className="
            lg:hidden 
            block 
            text-sky-500 
            hover:text-sky-600 
            transition 
            cursor-pointer
          "
        >
          <HiChevronLeft size={32} />
        </Link>
      <div className="py-8 px-10 xl:px-0 xl:pr-20 text-[12px]">
        <Calender userEvents={userEvents} />
        {children}
      </div>
    </Sidebar>
  );
}
