'use client';
import { useState } from "react";
import UserBox from "./UserBox";


import { User } from "@prisma/client";


interface UserListProps {
  items: User[];
}

const UserList: React.FC<UserListProps> = ({ 
  items,
}) => {

  const [input, setInput] = useState<string>("")
  const newList = items.filter((item: any) => item.name.toLowerCase().includes(input.toLowerCase()))

  return ( 
    <aside 
      className="
        fixed 
        inset-y-0 
        pb-20
        lg:pb-0
        lg:left-20 
        lg:w-80 
        lg:block
        overflow-y-auto 
        border-r 
        border-gray-200
        block w-full left-0
      "
    >

      <div className="px-5">
        <div className="flex-col">
          <div 
            className="
              text-2xl 
              font-bold 
              text-neutral-800 
              py-4
            "
          >
            People
          </div>
          <input onChange={(e) => setInput(e.target.value)} className="border-[1px] pb-2 my-1 rounded-lg p-1 w-full border-black" placeholder="Search users..."/>

        </div>
            {
                newList.map((item) => {
                    return <UserBox
                    key={item.id}
                    data={item}
                     />
                })
            }
      </div>
    </aside>
  );
}
 
export default UserList;