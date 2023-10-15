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
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AllNotifications from "./AllNotifications";
import EventNotifications from "./EventNotifications";
import PersonalRecordNotifications from "./PersonalRecordNotifications";
import MessageNotifications from "./MessageNotifications";

export function NotificationsSheet({ notifications }: any) {
  const [currentNotifications, setCurrentNotifications] =
    useState(notifications);

  const eventNotifications = currentNotifications.filter((n: any) => {
    return n.recipientImage === null
  })
  const messageNotifications = currentNotifications.filter((n: any) => {
    return n.recipientImage !== null
  })



  const handleDelete = (id: string) => {
    
    const updatedNotifications = currentNotifications.filter(
      (noti: any) => noti.id !== id
    );
    setCurrentNotifications(updatedNotifications);
  };

  return (
    <div className="grid grid-cols-2 relative">
      <Sheet>
        <SheetTrigger asChild>
          <div className={notifications?.length > 0 ? "mx-auto flex flex-col" : "mx-auto flex flex-col"}>
            {notifications?.length > 0 && (
              <span className="mb-7 ml-[7px] mx-auto pl-[6px] text-sm">
                {notifications?.length}
              </span>
            )}
            {notifications?.length > 0 ? (
              <IoIosNotifications
                className={notifications?.length > 0 ? " my-[-33px]" : ""}
                size={35}
                color="#91C0F0"
              />
            ) : (
              <IoIosNotificationsOutline
                className={notifications?.length > 0 ? " my-[-33px]" : ""}
                size={35}
                color=""
              />
            )}
          </div>
        </SheetTrigger>
        <SheetContent className="bg-white dark:bg-black" side={"left"}>
          <SheetHeader className="">
            <h2 className="font-bold text-lg">Notifications</h2>
          </SheetHeader>
          <SheetClose className="absolute top-1 right-2" />
          <Tabs defaultValue="all">
            <TabsList className="flex flex-row w-full">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="personalrecords">Personal Records</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
            <AllNotifications notifications={notifications} currentNotifications={currentNotifications} handleDelete={handleDelete}/>
            </TabsContent>
            <TabsContent value="messages">
              <MessageNotifications notifications={notifications} currentNotifications={messageNotifications} handleDelete={handleDelete}/>
            </TabsContent>
            <TabsContent value="events">
              <EventNotifications notifications={notifications} currentNotifications={eventNotifications} handleDelete={handleDelete}/>
            </TabsContent>
            <TabsContent value="personalrecords">
              <PersonalRecordNotifications />
            </TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>
    </div>
  );
}
