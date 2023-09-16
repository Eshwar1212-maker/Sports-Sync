import { FC } from 'react'
import TrackerHero from './components/TrackerHero'
import TrackerFirst from './components/TrackerFirst'
import TrackerSecond from './components/TrackerSecond'
interface pageProps {
  
}
const page: FC<pageProps> = ({
  
}) => {
  return (
    <div className='bg-white text-black'>
      <TrackerHero />
      <TrackerFirst />
      <TrackerSecond />
    </div>
  )
}

export default page