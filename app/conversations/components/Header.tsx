"use client"

import Avatar from '@/app/components/Avatar'
import useOtherUser from '@/app/hooks/useOtherUser'
import { Conversation, User } from '@prisma/client'
import Link from 'next/link'
import { FC, useState } from 'react'
import { HiChevronLeft, HiEllipsisHorizontal, HiEllipsisVertical } from 'react-icons/hi2'
import ProfileDrawer from './ProfileDrawer'
interface HeaderProps {
  conversation: Conversation & {
    users: User[]
  } 
}
const Header: FC<HeaderProps> = ({
    conversation
}) => {
  const otherUser = useOtherUser(conversation)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const statusText = () => {
    if(conversation.isGroup){
      return conversation.users.length + " members"
    }
    return "Active"
  }

  return (
    <>
        <ProfileDrawer
            data={conversation}
            isOpen={drawerOpen}
            onClose={() => setDrawerOpen(false)}
         />
        <div className=' w-full flex border-b-[1px] sm:px-4 py-3 lg:px-6 justify-between items-center shadow-sm'> 
        <div className="flex gap-3 items-center">
          <Link className='lg:hidden block text-sky-700 hover:text-sky-800 transition cursor-pointer' href={"/conversations"}>
            <HiChevronLeft size={32}/>
          </Link> 
          <Avatar user={otherUser}/>
          <div className='flex flex-col'>
            <div>
              {conversation.name || otherUser?.name}
            </div>
            <div className="text-sm font-light text-neutral-500">
              {statusText()}
            </div>
          </div>
        </div>
        <HiEllipsisVertical
        size={32}
        onClick={() => {setDrawerOpen(!drawerOpen)}}
        className='text-sky-500 cursor-pointer hover:text-sky-600 transition'
         />
    </div>
    </>

  )
}

export default Header