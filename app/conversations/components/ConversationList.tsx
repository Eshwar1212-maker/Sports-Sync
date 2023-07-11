import { FullConversationType } from '@/app/types'
import { Conversation } from '@prisma/client'
import { FC } from 'react'

interface ConversationListProps {
   initialItems: FullConversationType[]
}
const ConversationList: FC<ConversationListProps> = ({
    initialItems
}) => {
  return (
    <div
    className=''
    >
      
    </div>
  )
}

export default ConversationList