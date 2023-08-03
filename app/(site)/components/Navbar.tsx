import { FC } from 'react'
import {Sacramento, Pacifico} from 'next/font/google'


const cedarville_cursive = Pacifico({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-cedarville-cursive',
    weight: '400'
  })


interface NavbarProps {
  
}
const Navbar: FC<NavbarProps> = ({
  
}) => {
  return (
    <div className='flex justify-between px-20 py-5'>
      <div style={cedarville_cursive.style} className='text-2xl'>
       SportsSync
      </div>
      <div className='text-xl'>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar