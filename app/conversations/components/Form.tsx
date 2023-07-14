"use client"

import useConversation from '@/app/hooks/useConversation'
import axios from 'axios'
import { FC } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { HiPaperAirplane } from 'react-icons/hi2'
import { HiPhoto } from 'react-icons/hi2'
import MessageInput from './MessageInput'
import { useMutation } from '@tanstack/react-query'

interface FormProps {}

const Form: FC<FormProps> = ({}) => {
  const {conversationId} = useConversation()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { message: '' }
  });

  const postMessage = useMutation<FieldValues>(
    (data) => {
      return axios.post('/api/messages', {
        ...data as any,
        conversationId
      })
    },
    {
      onError: () => {
        // handle error
      },
      onSuccess: () => {
        // handle success
        setValue('message', "", {shouldValidate: true});
      }
    }
  )

  const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
    setValue('message', '', { shouldValidate: true });
    postMessage.mutate(data);
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
        placeholder='Write a message...'
        errors={errors}
         /> 
         <button 
         type='submit'
         className='rounded-full p-2 bg-sky-500 cursor-pointer  hover:bg-sky-600'
         >
          <HiPaperAirplane
            size={18}
            className='text-white'
           />
         </button>
      </form>
    </div>
  )
}

export default Form;
