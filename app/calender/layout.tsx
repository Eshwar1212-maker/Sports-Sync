import Sidebar from "../components/sidebar/Sidebar";
import Landing from "./components/Landing";


export default async function CalenderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  return (
    <Sidebar>
      <div className="py-8 text-[12px]">
        {children}
      </div>
    </Sidebar>
  );
}
