"use client"

import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
interface FooterProps {
  
}
const Footer: FC<FooterProps> = ({
  
}) => {
  const pathName = usePathname()
  
  return (
<footer className={cn("py-6 sm:px-20 text-sm sm:text-md mx-0 px-0 w-full", pathName === "/workspaces" ? "bg-white my-20 sm:my-40 md:my-20 lg:my-0" : "bg-slate-50", pathName === "/auth" && "text-white bg-black")}>
    <div className=" px-5">
        <div className=''>
            <h3 className="font-semibold text-lg">Sports Sync</h3>
            <p className="mt-2 text-sm">New York City</p>
            <p className="text-sm">sportssynchelp@gmail.com</p>
        </div>
    </div>
    <p className="mt-10 text-sm text-gray-400 text-center">© {new Date().getFullYear()} Sports Sync. All rights reserved.</p>
</footer>
  )
}
export default Footer