import { FC } from 'react'
import EmptyState from '../components/EmptyState'

interface PageProps {
  
}
const page: FC<PageProps> = ({
  
}) => {
  return (
    <div className='hidden lg:block lg:pl-80 h-full'>
        <EmptyState children={<div className='text-center items-center flex flex-col'>
            <h3 className='mt-2 text-2xl font-semibold text-gray-900'>Select a chat or start a new conversation</h3>
        </div>} />
    </div>
  )
}

export default page