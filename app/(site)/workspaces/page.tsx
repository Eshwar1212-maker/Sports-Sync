import { FC } from 'react'
import WorkSpaceHero from './components/WorkSpaceHero'
import WorkSpaceFirst from './components/WorkSpaceFirst'
import WorkSpaceSecond from './components/WorkSpaceSecond'
import WorkSpaceThird from './components/WorkSpaceThird'
import WorkSpaceFourth from './components/WorkSpaceFourth'
interface pageProps {
  
}
const page: FC<pageProps> = ({
  
}) => {
  return (
    <div className='bg-white text-black'>
      <WorkSpaceHero />
      <WorkSpaceThird />
      <WorkSpaceSecond />
      <WorkSpaceFirst />
      <WorkSpaceFourth />
    </div>
  )
}

export default page