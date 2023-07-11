import {usePathname } from "next/navigation";
import { useMemo } from "react";
import {HiChat} from "react-icons/hi"
import {HiArrowLeftOnRectangle, HiUsers} from "react-icons/hi2"
import useConversation from "./useConversation";
import {CgGym} from 'react-icons/cg'
import {FcNegativeDynamic} from 'react-icons/fc'
import {IoIosNotificationsOutline} from 'react-icons/io'


import { signOut } from "next-auth/react";

interface useRoutesProps{
  notificationsNumber?: number
}

const useRoutes = ({notificationsNumber}: useRoutesProps) => {
    const pathName = usePathname();
    const { conversationId } = useConversation()
    const routes = useMemo(() => [
       {
            label: "Tracker",
            href: "/tracker",
            icon: FcNegativeDynamic,
            active: pathName === "/conversation" || !!conversationId
        },
       {
            label: "Workouts",
            href: "/workouts",
            icon: CgGym,
            active: pathName === "/conversation" || !!conversationId
        },
       {
            label: "Chat",
            href: "/conversations",
            icon: HiChat,
            active: pathName === "/conversation" || !!conversationId
        },
        { 
          label: 'Users', 
          href: '/users', 
          icon: HiUsers, 
          active: pathName === '/users'
        }
    ], [pathName, conversationId])
    return routes;
}

export default useRoutes;