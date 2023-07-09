"use client"

import { User } from '@prisma/client'
import { FC } from 'react'
import UserBox from './UserBox'
interface UserListProps {
  users: User[]
}
const UserList: FC<UserListProps> = ({
  users
}) => {
  console.log(users);
  
  return (

    <aside
    className='fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r block w-full left-0 border-gray-200'
    >
        <div className='px-5'>
            <div className="flex-col">
                <div className="text-2xl font-bold text-neutral-800 py-4">
                        Users
                </div>
            </div>
            {
              users.map((user) => {
                return <UserBox key={user.id} data={user} />
              })
            }
        </div>
    </aside>

  )
}

export default UserList