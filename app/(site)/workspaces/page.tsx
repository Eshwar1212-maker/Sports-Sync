import { FC } from 'react'
import WorkSpaceHero from './components/WorkSpaceHero'
import WorkSpaceFirst from './components/WorkSpaceFirst'
import WorkSpaceSecond from './components/WorkSpaceSecond'
import WorkSpaceThird from './components/WorkSpaceThird'
interface pageProps {
  
}
const page: FC<pageProps> = ({
  
}) => {
  return (
    <div>
      <WorkSpaceHero />
      <WorkSpaceFirst />
      <WorkSpaceSecond />
      <WorkSpaceThird />
    </div>
  )
}

export default page