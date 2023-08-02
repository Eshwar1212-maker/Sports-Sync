import { FC } from 'react'

import { PT_Sans, Josefin_Sans, Cedarville_Cursive} from 'next/font/google'

const cedarville_cursive = Cedarville_Cursive({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-cedarville-cursive',
    weight: '400'
  })
  const inter = PT_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-sans',
    weight: '700'

  })
 
const roboto_mono = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})


interface HeroProps {
  
}
const Hero: FC<HeroProps> = ({
  
}) => {

  return (
    <div className=' text-center'>
<div className="flex flex-col sm:flex-row">
  <div className="sm:w-1/2 p-8">
    <h1 className="text-4xl">The World's Best <br /> Platform for athletes and their team</h1>
  </div>
  <div className="sm:w-1/2">
    <img src="your-image.jpg" alt="A description of the image" />
  </div>
</div>
    </div>
  )
}

export default Hero



// <p style={cedarville_cursive.style} className=' font-cedarville-cursive'>Hero section</p>
