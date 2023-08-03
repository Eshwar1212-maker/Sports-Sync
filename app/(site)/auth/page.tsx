import Image from 'next/image'
import { FC } from 'react'
import AuthForm from '../components/AuthForm'


interface pageProps {

}
const page: FC<pageProps> = ({

}) => {
    return (
        <div>

            <div
                className='flex h-screen min-h-full flex-col py-[131px] sm:px-6 lg:px-8 bg-gradient-to-t bg-no-repeat bg-cover'>

                {/*Auth Form*/}
                <AuthForm />
            </div>


        </div>
    )
}

export default page