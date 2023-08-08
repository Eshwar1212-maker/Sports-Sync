import { FC } from 'react'
import Header from './ui/Header'
import Workout from './ui/Workout'
interface DesktopProps {
  
}
const Desktop: FC<DesktopProps> = ({
  
}) => {
  return (
    <div className='items-center text-center w-full h-full'>
        <Header />
        <Workout />
    </div>
  )
}

export default Desktop