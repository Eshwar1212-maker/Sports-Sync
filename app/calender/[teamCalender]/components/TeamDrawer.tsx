"use client"

import { ActionTooltip } from "@/app/components/ActionToolTip";
import Avatar from "@/app/components/Avatar";
import { Button } from "@/components/ui/button";

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
import { Team, User } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import DeleteWorkSpaceModal from "./modals/DeleteWorkSpaceModal";
import InviteUsersModal from "./modals/InviteUsersModal";
import LeaveWorkSpaceModal from "./modals/LeaveWorkSpaceModal";
import ConfirmBootModal from "./modals/ConfirmBootModal";

interface ProfileDrawerProps {
  team: Team & {
    users: User[];
    events: any[];
  };
  currentUser: User;
  admin?: string | null;
  adminPhoto?: string | null;
}
export function TeamDrawer({
  team,
  currentUser,
  admin,
  adminPhoto,
}: ProfileDrawerProps) {
  const [activity, setActivity] = useState<any[]>(team?.events)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [confirmLeave, setConfirmLeave] = useState(false)
  const [inviteModal, setInviteModal] = useState(false)
  const [confirmBoot, setConfirmBoot] = useState(false)

  useEffect(() => {
    
    const newActivity = team?.events.filter((a) => a?.title !== "")
    setActivity(newActivity.slice(newActivity.length - 8, newActivity.length))
  }, [team?.events])
  
  
  return (
    <Sheet>
       <DeleteWorkSpaceModal
        isOpen={confirmDelete}
        onClose={() => setConfirmDelete(false)}
      />
      <InviteUsersModal
        isOpen={inviteModal}
        onClose={() => setInviteModal(false)}
      />
      <LeaveWorkSpaceModal
        isOpen={confirmLeave}
        onClose={() => setConfirmLeave(false)}
      />
      <ConfirmBootModal
        isOpen={confirmBoot}
        onClose={() => setConfirmBoot(false)}
      />
      <SheetTrigger asChild>
        <Button variant="outline">
          <HiEllipsisVertical size={25} />
        </Button>
      </SheetTrigger>
      <SheetContent className="space-y-6 bg-white dark:bg-black text-white py-10">
          <SheetTitle>{team?.title}</SheetTitle>
          <SheetDescription className="">
            <div className="flex justify-between">
              <div className="">
                <h4 className="font-bold pb-1 text-md sm:ml-0 ">Moderator</h4>
                <div className="flex gap-2 py-2">
                  <Image
                    className="rounded-full"
                    src={adminPhoto!}
                    alt="Admin"
                    width={40}
                    height={40}
                  />
                  <p className="my-auto">{admin}</p>
                </div>
              </div>
              {/* <div>
                <ActionTooltip label="Invite more users">
                  <Button onClick={() => setInviteModal(true)} className="mx-3 mb-2" variant={"secondary"}>
                    <RiUserAddLine size={20} />
                  </Button>
                </ActionTooltip>
              </div> */}
            </div>

            <div className="py-2">
              <h4 className="font-bold pb-1 text-md">
                {team?.users?.length} Members
              </h4>
              {team?.users?.map((user: any) => {
                return (
                  <div className="flex justify-between gap-2 py-2">
                    <div className="flex gap-2">
                      <Avatar user={user} />
                      <p className="my-auto">{user.name}</p>
                    </div>
                  </div>
                );
              })}
              <div className="py-2">
                <h4 className="font-bold pb-1 text-md">Recent Activity</h4>
                <ul className="py-1">
                  {activity.map((event) => {
                    return (
                        <li className="text-[15px] py-1">
                          {event?.poster} added "{event?.title}"
                        </li>
                    );
                  })}
                </ul>
              </div>
              <div className="fixed bottom-10">
                <div className="flex gap-2 py-3 justify-center mx-auto">
                  <Button className="rounded-md hidden" variant={"five"}>Group Chat</Button>

                  {currentUser?.name?.includes(admin as string) ? (
                    <SheetClose>
                      <Button onClick={() => setConfirmDelete(true)} className="rounded-md" variant={"destructive"}>
                        Delete
                      </Button>
                    </SheetClose>

                  ) : (
                    <ActionTooltip label={`Leave ${team?.title}`}>
                      {/* <Button className="rounded-lg" variant={"destructive"}>
                        Sign Out
                      </Button> */}
                    </ActionTooltip>
                  )}
                </div>
              </div>
            </div>
          </SheetDescription>
{/* 
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
