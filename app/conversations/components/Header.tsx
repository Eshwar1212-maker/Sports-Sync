'use client';

import { HiChevronLeft } from 'react-icons/hi'
import { HiEllipsisHorizontal } from 'react-icons/hi2';
import {  useState } from "react";
import Link from "next/link";
import { Conversation, User } from "@prisma/client";
import useOtherUser from "@/app/hooks/useOtherUser";
import Avatar from "@/app/components/Avatar";
import AvatarGroup from "@/app/components/AvatarGroup";
import ProfileDrawer from "./ProfileDrawer";
import { useTheme } from 'next-themes';
import clsx from 'clsx';

interface HeaderProps {
  conversation: Conversation & {
    users: User[]
  }
  currentUser: any
  users: User[]
}

const Header: React.FC<HeaderProps> = ({ conversation, currentUser, users }) => {
  const otherUser = useOtherUser(conversation);
  const [drawerOpen, setDrawerOpen] = useState(false);


  const {theme} = useTheme()

  return (
  <>
    <ProfileDrawer 
      data={conversation} 
      isOpen={drawerOpen} 
      onClose={() => setDrawerOpen(false)}
      currentUser={currentUser}
      users={users}
    />
    <div className={clsx("w-full flex border-b-[1px] sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-sm", theme == "light" && "bg-white")}>
      <div className="flex gap-3 items-center">
        <Link
          href="/conversations" 
          className="
            lg:hidden 
            block 
            text-sky-500 
            hover:text-sky-600 
            transition 
            cursor-pointer
          "
        >
          <HiChevronLeft size={32} />
        </Link>
        {conversation.isGroup ? (
          <AvatarGroup users={conversation.users} />
        ) : (
          <Avatar user={otherUser} />
        )}
        <div className="flex flex-co">
          <div>{conversation.name || otherUser.name}
          </div>
        </div>
      </div>
      <HiEllipsisHorizontal
        size={32}
        onClick={() => setDrawerOpen(true)}
        className="
          text-sky-500
          cursor-pointer
          hover:text-sky-600
          transition
        "
      />
    </div>
    </>
  );
}
 
export default Header;