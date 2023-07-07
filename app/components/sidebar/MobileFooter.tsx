"use client"

import useConversation from '@/app/hooks/useConversation'
import useRoutes from '@/app/hooks/useRoutes'
import { FC } from 'react'

interface MobileFooterProps {
  
}
const MobileFooter: FC<MobileFooterProps> = ({
  
}) => {
    const routes = useRoutes()
    const {isOpen} = useConversation()
    if(isOpen){
        return null
    }
  return (
    <div>
      
    </div>
  )
}

export default MobileFooter