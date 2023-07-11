import { Conversation } from '@prisma/client'
import { FC } from 'react'

interface ConversationListProps {
   initialItems: Conversation[]
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