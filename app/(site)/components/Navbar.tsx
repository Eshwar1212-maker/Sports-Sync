"use client"

import { FC } from 'react'
import {PT_Sans} from 'next/font/google'
import { useParams, usePathname, useRouter } from 'next/navigation';
import { NavBarItem } from './NavbarItem';



  const inter = PT_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-sans",
    weight: "400",
  });


interface NavbarProps {
  isHome?: boolean
}
const Navbar: FC<NavbarProps> = ({

}) => {
  const router = useRouter()
  const pathName = usePathname()
  const params = useParams()
  console.log();
  if(pathName !== "/auth"){
    return (
    
      <header className='flex justify-between px-5 sm:px-20 py-4 bg-slate-50 text-black fixed top-0 w-full z-20'>
        <div onClick={() => router.push("/")} style={inter.style} className='text-2xl text-blue-700 cursor-pointer'>
          Synced
        </div>
        <NavBarItem />
        <nav className='my-2 text-sm font-bold'>
          <button onClick={() => router.push("/auth")}>SIGN IN</button>
        </nav>
      </header>
    )
  }
  }


export default Navbar