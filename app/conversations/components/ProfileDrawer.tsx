"use client";

import { Fragment, useMemo, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoClose, IoExitOutline, IoTrash } from "react-icons/io5";
import { Conversation, User } from "@prisma/client";
import {RiUserAddLine} from "react-icons/ri"
import useOtherUser from "@/app/hooks/useOtherUser";
import Avatar from "@/app/components/Avatar";
import AvatarGroup from "@/app/components/AvatarGroup";
import ConfirmModal from "./ConfirmModal";
import clsx from "clsx";
import { useTheme } from "next-themes";
import ConfirmLeaveModal from "./ConfirmLeaveModal";
import { Button } from "@/components/ui/button";
import ConfirmBootModal from "./ConfirmBootModal";
import { ActionTooltip } from "@/app/components/ActionToolTip";
import AddUserToGroup from "./AddUserToGroup";

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  data: Conversation & {
    users: User[];
  };
  currentUser?: any;
  users: User[]
}

const ProfileDrawer: React.FC<ProfileDrawerProps> = ({
  isOpen,
  onClose,
  data,
  currentUser,
  users
}) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmLeaveOpen, setConfirmLeaveOpen] = useState(false);
  const [confirmBootOpen, setConfirmBootOpen] = useState(false);
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [bootedMember, setBootedMember] = useState<any>();
  const otherUser = useOtherUser(data);

  

  const title = useMemo(() => {
    return data.name || otherUser.name;
  }, [data.name, otherUser?.name]);

  const { theme } = useTheme();


  return (
    <>
      <ConfirmModal
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        conversationName={data.name}
      />
      <ConfirmLeaveModal
        isOpen={confirmLeaveOpen}
        onClose={() => setConfirmLeaveOpen(false)}
        conversationName={data.name}
      />
      <ConfirmBootModal
        isOpen={confirmBootOpen}
        onClose={() => setConfirmBootOpen(false)}
        conversationName={data.name}
        bootedMember={bootedMember}
      />
      <AddUserToGroup 
      isOpen={isAddUserOpen}
      onClose={() => setIsAddUserOpen(false)}
      users={users}
      data={data}
      />
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md ">
                    <div
                      className={clsx(
                        "flex h-full flex-col overflow-y-scrollpy-6 shadow-xl",
                        theme === "light" ? "bg-white" : "bg-[#1c1c1c]"
                      )}
                    >
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-end">
                          <div className="ml-3 flex h-7 items-center py-8">
                            <button
                              type="button"
                              className={clsx(
                                "rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              )}
                              onClick={onClose}
                            >
                              <span className="sr-only">Close panel</span>
                              <IoClose size={24} aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <div className="flex flex-col items-center">
                          <div className="mb-2">
                            {data.isGroup ? (
                              <AvatarGroup users={data.users} />
                            ) : (
                              <Avatar user={otherUser} />
                            )}
                          </div>
                          <div
                            className={theme === "light" ? "text-black" : ""}
                          >
                            {title}
                          </div>
                          {data?.admin?.includes(currentUser.email) &&
                            data?.isGroup && (
                              <div className="flex gap-10 my-8">
                                <div
                                  onClick={() => setConfirmOpen(true)}
                                  className="flex flex-col gap-3 items-center cursor-pointer hover:opacity-75"
                                >
                                  <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">
                                    <IoTrash color="black" size={20} />
                                  </div>
                                  <div
                                    className={clsx(
                                      "text-sm font-light",
                                      theme === "light" && "text-neutral-600"
                                    )}
                                  >
                                    Delete
                                  </div>
                      
                                </div>
                              </div>
                            )}
                          {data.isGroup !== true && (
                            <div className="flex gap-10 my-8">
                              <div
                                onClick={() => setConfirmOpen(true)}
                                className="flex flex-col gap-3 items-center cursor-pointer hover:opacity-75"
                              >
                                <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">
                                  <IoTrash color="black" size={20} />
                                </div>
                                <div
                                  className={clsx(
                                    "text-sm font-light",
                                    theme === "light" && "text-neutral-600"
                                  )}
                                >
                                  Delete
                                </div>
                                
                              </div>
                            </div>
                          )}
                          {!data?.admin?.includes(currentUser.email) &&
                            data?.userIds?.length > 2 && (
                              <div className="flex gap-10 my-8">
                                <div
                                  onClick={() => setConfirmLeaveOpen(true)}
                                  className="flex flex-col gap-3 items-center cursor-pointer hover:opacity-75"
                                >
                                  <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">
                                    <IoExitOutline color="black" size={20} />
                                  </div>
                                  <div
                                    className={clsx(
                                      "text-sm font-light",
                                      theme === "light" && "text-neutral-600"
                                    )}
                                  >
                                    Leave
                                  </div>
                                </div>
                              </div>
                            )}
                          <div
                            className={clsx(
                              "w-full pb-5 pt-5 sm:px-0 sm:pt-0 flex justify-center",
                              !data?.admin?.includes(currentUser.email) && " "
                            )}
                          >
                            <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                              {data.isGroup && (
                                <div className="overflow-y-scroll max-h-[600px]">
                                  <dt
                                    className={clsx(
                                      "text-md sm:w-40 sm:flex-shrink-0 font-semibold my-1"
                                    )}
                                  >
                                    Mod
                                  </dt>
                                  <div className="flex justify-between">
                                  <dd
                                    className={clsx(
                                      "mt-1 text-lg sm:col-span-2 py-2"
                                    )}
                                  >
                                    {data?.admin?.split(" ")[1] +
                                      " " +
                                      data?.admin?.split(" ")[2]}
                                  </dd>
                                  </div>
                                  <div className="flex justify-between border-b-[2px] border-b-black">
                                  <dt
                                    className={clsx(
                                      "text-md sm:w-40 sm:flex-shrink-0 font-semibold my-2"
                                    )}
                                  >
                                   {data.users.length} Members
                                  </dt>
                                  <ActionTooltip label="Invite more users">
                                      <Button onClick={() => setIsAddUserOpen(true)} className="mx-3 mb-2" variant={"secondary"}>
                                        <RiUserAddLine size={20}/>
                                      </Button>
                                  </ActionTooltip>
                                  </div>
                       
                         
                                  <dd
                                    className={clsx(
                                      "mt-1 text-sm sm:col-span-2 whitespace-pre-wrap md:w-[269px] max-w-[600px] border-b-2 mx-9"
                                    )}
                                  >
                                    {data.users.map((user: any) => {
                                      return (
                                        <div className="flex justify-between gap-2 py-3">
                                          <div className="flex gap-2">
                                            <Avatar user={user} />
                                            <p className="my-auto">
                                              {user.name}
                                            </p>
                                          </div>
                                          {(data?.admin?.includes(currentUser.email) && !currentUser.email.includes(user.email))
                                           && (
                                            <Button
                                              onClick={() => {
                                                setBootedMember([user.name, user.email, user.id] as string[])
                                                setConfirmBootOpen(true)
                                              }
                                              }
                                              variant={"secondary"}
                                              className="my-auto"
                                            >
                                              Boot
                                            </Button>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </dd>
                                </div>
                              )}
                              {!data.isGroup && (
                                <div>
                                  <dt
                                    className={clsx(
                                      "text-sm font-medium sm:w-40 sm:flex-shrink-0"
                                    )}
                                  >
                                    Email
                                  </dt>
                                  <dd
                                    className={clsx(
                                      "mt-1 text-sm sm:col-span-2"
                                    )}
                                  >
                                    {otherUser.email}
                                  </dd>
                                </div>
                              )}
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
            
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default ProfileDrawer;
