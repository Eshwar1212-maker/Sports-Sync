import {usePathname } from "next/navigation";
import { useMemo } from "react";
import {HiChat} from "react-icons/hi"
import {HiUsers} from "react-icons/hi2"
import useConversation from "./useConversation";
import {CgGym} from 'react-icons/cg'
import {FcNegativeDynamic} from 'react-icons/fc'
import { SlCalender } from "react-icons/sl";


const useRoutes = () => {
    const pathName = usePathname();
    const { conversationId } = useConversation()
    const routes = useMemo(() => [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: FcNegativeDynamic,
        active: pathName === "/dashboard",
        route: "Dashboard"
    },
        {
          label: "Calender",
          href: "/calender",
          icon: SlCalender,
          active: pathName?.includes("calender"),
          route: "Calender"
        },
       {
            label: "Workouts",
            href: "/workouts",
            icon: CgGym,
            active: pathName === "/workouts",
            route: "Workouts"
        },
       {
            label: "Chat",
            href: "/conversations",
            icon: HiChat,
            active: pathName === "/conversations" || !!conversationId,
            route: "Messages"
        },
        { 
          label: 'People', 
          href: '/users', 
          icon: HiUsers, 
          active: pathName === '/users',
          route: "People"
        }
    ], [pathName, conversationId])
    return routes;
}

export default useRoutes;