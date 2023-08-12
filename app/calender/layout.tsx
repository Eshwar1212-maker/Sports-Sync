import Sidebar from "../components/sidebar/Sidebar";


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
