"use client";
import { useState } from "react";

import { User } from "@prisma/client";

interface CalenderSidebarProps {}

const CalenderSidebar: React.FC<CalenderSidebarProps> = ({}) => {
  const [input, setInput] = useState<string>("");

  return (
    <aside
      className="
        fixed 
        inset-y-0 
        pb-20
        lg:pb-0
        lg:left-20 
        lg:w-[240px]
        lg:block
        overflow-y-auto 
        border-r
        border-r-gray-500
        border-gray-200
        block w-full left-0
      "
    >
      <div className="px-5">
        <div className="flex justify-between mb-4 pt-4">
          <div className="text-2xl font-bold">My Calenders</div>
          <div
            className="
                rounded-full 
                text-gray-600 
                cursor-pointer 
                hover:opacity-75 
                transition
              "
          ></div>
        </div>
        <ul className="py-3 w-full">
          <li 
            className='w-full text-lg
             relative flex items-center space-x-3 p-3 hover:bg-neutral-100 rounded-lg transition cursor-pointer'
            >
            My Calender
          </li>
          <li className=""></li>
        </ul>
      </div>
    </aside>
  );
};

export default CalenderSidebar;
