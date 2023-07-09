"use client"

import { User } from '@prisma/client'
import Image from 'next/image'
import { FC } from 'react'

interface AvatarProps {
  currentUser: User

}
const Avatar: FC<AvatarProps> = ({
    currentUser
}) => {
  return (
    <div className='relative'>
      <div 
      className='relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11'
      >
        <Image
        alt='Avatar'
        src={currentUser?.image || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"}
        fill
        />
      </div>
      <span
       className='absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3'
       />
    </div>
  )
}

export default Avatar