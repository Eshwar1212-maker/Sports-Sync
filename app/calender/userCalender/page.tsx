import EmptyState from '@/app/components/EmptyState'
import { FC } from 'react'

interface PageProps {
  
}
const page: FC<PageProps> = ({
  
}) => {
  
  return (
    <div className='hidden lg:block h-full'>
        <EmptyState children={<></>} />
    </div>
  )
}

export default page