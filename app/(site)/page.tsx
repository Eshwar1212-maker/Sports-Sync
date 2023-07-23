import Image from 'next/image'
import { FC } from 'react'
import AuthForm from './components/AuthForm'
import AboutOne from './components/AboutOne'
import AboutTwo from './components/AboutTwo'

interface pageProps {

}
const page: FC<pageProps> = ({

}) => {
    return (
        <div>

            <div
                className='flex h-screen min-h-full flex-col py-[131px] sm:px-6 lg:px-8 bg-gradient-to-t bg-no-repeat bg-cover'>
                <div className='sm:mx-auto sm:w-full sm:max-w-md'>

                    <Image
                        alt='Logo'
                        height={48}
                        width={48}
                        className='mx-auto w-auto'
                        src="https://us.123rf.com/450wm/pixbold/pixbold2208/pixbold220800674/190468321-letter-b-basket-ball-logo-design-for-basket-club-symbol-vector-template-basketball-logo-element.jpg?ver=6"
                    />

                </div>

                {/*Auth Form*/}
                <AuthForm />
            </div>
            <AboutOne />
            <AboutTwo />

        </div>
    )
}

export default page