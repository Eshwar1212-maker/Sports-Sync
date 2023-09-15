"use client";

import { FC, useState } from "react";
import { PT_Sans } from "next/font/google";
import { useParams, usePathname, useRouter } from "next/navigation";
import { NavBarItem } from "./NavbarItem";
import { RiMenu3Line } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

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
  const router = useRouter();
  const pathName = usePathname();
  const params = useParams();
  console.log();
  if (pathName !== "/auth") {
    return (
      <header

       className="flex justify-between px-5 sm:px-8 py-4 bg-slate-50 text-black fixed top-0 w-full z-20">
        <div
          onClick={() => router.push("/")}
          style={inter.style}
          className="text-2xl text-blue-700 cursor-pointer"
        >
          Synced
        </div>
        <NavBarItem />
        <nav className="my-2 text-sm font-bold flex gap-4">
          {!isOpen && (
            <button className="mr-4" onClick={() => router.push("/auth")}>SIGN IN</button>
          )}
          <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
        </nav>
      </header>
    );
  }
};

export default Navbar;
