import { SheetDescription } from '@/components/ui/sheet'
import clsx from 'clsx'
import { FC } from 'react'
import NotificationItem from './NotificationItem'
interface AllNotificationsProps {
  notifications: any
  currentNotifications: any
  handleDelete: any
}
const MessageNotifications: FC<AllNotificationsProps> = ({
    notifications, currentNotifications, handleDelete
}) => {
  return (
    <SheetDescription
    className={clsx(
      "items-center text-center flex justify-center flex-col overflow-y-scroll max-h-[830px]",
      notifications?.length === 0 && "my-[0px] py-[300px]"
    )}
  >
    {notifications?.length === 0 && (
      <div>
        <p className="text-2xl">No new messages</p>
        <p className="py-2 px-3 text-md">
          You will get notifications when someone invites you to a
          group chat.
        </p>
      </div>
    )}

    {currentNotifications?.map((notification: any) => {
      return (
        <div
          key={notification.id}
          className="border-b-[3px] border-b-slate-600"
        >
          <NotificationItem
            handleDelete={handleDelete}
            notification={notification}
          />
        </div>
      );
    })}
  </SheetDescription>
  )
}

export default MessageNotifications