import { FC } from 'react'
import EmptyState from '../components/EmptyState'
import Calender from "../teams/components/Calender"

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