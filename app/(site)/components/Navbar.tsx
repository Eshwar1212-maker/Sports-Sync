"use client"

import { FC } from 'react'
import {Pacifico, PT_Sans, Bonheur_Royale} from 'next/font/google'

import { useRouter } from 'next/navigation';
import clsx from 'clsx';


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
  isHome: boolean
}
const Navbar: FC<NavbarProps> = ({
  isHome
}) => {
  const router = useRouter()
  return (
    <header className={clsx('flex justify-between px-5 sm:px-20 py-4 text-black fixed top-0 w-full z-20', isHome ? "bg-slate-50" : "bg-transparent")}>
      <div onClick={() => router.push("/")} style={inter.style} className={clsx('text-xl cursor-pointer', isHome ? "text-blue-800" : "text-black")}>
        Synced
      </div>
      <div className='my-3 flex gap-14 text-md font-semibold '>
        <div className='cursor-pointer hover:underline'>
          About
        </div>
        <div onClick={() => router.push("/features")} className='cursor-pointer hover:underline'>
          Features
        </div>
        <div className={clsx('cursor-pointer hover:underline', !isHome && "lg:text-white")}>
          Subscribe
        </div>
      </div>
      <nav className={clsx('my-2 text-sm font-bold', !isHome && "text-white")}>
        <button onClick={() => router.push("/auth")}>SIGN IN</button>
      </nav>
    </header>
  )
}

export default Navbar