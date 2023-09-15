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
  const router = useRouter()
  return (
    <div className="md:hidden">
      <button
        onClick={onClose}
        className={
          "md:hiddenxw fixed right-4 transition ease-in-out duration-500 hover:tegxt-white cursor-pointer rounded-lg max-h-[49px]"
        }
      >
        {!isOpen ? <RiMenu3Line size={24} /> : <AiOutlineClose size={30} />}
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
            <motion.li onClick={() => {router.push("/auth")}} 
            variants={itemVariants} 
            className="py-3 cursor-pointer text-[18px] border-b-[1px] border-slate-400 transition duration-300 hover:bg-slate-200">
              Get Started
            </motion.li>
            <motion.li onClick={() => {router.push("/workspaces")}} 
            variants={itemVariants} 
            className="py-3 cursor-pointer text-[18px] border-b-[1px] border-slate-400 transition duration-300 hover:bg-slate-200">
              WorkSpaces
            </motion.li>
            <motion.li onClick={() => {router.push("/tracking")}} 
            variants={itemVariants} 
            className="py-3 cursor-pointer text-[18px] border-b-[1px] border-slate-400 transition duration-300 hover:bg-slate-200">
              Tracking
            </motion.li>
            <motion.li onClick={() => {router.push("/techstack")}} 
            variants={itemVariants} 
            className="py-3 cursor-pointer text-[18px] border-b-[1px] border-slate-400 transition duration-300 hover:bg-slate-200">
              Tech Stack
            </motion.li>
            <div onClick={() => {router.push("/auth")}} 
            className="flex gap-2 flex-col mx-auto justify-center">
             <Button variant={"four"} className="w-[240px] mx-auto text-center items-center">Get Started</Button>
             <Button className="w-[240px] mx-auto text-center items-center">Log In</Button>
            </div>
          </motion.ul>
      
        </motion.div>
      )}
    </div>
  );
};

export default MobileMenu;
