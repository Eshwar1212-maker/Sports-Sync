import { FC } from 'react'
import FeaturesHero from '../components/features/FeaturesHero'
import First from '../components/features/First'

interface pageProps {
  
}
const page: FC<pageProps> = ({
  
}) => {
  return (

    <div className=''>
        <FeaturesHero />
        <First />
    </div>
  )
}

export default page