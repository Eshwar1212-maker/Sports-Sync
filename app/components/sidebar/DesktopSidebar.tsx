'use client';

import { useState } from "react";
import { User } from "@prisma/client";
import DesktopItem from "./DeskTopItem";
import useRoutes from "@/app/hooks/useRoutes";
import Avatar from "../Avatar";
import {SlLogout} from "react-icons/sl"
import { GrNotification } from 'react-icons/gr'
import { signOut } from "next-auth/react";
import SettingsModal from "./SettingsModal";
import { IoSettings, IoSettingsSharp } from "react-icons/io5";
import { FcSettings } from "react-icons/fc";
import { FiSettings } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";

interface DesktopSidebarProps {
  currentUser: User
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
  currentUser
}) => {
  const routes = useRoutes({ notificationsNumber: 7 });
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <>
      <SettingsModal
      currentUser={currentUser}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
       />
    <div>
      <div className="
        hidden 
        lg:fixed 
        lg:inset-y-0 
        lg:left-0 
        lg:z-40 
        
        lg:w-20 
        xl:px-6
        lg:overflow-y-auto 
        lg:bg-white 
        lg:border-r-[1px]
        lg:pb-4
        lg:flex
        lg:flex-col
        justify-between
      ">
        <nav className="mt-4 flex flex-col justify-between">
          <ul role="list" className="flex flex-col items-center space-y-4">
            {routes.map((item) => (
              <DesktopItem
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
                notificationNumber={4}
              />

            ))}
            <li className="relative py-4 h-6 w-6 shrink-0 cursor-pointer">
              <span className="absolute top-0 right-0 bg-blue-400 text-white text-[12px] w-5 h-5 rounded-full flex items-center justify-center">
                5
              </span>
              <GrNotification size={24} />
            </li>
            <li onClick={() => signOut()} className="py-8 h-6 w-6 shrink-0 cursor-pointer">
              <SlLogout size={23} />
            </li>

          </ul>
        </nav>
        <nav className="mt-4 flex flex-col justify-between items-center">
          <div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer hover:opacity-75 transition"
          >
          </div>
        </nav>
        <nav
          className="mt-4 flex flex-col justify-between items-center"
        >
          <div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer hover:opacity-75 transition"
          >
           <CiSettings size={35}/>
          </div>
        </nav>
      </div>
    </div>
    </>
 
  );
}

export default DesktopSidebar;