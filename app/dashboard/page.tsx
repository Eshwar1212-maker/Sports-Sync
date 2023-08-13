import { FC } from 'react'
import Dashboard from './components/Dashboard';

interface PageProps {
  
}
const page: FC<PageProps> = ({
  
}) => {
  return (
    <div className='h-full p-8'>  
      <Dashboard />
    </div>
  )
}

export default page