'use client';
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import Avatar from "@/app/components/Avatar";
import { FullMessageType } from "@/app/types";
import { useTheme } from "next-themes";
import ImageModal from "./ImageModal";

interface MessageBoxProps {
  data: FullMessageType;
  isLast?: boolean;
  currentUser: any
}

const MessageBox: React.FC<MessageBoxProps> = ({ 
  data, 
  isLast,
  currentUser
}) => {
  
  const session = useSession();
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const {theme} = useTheme()
  const isOwn = session.data?.user?.email === data?.sender?.email
  const container = clsx('flex gap-3 p-4', isOwn && 'justify-end');
  const avatar = clsx(isOwn && 'order-2');
  const body = clsx('flex flex-col gap-2 md:max-w-[36%]', isOwn && 'items-end text-white');
  const message = clsx(
    'text-sm w-fit overflow-hidden max-w-[280px] md:max-w-[400px]', 
    isOwn && theme === "light" ? 'bg-sky-500 text-white' : 'bg-gray-100', 
    isOwn && theme === "dark" ? 'bg-sky-500 text-white' : 'bg-gray-100', 
    data?.image ? 'rounded-md p-0' : 'rounded-lg py-2 px-3'
  );
  
  return ( 
    <div className={container}>
      <div className={avatar}>
        <Avatar user={data?.sender} />
      </div>
      <div className={body}>
        <div className="flex items-center gap-1">
          <div className="text-xs text-gray-400">
            {format(new Date(data?.createdAt), 'p')}
          </div>
        </div>
        <div className={message}>
        <ImageModal src={data.image} isOpen={imageModalOpen} onClose={() => setImageModalOpen(false)}/>

          {data?.image ? (
            <Image
              alt="Image"
              height="288"
              width="288"
              onClick={() => setImageModalOpen(true)} 
              src={data?.image} 
              className="object-cover cursor-pointer hover:scale-110 transition translate"/>
          ) : (
            <div className={!isOwn ? "text-black" : ""}>{data?.body}</div>
          )}
        </div>
        {/* {isLast && isOwn && seenList?.length > 0 && (
          <div className="text-xs font-light text-gray-500">
            {`Seen by ${seenList}`}
          </div>
        )} */}
      </div>
    </div>
   );
}
 
export default MessageBox;