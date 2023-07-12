"use client"

import Avatar from '@/app/components/Avatar'
import useOtherUser from '@/app/hooks/useOtherUser'
import { Conversation, User } from '@prisma/client'
import Link from 'next/link'
import { FC } from 'react'
import { HiChevronLeft } from 'react-icons/hi2'
interface HeaderProps {
  conversation: Conversation & {
    users: User[]
  } 
}
const Header: FC<HeaderProps> = ({
    conversation
}) => {
  const otherUser = useOtherUser(conversation)

  const statusText = () => {
    if(conversation.isGroup){
      return conversation.users.length + " members"
    }
    return "Active"
  }

  return (
    <div className='bg-white w-full flex border-b-[1px] sm:px-4 py-3 lg:px-6 justify-between items-center shadow-sm'> 
        <div className="flex gap-3 items-center">
          <Link className='lg:hidden block text-sky-700 hover:text-sky-800 transition cursor-pointer' href={"/conversations"}>
            <HiChevronLeft size={32}/>
          </Link> 
          <Avatar user={otherUser}/>
        </div>
    </div>
  )
}

export default Header