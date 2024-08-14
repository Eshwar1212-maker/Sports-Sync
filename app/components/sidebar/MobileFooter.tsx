"use client";

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";
import clsx from "clsx";
import { CiSettings } from "react-icons/ci";
import { useState } from "react";
import SettingsModal from "./settingsmodal/SettingsModal";

const MobileFooter = ({user}: any) => {
  const routes = useRoutes();
  const { isOpen } = useConversation();
  const [open, setOpen] = useState(false)

  if (isOpen) {
    return null;
  }


  return (
    <div className="fixed justify-between w-full bottom-0 z-50 flex items-center border-t-[1px] lg:hidden overflow-x-scroll bg-gray-100 dark:bg-slate-900">
      <SettingsModal currentUser={user} isOpen={open} onClose={() => setOpen(false)}/>
      {routes.map((route: any) => (
        <>
          <MobileItem
            key={route.href}
            href={route.href}
            active={route.active}
            icon={route.icon}
            onClick={route.onClick}
          />
        </>
      ))}

    <CiSettings
     onClick={() => setOpen(true)}
     className="group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center text-gray-500 hover:text-black pr-4 pl-3"
     size={31} />

    </div>
  );
};
export default MobileFooter;
