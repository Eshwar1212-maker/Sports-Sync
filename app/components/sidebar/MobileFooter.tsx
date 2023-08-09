"use client";

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";
import { SlLogout } from "react-icons/sl";
import { signOut } from "next-auth/react";
import ThemeButton from "./ThemeButton";
import { useTheme } from "next-themes";
import clsx from "clsx";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  const {theme} = useTheme()
  console.log(theme);
  

  if (isOpen) {
    return null;
  }

  return (
    <div className={clsx("fixed justify-between w-full bottom-0 z-40 flex items-centerbg-white border-t-[1px] lg:hidden", theme == "dark" ? "bg-[#111111]" : "bg-white")}>
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
