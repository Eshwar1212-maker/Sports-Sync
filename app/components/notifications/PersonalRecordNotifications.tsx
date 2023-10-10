import { SheetDescription } from '@/components/ui/sheet'
import { FC } from 'react'
interface PersonalRecordNotificationsProps {
  
}
const PersonalRecordNotifications: FC<PersonalRecordNotificationsProps> = ({
  
}) => {
  return (
    <SheetDescription className='py-[300px] items-center text-center flex justify-center flex-col overflow-y-scroll max-h-[830px]'>
    <p className="text-2xl">No recent PRs</p>
    <p className="py-2 px-3 text-md">
      This will be a list of all the personal records you have hit on your exercises. Pr's will also show as a blue trophy on your workout log.
    </p>
  </SheetDescription>
  )
}

export default PersonalRecordNotifications