import { FC } from 'react'
interface FooterProps {
  
}
const Footer: FC<FooterProps> = ({
  
}) => {
  return (
<footer className="py-6 sm:px-20 text-sm sm:text-md text-black mx-0 px-0 w-full">
    <div className="flex flex-wrap justify-between gap-6 px-5">
        <div>
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