import { FC } from 'react'
interface FooterProps {
  
}
const Footer: FC<FooterProps> = ({
  
}) => {
  return (
<footer className="py-6 sm:px-20 px-8 text-sm sm:text-md bg-white">
    <div className="flex flex-wrap justify-between gap-6">
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