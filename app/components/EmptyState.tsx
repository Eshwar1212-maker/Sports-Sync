import { FC } from 'react'

interface EmptyStateProps {
  children?: React.ReactNode
}
const EmptyState: FC<EmptyStateProps> = ({
    children
}) => {
  return (
    <div className='px-4 py-10 sm:px-6 lg:px-8 h-full flex justify-center items-center bg-gray-100'>
        
    </div>
  )
}

export default EmptyState