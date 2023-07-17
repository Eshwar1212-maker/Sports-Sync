"use client"

import useConversation from '@/app/hooks/useConversation'
import { FullMessageType } from '@/app/types'
import { FC, useEffect, useRef, useState } from 'react'
import MessageBox from './MessageBox'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
interface BodyProps {
  initialMessages: any
}
const Body: FC<BodyProps> = ({
  initialMessages
}) => {

  const [messages, setMessages] = useState(initialMessages)
  const bottomRef = useRef<HTMLDivElement>(null)
  const conversationId = useConversation()

  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`);
  }, [conversationId]);
  
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