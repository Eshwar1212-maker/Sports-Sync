import { FC } from 'react'
import TrackerHero from './components/TrackerHero'
interface pageProps {
  
}
const page: FC<pageProps> = ({
  
}) => {
  return (
    <div className='bg-white text-black'>
      <TrackerHero />
    </div>
  )
}

export default page