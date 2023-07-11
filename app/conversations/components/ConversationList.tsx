"use client"

import useConversation from '@/app/hooks/useConversation'
import { FullConversationType } from '@/app/types'
import clsx from 'clsx'
import {MdOutlineGroupAdd} from "react-icons/md"
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import ConversationBox from '@/app/conversations/components/ConversationBox'

interface ConversationListProps {
   initialItems: FullConversationType[]
}
const ConversationList: FC<ConversationListProps> = ({
    initialItems
}) => {
  const router = useRouter()
  const [items, setItems] = useState(initialItems)
  const {conversationId, isOpen} = useConversation()
  return (
    <aside
    className={clsx(`
    fized inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200`, 
    isOpen ? "hidden" : "block w-full let-0")}
    >
      <div className="px-5">
          <div className="flex justify-between mb-4 pt-4">
            <div className="text-2xl font-bold text-neutral-800">
              Chats
            </div>
              <div className='rounded-full p-2 bg-gray-100 text-gray-600 cursor-pointer hover:opacity-75 transition'>
                <MdOutlineGroupAdd size={20}/>
              </div>
          </div>
          {items.map((item) => (
              <ConversationBox
                key={item.id}
                data={item}
                selected={conversationId === item.id}
               />
          ))
          }
      </div>
    </aside>
  )
}

export default ConversationList