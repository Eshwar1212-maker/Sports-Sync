"use client";

import { useState, useEffect } from "react";
import { User } from "@prisma/client";
import DesktopItem from "./DeskTopItem";
import useRoutes from "@/app/hooks/useRoutes";
import SettingsModal from "./SettingsModal";
import { Pacifico } from "next/font/google";
import { motion } from "framer-motion";
import ThemeButton from "./ThemeButton";
import { useTheme } from "next-themes";
import { NotificationsSheet } from "../notifications/NotificationsSheet";
import Image from "next/image";
import placeholderImage from "../../assets/randomavatar.jpeg";
import { useParams, usePathname } from "next/navigation";

interface DesktopSidebarProps {
  currentUser: User;
  notifications: any;
}

const pacifico = Pacifico({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cursive",
  weight: "400",
});

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
  currentUser,
  notifications,
}) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const pathname = usePathname()
  console.log(pathname);
  
  useEffect(() => {
    if (sessionStorage.getItem("proAnimationPlayed")?.includes("tru")) {
      console.log(true)
      setIsAnimated(!isAnimated);
      sessionStorage.setItem("proAnimationPlayed", "true");
    }else{
      console.log(false);
      sessionStorage.setItem("proAnimationPlayed", "true");
      setIsAnimated(false);

    }
  }, []);

  return (
    <>
      <SettingsModal
        currentUser={currentUser}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <div>
        <div
          className="
        hidden 
        lg:fixed 
        lg:inset-y-0 
        lg:left-0 
        lg:z-40 
        lg:w-20 
        xl:px-6
        lg:overflow-y-auto 
        lg:border-r-[1px]
        lg:pb-4
        lg:flex
        lg:flex-col
        justify-between
      "
        >
          <nav className="mt-4 flex flex-col justify-between">
            <ul role="list" className="flex flex-col items-center space-y-4 ">
              {routes.map((item) => (
                <DesktopItem
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  icon={item.icon}
                  active={item.active}
                  notificationNumber={4}
                  route={item.route}
                />
              ))}

              <li className="my-[-20px] h-6 w-6 shrink-0 cursor-pointer group flex flex-col items-center gap-x-3 rounded-md leading-6 font-semibold relative mr-2">
                <div>
                  <NotificationsSheet notifications={notifications} />
                </div>
              </li>
            </ul>
          </nav>
          <nav className="mt-4 flex flex-col justify-between items-center space-y-2">
            <div className=" mb-1">
              <ThemeButton isSettings={false} />
            </div>

            <div
              onClick={() => setIsOpen(true)}
              className="cursor-pointer hover:opacity-75 transition"
            >
              <Image
                alt="profile"
                height={32}
                width={32}
                src={currentUser?.image! || placeholderImage}
                className="rounded-full"
              />
            </div>
            {isAnimated && (
              <motion.div
                animate={{
                  scale: [1, 1, 1, 1, 1],
                  rotate: [0, 0, 360, 360, 0],
                  borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: 1,
                  repeatDelay: 1,
                }}
                onAnimationComplete={() => setIsAnimated(false)}
              >
                <p
                  id="pro-text"
                  className="font-bold text-blue-300 cursor-pointer"
                  style={pacifico.style}
                >
                  Pro
                </p>
              </motion.div>
            )}
            {!isAnimated && (
              <p
                id="pro-text"
                className="font-bold text-blue-300 cursor-pointer"
                style={pacifico.style}
              >
                Pro
              </p>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default DesktopSidebar;
