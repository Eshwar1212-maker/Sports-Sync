import { FC } from 'react'
import EmptyState from '../components/EmptyState'
import Landing from './components/Landing'

interface PageProps {
  
}
const Home: FC<PageProps> = ({
  
}) => {
  
  return (
    <div className='h-full'>
          <Landing />
    </div>
  )
}

export default Home