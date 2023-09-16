

import TrackerHero from './components/TrackerHero'
import TrackerFirst from './components/TrackerFirst'
import TrackerSecond from './components/TrackerSecond'


const page = () => {
  return (
    <div className='bg-white text-black'>
      <TrackerHero />
      <TrackerFirst />
      {/* <TrackerSecond /> */}
    </div>
  )
}

export default page