"use client"

import useConversation from '@/app/hooks/useConversation'
import { FullMessageType } from '@/app/types'
import { FC, useRef, useState } from 'react'
import MessageBox from './MessageBox'
interface BodyProps {
  initialMessages: any
}
const Body: FC<BodyProps> = ({
  initialMessages
}) => {

  const [messages, setMessages] = useState(initialMessages)
  const bottomRef = useRef<HTMLDivElement>(null)
  const conversation = useConversation()
  console.log(messages);
  
  return (

    <div className='flex-1 overflow-y-auto'>
 
      {
        messages.map((message: any, i: any) => (
          <MessageBox
          isLast={messages.length - 1 === i}
          key={message.id}
          data={message}
          />
        ))
      }
      <div ref={bottomRef} className='pt-24' />
    </div>
 
  )
}

export default Body