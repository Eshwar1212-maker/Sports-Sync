
import Avatar from '@/app/components/Avatar'
import { User } from '@prisma/client'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import {FC } from 'react'

interface UserBoxProps {
  data: User
}
const UserBox: FC<UserBoxProps> = ({
    data
}) => {
    const { mutate: createConversation, isLoading, error } = useMutation(
        () =>
        axios.post('/api/conversations', {
        userId: data.id
    }),
        {
        onSuccess: async (data) => {
            router.push(`/conversations/${data.data.id}`)
        },
        onError: (error) => {
            console.log(error);
        }
        }
    )
  const router = useRouter()

  return (
    <div
    className='w-full relative flex items-center space-x-3 bg-white p-3 hover:bg-neutral-100 rounded-lg transition cursor-pointer'
    onClick={() => createConversation()}
    >
      <Avatar user={data}/>
      <div className='min-w-0 flex-1'>
        <div className='focus:outline-none'>
          <div
          className='flex justify-between items-center mb-1'
          >
            <p className='text-sm font-md text-gray-900'>{data.name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserBox;