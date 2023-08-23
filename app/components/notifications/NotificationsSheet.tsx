"use client";
import getUnseenMessages from "@/app/actions/notifications/getUnseenMessages";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import NotificationItem from "./NotificationItem";
import { useTheme } from "next-themes";
import clsx from "clsx";

type Notification = {
  name: string;
  image: any;
  body: string;
  date?: string
};

export function NotificationsSheet({ unSeen, workouts }: any) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [record, setRecord] = useState(workouts);

  console.log(record);

  useEffect(() => {
    let newNotifications = unSeen.map((item: any): Notification => {
      return {
        name: item.sender.name,
        image: item?.sender?.image,
        body: item?.body,
      };
    });
    newNotifications = newNotifications.concat(
      record.map((rec: any) => {
        return {
          name: rec.title,
          image: rec.weight,
          body: "New personal record",
          date: rec.date
        };
      })
    );
    setNotifications((prevNotifications) => {
      const seen = new Set(
        prevNotifications.map((item) => JSON.stringify(item))
      );
      const uniqueNotifications = newNotifications.filter(
        (item: any) => !seen.has(JSON.stringify(item))
      );
      return [...prevNotifications, ...uniqueNotifications];
    });
  }, [unSeen]);

  const { theme } = useTheme();
  return (
    <div className="grid grid-cols-2 relative">
      <Sheet>
        <SheetTrigger asChild>
          <div
            className={
              notifications.length > 0
                ? "mx-auto flex flex-col my-10"
                : "mx-auto flex flex-col"
            }
          >
            <IoIosNotificationsOutline
              className={notifications.length > 0 ? " my-[-33px]" : ""}
              color={
                notifications.length > 0 && theme === "light" ? "blue" : ""
              }
              size={35}
            />
          </div>
        </SheetTrigger>
        <SheetContent
          className={theme === "light" ? "bg-white" : "bg-black"}
          side={"left"}
        >
          <SheetHeader>
            <h2 className="font-bold text-lg boder-b-[2px] border-b-black">
              Notifications
            </h2>
          </SheetHeader>
          <SheetClose className="absolute top-1 right-2" />
          <SheetDescription className="items-center text-center flex justify-center py-[30px] flex-col">
            {notifications.length === 0 && record.length === 0 && (
              <p className="text-2xl">No new notifications</p>
            )}
            {notifications.map((item) => {
              return (
                <NotificationItem
                  name={item.name}
                  image={item.image}
                  body={item.body}
                  date={item.date?.toString()}
                />
              );
            })}
          </SheetDescription>
          <SheetFooter></SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
