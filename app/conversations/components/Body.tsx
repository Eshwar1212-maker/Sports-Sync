"use client"

import useConversation from '@/app/hooks/useConversation'
import { FullMessageType } from '@/app/types'
import { FC, useRef, useState } from 'react'
interface BodyProps {
  initialMessages: any
}
const Body: FC<BodyProps> = ({
  initialMessages
}) => {
  const [messages, setMessages] = useState(initialMessages)
  const bottomRef = useRef<HTMLDivElement>(null)
  const conversation = useConversation()
  return (
    <div className='flex-1 overflow-y-autox'>
      
    </div>
  )
}

export default Body