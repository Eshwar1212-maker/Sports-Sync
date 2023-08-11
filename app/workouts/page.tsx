import { FC } from 'react'
import EmptyState from '../components/EmptyState'
import Workout from './components/Workout'

interface PageProps {
  
}
const page: FC<PageProps> = ({
  
}) => {
  return (
    <div className='h-full'>
      <Workout />
    </div>
  )
}

export default page