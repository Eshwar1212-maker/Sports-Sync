"use client"

import { FullConversationType } from '@/app/types'
import { FC } from 'react'

interface ConversationBoxProps {
  data: FullConversationType
  selected: boolean
}
const ConversationBox: FC<ConversationBoxProps> = ({
  data, selected
}) => {
  return (
    <div className=''>
      ConversationBox
    </div>
  )
}

export default ConversationBox