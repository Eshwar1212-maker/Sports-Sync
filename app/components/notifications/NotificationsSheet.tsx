"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoIosNotifications, IoIosNotificationsOutline } from "react-icons/io";
import { useTheme } from "next-themes";
import NotificationItem from "./NotificationItem";
import { useState } from "react";
import clsx from "clsx";


export function NotificationsSheet({ notifications }: any) {

  const [currentNotifications, setCurrentNotifications] = useState(notifications);

  const handleDelete = (id: string) => {
    const updatedNotifications = currentNotifications.filter((noti: any) => noti.id !== id);
    setCurrentNotifications(updatedNotifications);
  };


  const { theme } = useTheme();
  return (
    <div className="grid grid-cols-2 relative">
      <Sheet>
        <SheetTrigger asChild>
          <div
            className={
              notifications?.length > 0
                ? "mx-auto flex flex-col"
                : "mx-auto flex flex-col"
            }
          >
          {notifications?.length > 0 &&  <span className="mb-7 ml-[7px] mx-auto pl-[6px] text-sm">{notifications?.length}</span>}
          {
            notifications?.length > 0 ?          <IoIosNotifications
            className={notifications?.length > 0 ? " my-[-33px]" : ""}
            size={35}
            color="#91C0F0"
            /> : 
   
          <IoIosNotificationsOutline
            className={notifications?.length > 0 ? " my-[-33px]" : ""}
            size={35}
            color=""
          />
 
          }

         
          </div>
        </SheetTrigger>
        <SheetContent
          className={theme === "light" ? "bg-white" : "bg-black"}
          side={"left"}
        >
          <SheetHeader>
            <h2 className="font-bold text-lg">
              Notifications
            </h2>
          </SheetHeader>
          <SheetClose className="absolute top-1 right-2" />

          <SheetDescription className={clsx("items-center text-center flex justify-center flex-col overflow-y-scroll max-h-[830px]", notifications.length === 0 && "my-[40px] py-[300px]")}>
            {notifications.length === 0 && (
              <div>
              <p className="text-2xl">No new notifications</p>
              <p className="py-2 px-3 text-md">You will get notifications when someone invites you to a group or team, and when you hit personal records on your workouts.</p>
              </div>
            )}

            {currentNotifications.map((notification: any) => {
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
          <SheetFooter></SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
