import {usePathname } from "next/navigation";
import { useMemo } from "react";
import {HiChat} from "react-icons/hi"
import {HiArrowLeftOnRectangle, HiMiniUserGroup, HiUsers} from "react-icons/hi2"
import useConversation from "./useConversation";
import {CgGym} from 'react-icons/cg'
import {FcNegativeDynamic} from 'react-icons/fc'
import {IoIosNotificationsOutline} from 'react-icons/io'


import { signOut } from "next-auth/react";
import { GrGroup } from "react-icons/gr";
import { BsMicrosoftTeams } from "react-icons/bs";

interface useRoutesProps{
  notificationsNumber?: number
}

const useRoutes = ({notificationsNumber}: useRoutesProps) => {
    const pathName = usePathname();
    const { conversationId } = useConversation()
    const routes = useMemo(() => [
        {
          label: "Teams",
          href: "/teams",
          icon: BsMicrosoftTeams,
          active: pathName === "/conversation" || !!conversationId,
          route: "Teams"
        },
       {
            label: "Tracker",
            href: "/tracker",
            icon: FcNegativeDynamic,
            active: pathName === "/conversation" || !!conversationId,
            route: "Tracker"
        },
       {
            label: "Workouts",
            href: "/workouts",
            icon: CgGym,
            active: pathName === "/conversation" || !!conversationId,
            route: "Workouts"
        },
       {
            label: "Chat",
            href: "/conversations",
            icon: HiChat,
            active: pathName === "/conversation" || !!conversationId,
            route: "Messages"
        },
        { 
          label: 'Users', 
          href: '/users', 
          icon: HiUsers, 
          active: pathName === '/users',
          route: "Users"
        }
    ], [pathName, conversationId])
    return routes;
}

export default useRoutes;