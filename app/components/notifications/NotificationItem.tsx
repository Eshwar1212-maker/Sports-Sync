"use client";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { FC, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { ActionTooltip } from "../ActionToolTip";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BsSendCheck } from "react-icons/bs";
import toast from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface NotificationItemProps {
  notification: any;
  handleDelete: any;
}
const NotificationItem: FC<NotificationItemProps> = ({
  notification,
  handleDelete,
}) => {
  const [invitationResponse, setInvitationResponse] = useState<boolean>(false);

  const router = useRouter();
  const pathName = usePathname();

  //Mutation for group chat invitations
  const {
    mutate: invitationResponseMutation,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: () => {
      return axios.patch("/api/notifications/groupchat/response", {
        response: invitationResponse,
        notificationId: notification?.id,
        groupChatId: notification?.groupId,
      });
    },
    onSuccess: (response) => {
      if (invitationResponse) {
        toast.success(`Successfully added to group, redirecting`);
        router.push(`/conversations/${notification?.groupId}`);
        if (pathName?.includes("conversations")) {
          window.location.reload();
        }
      } else {
        toast.success("Invitation declined");
        handleDelete(notification?.id);
      }
    },
    onError: (error) => {
      window.location.reload()
    },
  });

  //MUTATION FOR WORKSPACE EVENTS
  const {
    mutate: eventInvitationResponseMutation,
    isLoading: isEventLoading,
    isError: IsEventError,
  } = useMutation({
    mutationFn: () => {
      return axios.patch("/api/teams/teamEvents/eventnotification", {
        notificationId: notification?.id,
        groupChatId: notification?.groupId,
      });
    },
    onSuccess: (response) => {
      if(invitationResponse){
        router.push(`/calender/${notification?.groupId}`);
        handleDelete(notification?.id);

      }else{
        handleDelete(notification?.id);
      }
    },
    onError: (error) => {
      window.location.reload()

    },
  });

  return (
    <div
      className={clsx(
        "flex flex-row justify-between py-6 h-32 max-wk-[360px]",
        notification?.accepted && "opacity-80 text-gray-700"
      )}
    >
      <div className="flex flex-col w-1/2">
        {notification?.recipientImage ? (
          <>
            <div>
              <Image
                className="rounded-full mx-auto"
                alt="recipient image"
                width={46}
                height={60}
                src={notification?.recipientImage}
              />
            </div>
            <div>
              <p className="text-xs mt-1 ">
                {formatDistanceToNow(new Date(notification?.createdAt), {
                  addSuffix: true,
                }).replace("about", "")}
              </p>
            </div>
          </>
        ) : (
          <div className="py-6">
            <p className="">New workspace event!</p>
            <div>
              <p className="text-xs mt-1 ">
                {formatDistanceToNow(new Date(notification?.createdAt), {
                  addSuffix: true,
                }).replace("about", "")}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="w-1/2 flex flex-col gap-2">
        <div className={cn(!notification?.recipientImage ? "w-72" : " ")}>
          <p
            className={cn(
              "text-[12px] mx-auto text-center",
              !notification?.recipientImage ? "mr-20" : " "
            )}
          >
            {notification?.recipientImage
              ? `${notification?.title
                  .split(" ")
                  .slice(1, 3)
                  .join(" ")} "${notification?.title
                  .split(" ")
                  .slice(3)
                  .join(" ")}" group chat`
              : `Go to "${notification?.title}"`}
          </p>
        </div>

        {notification?.accepted === false ? (
          <div className="flex flex-row gap-3 mx-auto text-center justify-center">
            <ActionTooltip
              label={cn(
                notification?.recipientImage ? "Join Chat" : "Go to workspace"
              )}
            >
              <Button
                disabled={
                  notification?.recipientImage ? isLoading : isEventLoading
                }
                onClick={() => {
                  if (notification?.recipientImage?.length > 2) {
                    setInvitationResponse(true);
                    invitationResponseMutation();
                  } else {
                    setInvitationResponse(true);
                    eventInvitationResponseMutation();
                  }
                }}
                className="px-3"
                variant={"tertiary"}
                type="button"
              >
                <BsSendCheck size={25} />
              </Button>
            </ActionTooltip>
            <ActionTooltip
              label={
                notification?.recipientImage ? "Delete Invitation" : "Delete"
              }
            >
              <Button
                disabled={
                  notification?.recipientImage ? isLoading : isEventLoading
                }
                onClick={() => {
                  if (notification?.recipientImage) {
                    setInvitationResponse(false);
                    invitationResponseMutation();
                  } else {
                    setInvitationResponse(false);
                    eventInvitationResponseMutation();
                  }
                }}
                className="px-3"
                variant={"destructive"}
                type="button"
              >
                <TiDeleteOutline size={30} />
              </Button>
            </ActionTooltip>
          </div>
        ) : (
          <div className="">Accepted Invitation</div>
        )}
      </div>
    </div>
  );
};

export default NotificationItem;
