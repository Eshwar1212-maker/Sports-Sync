import { FC } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

interface pageProps {
  
}
const page: FC<pageProps> = ({
  
}) => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
    </div>
  )
}

export default page