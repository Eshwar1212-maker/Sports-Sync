"use client"

import { FC } from 'react'
import {Sacramento, Pacifico, PT_Sans, Bonheur_Royale} from 'next/font/google'
import Image from 'next/image'
import { useRouter } from 'next/navigation';


const cedarville_cursive = Pacifico({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-cedarville-cursive',
    weight: '400'
  })
  const inter = PT_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-sans",
    weight: "400",
  });
  const bon = Bonheur_Royale({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-sans",
    weight: "400",
  });


interface NavbarProps {
  
}
const Navbar: FC<NavbarProps> = ({
  
}) => {
  const router = useRouter()
  return (
    <header className='flex justify-between px-5 sm:px-20 py-4 bg-slate-50 text-black fixed top-0 w-full z-20'>
      <div style={inter.style} className='text-xl text-blue-800'>
        Synced
      </div>
      <nav className='my-2 text-sm font-bold'>
        <button onClick={() => router.push("/auth")}>SIGN IN</button>
      </nav>
    </header>
  )
}

export default Navbar