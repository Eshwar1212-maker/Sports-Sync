"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { format, formatDistanceToNow, subDays } from "date-fns";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FC, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineTrophy } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { ActionTooltip } from "../ActionToolTip";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BsSendCheck } from "react-icons/bs";
import toast from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";
interface NotificationItemProps {
  notification: any;
  handleDelete: any;
}
const NotificationItem: FC<NotificationItemProps> = ({
  notification,
  handleDelete,
}) => {
  const [invitationResponse, setInvitationResponse] = useState<boolean>(false);
  const { theme } = useTheme();


  
  const router = useRouter();
  const pathName = usePathname()
 
  


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
        if(pathName?.includes("conversations")){
          window.location.reload()
        }
      } else {
        toast.success("Invitation declined");
        handleDelete(notification?.id);
      }
    },
    onError: (error) => {
    },
  });

  return (
    <div
      className={clsx(
        "flex flex-row justify-between gap-6 w-full pb-2 px-2",
        theme === "light" ? "text-black" : "text-white",
        notification?.accepted === true && "opacity-80 text-gray-700"
      )}
    >
      <div className="pt-3 w-[156px]">
        <Image
          className="rounded-[30px] mx-auto"
          alt="recipient image"
          width={46}
          height={60}
          src={notification?.recipientImage}
        />
        <p className="text-[11px] font-bold mx-auto">
          {formatDistanceToNow(new Date(notification?.createdAt), { addSuffix: true }).replace("about", "")}
        </p>
      </div>
      <div className="text-sm flex flex-col gap-2 pt-3">
        <div className="">
          <p className="text-[12px]">
            {notification?.title.split(" ")[1] + " " + notification?.title.split(" ")[2] + " "}
            {notification?.title
              .split(" ")
              .slice(3, notification.title.length - 1)
              .join(" ")}{" "}
            group chat{" "}
          </p>
        </div>

        {notification.accepted === false ? (
          <div className="flex gap-2 mx-auto my-auto text-[12px] pb-2">
            <ActionTooltip label="Join Chat">
              <Button
                disabled={isLoading}
                onClick={() => {
                  setInvitationResponse(true);
                  invitationResponseMutation();
                }}
                className="p-1 px-4"
                variant={"tertiary"}
                type="button"
              >
                <BsSendCheck size={25} />
              </Button>
            </ActionTooltip>
            <ActionTooltip label="Decline Invitation">
              <Button
                disabled={isLoading}
                onClick={() => invitationResponseMutation()}
                className="px-3"
                variant={"destructive"}
                type="button"
              >
                <TiDeleteOutline size={30} />
              </Button>
            </ActionTooltip>
          </div>
        ) : (
          <div className="font-light">Accepted Invitation</div>
        )}
      </div>
    </div>
  );
};

export default NotificationItem;
