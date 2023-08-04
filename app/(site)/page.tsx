

import { FC } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import AuthModal from './components/AuthModal'

interface pageProps {
  
}
const page: FC<pageProps> = ({
  
}) => {
  return (
    <div className=''>
      {/* <AuthModal
      isOpen
      onClose={() => setIsOpen(false)}
       /> */}
      <Navbar />
      <Hero />
    </div>
  )
}

export default page