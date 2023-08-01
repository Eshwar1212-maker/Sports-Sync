import { FC } from 'react'
import EmptyState from '../components/EmptyState'
import Landing from './components/Landing'

interface PageProps {
  
}
const Home: FC<PageProps> = ({
  
}) => {
  
  return (
    <div className='hidden lg:block h-full'>
       <EmptyState>
          <Landing />
      </EmptyState>
    </div>
  )
}

export default Home