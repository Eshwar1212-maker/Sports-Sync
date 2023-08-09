import { FC } from 'react'
import EmptyState from '../components/EmptyState'
import Desktop from './components/Desktop'

interface PageProps {
  
}
const page: FC<PageProps> = ({
  
}) => {
  return (
    <div className='h-full'>
        <Desktop />
    </div>
  )
}

export default page