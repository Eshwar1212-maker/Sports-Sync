"use client";

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";
import { SlLogout } from "react-icons/sl";
import { signOut } from "next-auth/react";
import clsx from "clsx";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  

  if (isOpen) {
    return null;
  }

  return (
    <div className={clsx("fixed justify-between w-full bottom-0 z-40 flex items-center border-t-[1px] lg:hidden")}>
      {routes.map((route: any) => (
        <MobileItem
          key={route.href}
          href={route.href}
          active={route.active}
          icon={route.icon}
          onClick={route.onClick}
        />
      ))}
      <SlLogout
          onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
          size={23}
        />
    </div>
  );
};
export default MobileFooter;
