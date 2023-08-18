import { FC } from 'react'
import Dashboard from './components/Dashboard';
import DashBoardSelect from './components/DashboardSelect';

interface PageProps {
  
}
const page: FC<PageProps> = ({
  
}) => {
  return (
    <div className='h-full p-8'>
        
      <DashBoardSelect />
      <Dashboard />
    </div>
  )
}

export default page