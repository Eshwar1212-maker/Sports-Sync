import getEvents from "../actions/getEvents";
import Sidebar from "../components/sidebar/Sidebar";


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
