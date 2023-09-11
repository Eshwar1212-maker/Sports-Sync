"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { format, subDays } from "date-fns";
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
import { useRouter } from "next/navigation";
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
  console.log("NAME ", name);
  console.log(notification);
  const router = useRouter();

  const {
    mutate: invitationResponseMutation,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: () => {
      return axios.patch("/api/notifications/invitations/response", {
        response: invitationResponse,
        notificationId: notification?.id,
        groupChatId: notification?.groupId,
      });
    },
    onSuccess: (response) => {
      console.log(response.data);
      if (invitationResponse) {
        toast.success(`Succesfully added to group, redirecting`);
        router.push(`/conversations/${notification?.groupId}`);
      } else {
        toast.success("Invitation rejected");
        handleDelete(notification?.id);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div
      className={clsx(
        "flex flex-row justify-between gap-6 w-full pt-4 px-5",
        theme === "light" ? "text-black" : "text-white",
        notification?.accepted === true && "opacity-80 text-gray-700"
      )}
    >
      <div className=" pt-6">
        <Image
          className="rounded-[30px]"
          alt="recipient image"
          width={54}
          height={60}
          src={notification?.recipientImage}
        />
        <p className="text-[12px]">
          {format(new Date(notification?.createdAt), "MM/dd/yyyy h:mm a")}
        </p>
      </div>
      <div className="text-sm flex flex-col gap-2 pt-6">
        <div className="">
          <p className="text-[14px]">
            {notification?.title
              .split(" ")
              .slice(1, notification.title.length - 1)
              .join(" ")}{" "}
            group chat{" "}
          </p>
        </div>

        {notification.accepted === false ? (
          <div className="flex gap-2 mx-auto my-auto text-[12px]">
            <ActionTooltip label="Join Chat">
              <Button
                disabled={isLoading}
                onClick={() => {
                  setInvitationResponse(true);
                  invitationResponseMutation();
                }}
                className="p-2 px-4"
                variant={"tertiary"}
                type="button"
              >
                <BsSendCheck size={26} />
              </Button>
            </ActionTooltip>
            <ActionTooltip label="Decline Invitation">
              <Button
                disabled={isLoading}
                onClick={() => invitationResponseMutation()}
                className="px-2"
                variant={"destructive"}
                type="button"
              >
                <TiDeleteOutline size={32} />
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
