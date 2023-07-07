"use client"
import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import DeskTopItem from "./DeskTopItem";

const DesktopSidebar = ({background}: any) => {
  const [isOpen, setIsOpen] = useState(false)
  const routes = useRoutes()
  return (
    <div 
    className={`first-letter:hidden lg:fixed lg:inset-y-0 lg:z-40 lg:left-0 lg:w-20 lg:overflow-y-auto
      lg:flex lg:flex-col justify-between lg:border-r-[1px]`}
    >
      <nav className="">
        <ul
        role="list"
        className="flex flex-col items-center space-y-1"
        >   
          {routes.map((item) => {
           return  <DeskTopItem 
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={item.active}
              onClick={item.onClick}
            />
          })}
        </ul>
      </nav>
    </div>
  )
}

export default DesktopSidebar;