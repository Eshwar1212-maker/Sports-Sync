"use client";
import { FC, useState } from "react";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";
import { RiMenu3Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
const itemVariants: any = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  return (
    <div className="md:hidden relative">
      <button
        onClick={onClose}
        className={
          "fixed right-4 transition ease-in-out duration-500 cursor-pointer rounded-lg max-h-[49px]"
        }
      >
        {!isOpen ? <RiMenu3Line size={24} /> : <AiOutlineClose size={24} />}
      </button>

      {isOpen && (
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
            className="h-screen mx-auto text-center space-y-6 mt-20 flex flex-col mr-[160px] sm:mr-[180px] font-light"
          >
            <motion.li
              onClick={() => {
                router.push("/auth");
                onClose()
              }}
              variants={itemVariants}
              className="py-3 cursor-pointer text-[18px] border-b-[1px] border-slate-400 transition duration-300 sm:mr-0 hover:bg-slate-200"
            >
              Get Started
            </motion.li>
            <motion.li
              onClick={() => {
                router.push("/workspaces");
                onClose()
              }}
              variants={itemVariants}
              className="py-3 cursor-pointer text-[18px] border-b-[1px] border-slate-400 transition duration-300 sm:mr-0 hover:bg-slate-200"
            >
              WorkSpaces
            </motion.li>
            <motion.li
              onClick={() => {
                router.push("/tracking");
                onClose()
              }}
              variants={itemVariants}
              className="py-3 cursor-pointer text-[18px] border-b-[1px] border-slate-400 transition duration-300 sm:mr-0 hover:bg-slate-200"
            >
              Tracking
            </motion.li>
            <motion.li
              onClick={() => {
                router.push("/techstack");
                onClose()
              }}
              variants={itemVariants}
              className="py-3 cursor-pointer text-[18px] border-b-[1px] border-slate-400 transition duration-300 sm:mr-0 hover:bg-slate-200"
            >
              Tech Stack
            </motion.li>
            <motion.li
              onClick={() => {
                router.push("/auth");
                onClose()
              }}
              variants={itemVariants}
              className="py-3 cursor-pointer text-[18px] transition duration-300 hover:bg-slate-200 flex flex-col gap-2"
            >
              <Button
                variant={"four"}
                className="w-[240px] mx-auto text-center items-center rounded-lg"
              >
                Get Started
              </Button>
              <Button className="w-[240px] mx-auto text-center items-center rounded-lg">
                Log In
              </Button>
            </motion.li>
 
          </motion.ul>
        </motion.div>
      )}
    </div>
  );
};

export default MobileMenu;
