import { FC } from 'react'
interface FooterProps {
  
}
const Footer: FC<FooterProps> = ({
  
}) => {
  return (
<footer className="bg-gray-800 text-white py-10 px-6 sm:px-12">
    <div className="flex flex-wrap justify-between gap-6">
        <div>
            <h3 className="text-lg font-semibold">Sports Sync</h3>
            <p className="mt-2 text-sm">New York City</p>
            <p className="text-sm">sportssynchelp@gmail.com</p>
        </div>
    </div>
    <p className="mt-10 text-sm text-gray-400 text-center">© {new Date().getFullYear()} Sports Sync. All rights reserved.</p>
</footer>

  )
}

export default Footer