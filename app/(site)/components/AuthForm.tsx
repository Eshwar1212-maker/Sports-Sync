"use client"

import Input from '@/app/components/inputs/Input'
import { FC, useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Button from './Button'
import AuthSocialButton from './AuthSocialButton'
import {BsGoogle} from 'react-icons/bs'

type Variant = 'LOGIN' | 'REGISTER'

interface AuthFormProps {

}
const AuthForm: FC<AuthFormProps> = ({

}) => {
    const [variant, setVariant] = useState<Variant>('LOGIN')
    const [isLoading, setIsLoading] = useState(false)

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER')
        } else {
            setVariant('LOGIN')
        }

    }, [variant])

    const {
        register, handleSubmit, formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        if (variant === 'REGISTER') {
            //register
        }
        if (variant === 'LOGIN') {
            //sign in
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true)
        //Next auth social sign in
    }

    return (
        <div
            className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'
        >
            <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                    {
                        variant === 'REGISTER' && (
                            <Input
                                label='Email'
                                register={register}
                                id="email"
                                errors={errors}
                            />
                        )
                    }
                    <Input
                        placeholder='email'
                        label='Email address'
                        register={register}
                        id="email"
                        errors={errors}
                    />
                    <Input
                        label='Password'
                        register={register}
                        id="password"
                        placeholder="password"
                        errors={errors}
                    />
                    <div>
                        <Button
                         children={variant === 'LOGIN' ? 'Sign in' : "Register"}
                         disabled={isLoading}
                         fullWidth
                         type='submit'
                         />
                    </div>
                </form>
                <div className='mt-6'>
                    <div className='relative'>
                        <div className='absolute inset-0 flex items-center'>
                            <div className='w-full border-t border-gray-300' />
                        </div>
                        <div className='relative flex justify-center text-sm'>
                            <span className='bg-white px-2 text-gray-500'>
                                Or continue with 
                            </span>
                        </div>
                    </div>
                    <div className='mt-6 flex gap-2'>
                        <AuthSocialButton icon={BsGoogle}  onClick={() => socialAction('google')}/>
                    </div>
                </div>
                <div className='flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500'>
                    <div>
                        {variant === 'LOGIN' ? 'First time here?' : "Already have an account?"}
                    </div>
                    <div
                     className='underline cursor-pointer'
                     onClick={toggleVariant}
                    >
                        {variant === 'LOGIN' ? 'Create an account' : "Login"}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthForm
