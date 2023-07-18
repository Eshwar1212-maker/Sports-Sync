"use client"

import { Conversation, User } from '@prisma/client'
import { FC } from 'react'

interface ProfileDrawerProps {
    isOpen: boolean
    onClose: () => void
    data: Conversation & {users: User[]}
}
const ProfileDrawer: FC<ProfileDrawerProps> = ({
  
}) => {
  return (
    <div className=''>
      
    </div>
  )
}

export default ProfileDrawer