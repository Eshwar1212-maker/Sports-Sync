"use client";

import { FC, useEffect, useState } from "react";
import { PT_Sans } from "next/font/google";
import { useParams, usePathname, useRouter } from "next/navigation";
import { NavBarItem } from "./NavbarItem";
import { RiMenu3Line } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import WorkSpaceAccordians, { TrackingAccordian } from "./Accordians";
import { cn } from "@/lib/utils";
const itemVariants: any = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const inter = PT_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: "400",
});

interface NavbarProps {
  isHome?: boolean;
}
const Navbar: FC<NavbarProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setisScrolled] = useState(false);
  const [isScrolled2, setisScrolled2] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90 && window.scrollY < 620) {
      setisScrolled(true);
    } else {
      setisScrolled(false);
    }
    if (window.scrollY > 1150) {
      setisScrolled2(true);
    } else {
      setisScrolled2(false);
      setisScrolled(true);
    }
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 1050 && window.scrollY < 2400) {
        setisScrolled(true);
      }else{
        setisScrolled(false)
      }
     
    };

    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  console.log(window.scrollY);
  

  const router = useRouter();
  const pathName = usePathname();

  if (pathName !== "/auth") {
    return (
      <header
        className={cn(
          "flex flex-col px-5 sm:px-8 py-4 text-black fixed top-0 w-full z-20 ",
          isScrolled && pathName !== ("/techstack" || "/tracking") && pathName !== "/guide"
            ? "bg-blue-50"
            : "bg-white",
          isScrolled && pathName !== "/techstack" && pathName !== "/guide"
            ? "bg-blue-50"
            : "bg-white"
        )}
      >
        <div className="flex justify-between">
          <div
            onClick={() => {
              router.push("/");
              setIsOpen(false);
            }}
            style={inter.style}
            className={cn(
              "text-2xl cursor-pointer",
              pathName === "/tracking" && "text-blue-900",
              pathName === "/" && "text-blue-700",
              pathName === "/workspaces" && "text-blue-500"
            )}
          >
            Synced
          </div>
          <NavBarItem />
          <nav className="my-2 text-sm font-bold flex gap-4">
            {!isOpen && (
              <button
                className="mr-4 hidden sm:block"
                onClick={() => router.push("/auth")}
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
