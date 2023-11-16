"use client";

import { FC, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { NavBarItem } from "./NavbarItem";
import { RiMenu3Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import WorkSpaceAccordians, { TrackingAccordian } from "./Accordians";
import { cn } from "@/lib/utils";
import clsx from "clsx";
const itemVariants: any = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};


interface NavbarProps {
  isHome?: boolean;
}
const Navbar: FC<NavbarProps> = ({}) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  if (pathName !== "/auth") {
    return (
      <header className={cn("flex flex-col px-5 sm:px-8 py-4 text-black fixed top-0 w-full z-20 bg-white")}>
        <div className="flex justify-between">
          <div
            data-test="navbar-logo"
            onClick={() => {
              router.push("/");
              setIsOpen(false);
            }}
            className={clsx("text-2xl cursor-pointer font-light", pathName === "/tracking" ? "" : "text-blue-700")}>
            Synced
          </div>
          <NavBarItem />
          <nav className="my-2 text-sm font-bold flex gap-4">
            {!isOpen && (
              <button
                className="mr-4 hidden sm:block"
                onClick={() => router.push("/auth")}
                data-test="sign-in-button"
              >
                SIGN IN
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={
                " right-4 transition ease-in-out duration-500 cursor-pointer rounded-lg max-h-[49px] md:hidden"
              }
            >
              {!isOpen ? (
                <RiMenu3Line size={24} />
              ) : (
                <AiOutlineClose size={24} />
              )}
            </button>
          </nav>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <motion.div
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            >
              <motion.ul
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                className="h-screen space-y-4 mt-20 flex flex-col font-light"
              >
                <motion.li
                  onClick={() => {
                    router.push("/auth");
                    setIsOpen(false);
                  }}
                  variants={itemVariants}
                  className="pb-2 cursor-pointer text-[18px] transition duration-300 sm:mr-0 hover:bg-slate-200 border-b-[1px] border-slate-400"
                >
                  Get Started
                </motion.li>
                <motion.li onClick={() => {}} variants={itemVariants}>
                  <WorkSpaceAccordians onClose={() => setIsOpen(false)} />
                </motion.li>
                <motion.li onClick={() => {}} variants={itemVariants}>
                  <TrackingAccordian onClose={() => setIsOpen(false)} />
                </motion.li>
                <motion.li
                  onClick={() => {
                    router.push("/guide");
                    setIsOpen(false);
                  }}
                  variants={itemVariants}
                  className="pb-3 cursor-pointer text-[18px] border-b-[1px] border-slate-400 transition duration-300 sm:mr-0 hover:bg-slate-200"
                >
                  Guide
                </motion.li>
                <motion.li
                  onClick={() => {
                    router.push("/techstack");
                    setIsOpen(false);
                  }}
                  variants={itemVariants}
                  className="pb-3 cursor-pointer text-[18px] border-b-[1px] border-slate-400 transition duration-300 sm:mr-0 hover:bg-slate-200"
                >
                  Tech Stack
                </motion.li>

                <motion.li
                  onClick={() => {
                    router.push("/auth");
                    setIsOpen(false);
                  }}
                  variants={itemVariants}
                  className="py-3 cursor-pointer text-[18px] transition duration-300 flex flex-col gap-2"
                >
                  <Button
                    variant={"four"}
                    className="w-[240px] mx-auto text-center items-center rounded-lg bg-white"
                  >
                    Get Started
                  </Button>
                  <Button className="w-[240px] mx-auto text-center items-center rounded-lg">
                    Log In
                  </Button>
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>
        )}
      </header>
    );
  }
};

export default Navbar;