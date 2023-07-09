import { FC } from 'react'
import EmptyState from '../components/EmptyState'

interface PageProps {
  
}
const page: FC<PageProps> = ({
  
}) => {
  return (
    <div className='hidden lg:block h-full'>
        <EmptyState children={<></>} />
        Workouts
    </div>
  )
}

export default page