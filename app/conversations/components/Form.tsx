"use client"

import useConversation from '@/app/hooks/useConversation'
import axios from 'axios'
import { FC } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { HiPhoto } from 'react-icons/hi2'
import MessageInput from './MessageInput'
interface FormProps {
  
}
const Form: FC<FormProps> = ({
  
}) => {
    const {conversationId} = useConversation()
    const {register, handleSubmit, setValue} = useForm<FieldValues>({
        defaultValues: {
            message: ''
        }
    })
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setValue('message', "", {shouldValidate: true})
        axios.post('/api/messages', {
            ...data,
            conversationId
        })
    }
    
  return (
    <div className='py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4 w-full'>
      <HiPhoto size={30} className='text-sky-500'/>
      <form
       className='flex items-center gap-2 lg:gap-4 w-full'
       onSubmit={handleSubmit(onSubmit)}
       >
        <MessageInput
        id="message"
        register={register}
        required
        placeholder: write a message
         />
      </form>
    </div>
  )
}

export default Form