'use client';

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import clsx from "clsx";

import Avatar from "@/app/components/Avatar";
import useOtherUser from "@/app/hooks/useOtherUser";
import AvatarGroup from "@/app/components/AvatarGroup";
import { FullConversationType } from "@/app/types";
import { useTheme } from "next-themes";

interface ConversationBoxProps {
  data: FullConversationType,
  selected?: boolean;
}

const ConversationBox: React.FC<ConversationBoxProps> = ({ 
  data, 
  selected 
}) => {
  const otherUser = useOtherUser(data);
  const session = useSession();
  const router = useRouter();
  const {theme} = useTheme()
  

  const handleClick = useCallback(() => {
    router.push(`/conversations/${data.id}`);
  }, [data, router]);

  const lastMessage = useMemo(() => {
    const messages = data.messages || [];

    return messages[messages.length - 1];
  }, [data.messages]);

  const userEmail = useMemo(() => session.data?.user?.email,
  [session.data?.user?.email]);
  
  const hasSeen = useMemo(() => {
    if (!lastMessage) {
      return false;
    }

    const seenArray = lastMessage.seen || [];

    if (!userEmail) {
      return false;
    }

    return seenArray
      .filter((user) => user.email === userEmail).length !== 0;
  }, [userEmail, lastMessage]);

  const lastMessageText = useMemo(() => {
    if (lastMessage?.image) {
      return 'Sent an image';
    }

    if (lastMessage?.body) {
      return lastMessage?.body
    }

    return 'Started a conversation';
  }, [lastMessage]);

  return ( 
    <div
      onClick={handleClick}
      className={clsx(`
        w-full 
        relative 
        flex 
        items-center 
        space-x-3 
        p-3 
        rounded-lg
        transition
        cursor-pointer
        `,
        theme === "light" && "hover:bg-neutral-100",
        theme === "dark" && "hover:bg-neutral-700" 
      )}
    >
      {data.isGroup ? (
        <AvatarGroup users={data.users} />
      ) : (
        <Avatar user={otherUser} />
      )}
      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          <div className="flex justify-between items-center mb-1">
            <p className={clsx(theme === "light" ?  "text-md font-medium " : "text-md font-medium")}>
              {data.name || otherUser.name}
            </p>
            {lastMessage?.createdAt && (
              <p className={clsx(theme === "light" ? "text-xs  font-light" : "text-xs font-light ")}>
                {format(new Date(lastMessage.createdAt), 'p')}
              </p>
            )}
          </div>
          <p 
            className={clsx(`
              truncate 
              text-sm
              `,
            )}>
              {lastMessageText}
            </p>
        </div>
      </div>
    </div>
  );
}
 
export default ConversationBox;