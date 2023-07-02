import Image from 'next/image'
import { FC } from 'react'
import AuthForm from './components/AuthForm'

interface pageProps {
  
}
const page: FC<pageProps> = ({
  
}) => {
  return (
    <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <Image 
            alt='Logo'
            height={48}
            width={48}
            className='mx-auto w-auto'
            src="https://us.123rf.com/450wm/pixbold/pixbold2208/pixbold220800674/190468321-letter-b-basket-ball-logo-design-for-basket-club-symbol-vector-template-basketball-logo-element.jpg?ver=6"
            />
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>Sign in to your account</h2>
      </div>
      {/*Auth Form*/}
      <AuthForm />
    </div>
  )
}

export default page