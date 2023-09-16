import { FC } from 'react'
import TrackerHero from './components/TrackerHero'
import TrackerFirst from './components/TrackerFirst'
import TrackerThird from './components/TrackerThird'
import TRackerSecond from './components/TrackerSecond'
interface pageProps {
  
}
const page: FC<pageProps> = ({
  
}) => {
  return (
    <div className='bg-white text-black'>
      <TrackerHero />
      <TrackerFirst />
      <TRackerSecond />
    </div>
  )
}

export default page