import { FC } from 'react'
import {Sacramento, Pacifico} from 'next/font/google'
import Image from 'next/image'


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
       <Image
       alt='logo'
       src="/../../../icon.jpeg"
       width={150}
       height={100}
       />
      </div>
      <div className='text-xl'>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar