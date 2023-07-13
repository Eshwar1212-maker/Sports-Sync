"use client"

import { FC } from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
interface MessageInputProps {
  id: string
  type?: string
  placeholder?: string
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
  required?: boolean
}
const MessageInput: FC<MessageInputProps> = ({
    id, register
}) => {
  return (
    <input>
      MessageInput
    </input>
  )
}

export default MessageInput