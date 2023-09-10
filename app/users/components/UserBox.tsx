"use client";
import Avatar from "@/app/components/Avatar";
import LoadingModal from "@/app/components/LoadingModal";
import { User } from "@prisma/client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import ProfileModal from "./ProfileModal";
import { ActionTooltip } from "@/app/components/ActionToolTip";
import { cn } from "@/lib/utils";

interface UserBoxProps {
  data: User;
  input?: string;
}

const UserBox: FC<UserBoxProps> = ({ data, input }) => {
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [clickedUser, setClickedUser] = useState<any>();
  const {
    mutate: createConversation,
    isLoading,
    error,
  } = useMutation(
    () =>
      axios.post("/api/conversations", {
        userId: data.id,
      }),
    {
      onSuccess: async (data) => {
        router.push(`/conversations/${data.data.id}`);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {isLoading ? (
        <LoadingModal />
      ) : (
        <div
          className={clsx(
            "w-full relative flex items-center space-x-3 p-3 rounded-lg transition cursor-pointer",
            currentTheme === "light" && "",
            currentTheme === "dark" && ""
          )}
        >
          <ProfileModal
            isOpen={isProfileOpen}
            onClose={() => setIsProfileOpen(false)}
            user={clickedUser}
            createConversation={createConversation}
          />
          <Avatar user={data} />
          <div className="min-w-0 flex-1">
            <div className="focus:outline-none">
              <div className="flex justify-between items-center mb-1">
                <div>
                  <p className="text-sm font-md">
                    {data?.name!.split(" ").length > 1
                      ? (
                          data.name?.split(" ")[0] +
                          " " +
                          data.name?.split(" ")[1]
                        ).substring(0, 16)
                      : data.name?.split(" ")[0]}
                  </p>
                </div>
                <div className="flex gap-2 pl-4">
                  <ActionTooltip label="View Profile">
                    <button>
                      <AiOutlineUserAdd
                        className={cn("hover:rounded-full", theme === "light" && "hover:bg-slate-200")}
                        onClick={() => {
                          console.log(data);
                          setClickedUser(data);
                          setIsProfileOpen(true);
                        }}
                        size={24}
                      />
                    </button>
                  </ActionTooltip>
                  <ActionTooltip label={`Message ${data.name}`}>
                    <button>
                    <FiMessageCircle
                          className={cn("hover:rounded-full", theme === "light" && "hover:bg-slate-200")}
                          onClick={() => createConversation()}
                          size={24}
                        />
                    </button>
                  </ActionTooltip>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserBox;
