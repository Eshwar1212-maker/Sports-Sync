import { SheetDescription } from '@/components/ui/sheet'
import { FC } from 'react'
interface EventNotificationsProps {
  
}
const EventNotifications: FC<EventNotificationsProps> = ({
  
}) => {
  return (
    <SheetDescription className='py-[300px] items-center text-center flex justify-center flex-col overflow-y-scroll max-h-[830px]'>
    <p className="text-2xl">No new events</p>
    <p className="py-2 px-3 text-md">
      You will get notified when a new event is added if you are in a team workspace.
    </p>
  </SheetDescription>
  )
}

export default EventNotifications