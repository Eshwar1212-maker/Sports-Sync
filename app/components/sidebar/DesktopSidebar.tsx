'use client';

import { useState } from "react";
import { User } from "@prisma/client";
import DesktopItem from "./DeskTopItem";
import useRoutes from "@/app/hooks/useRoutes";
import {SlLogout} from "react-icons/sl"
import { signOut } from "next-auth/react";
import SettingsModal from "./SettingsModal";
import { CiSettings } from "react-icons/ci";
import ThemeButton from "./ThemeButton";
import { IoIosNotificationsOutline } from "react-icons/io";
import Avatar from "../Avatar";


interface DesktopSidebarProps {
  currentUser: User
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
  currentUser
}) => {
  const routes = useRoutes();
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
                route={item.route}
              />

            ))}
            <li className="relative py-4 h-6 w-6 shrink-0 cursor-pointer">
              <span className="absolute top-0 right-0 bg-blue-100 text-[12px] text-black w-5 h-5 rounded-full flex items-center justify-center">
                5
              </span>
              <IoIosNotificationsOutline size={29} />
            </li>
            <li className="py-8 h-6 w-6 shrink-0 cursor-pointer">
              <SlLogout onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })} size={23} />
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
          <div className="mb-3">
          <ThemeButton/>
          </div>

          <div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer hover:opacity-75 transition"
          >
           <CiSettings size={35}/>
           {/* <Avatar user={currentUser}/> */}
          </div>
        </nav>
      </div>
    </div>
    </>
 
  );
}

export default DesktopSidebar;