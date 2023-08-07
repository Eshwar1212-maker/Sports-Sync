import { FC } from 'react'
import Header from './ui/Header'
import Workout from './ui/Workout'
interface DesktopProps {
  
}
const Desktop: FC<DesktopProps> = ({
  
}) => {
  return (
    <div className=''>
        <Header />
        <Workout />
    </div>
  )
}

export default Desktop