"use client";

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";
import { SlLogout } from "react-icons/sl";
import { signOut } from "next-auth/react";
import ThemeButton from "./ThemeButton";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  return (
    <div
      className="
        fixed 
        justify-between 
        w-full 
        bottom-0 
        z-40 
        flex 
        items-center 
        bg-white 
        border-t-[1px] 
        lg:hidden
      "
    >
      {routes.map((route: any) => (
        <MobileItem
          key={route.href}
          href={route.href}
          active={route.active}
          icon={route.icon}
          onClick={route.onClick}
        />
      ))}
      <span className="group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:text-black hover:bg-gray-100">
      <ThemeButton size={21}/>

      </span>

      <span className="group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:text-black hover:bg-gray-100">
        <SlLogout
          onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
          size={23}
        />
      </span>
    </div>
  );
};
export default MobileFooter;
