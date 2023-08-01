"use client"
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import { FC } from 'react'
import {FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'


interface InputProps {
    label: string
    id: string
    type?: string
    required?: boolean
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
    placeholder?: string
    disabled?: boolean
}
const Input: FC<InputProps> = ({
    label, id, type, register, required, errors, disabled, placeholder
}) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className=''>
      <label htmlFor={id} className='block text-sm font-md leading-6'>{label}</label>
      <div className='mt-2'>
            <input
            placeholder={placeholder}
            id={id} 
            disabled={disabled} 
            type={type} 
            autoComplete={id} 
            {...register(id, {required})}
            className={clsx(`
                form-input block w-full ronded-md border-0 py-1.5 shadow-sm ring-1 px-2
                ring-inset ring-gray-300 placeholder:text-gray-400focus focus:ring-2 focus:ring-inset
                focus:ring-sky-600 sm:text-sm sm:leading-6
            `, errors[id] && "focus: ring-rose-500", disabled && "opacity-50 cursor-default",
            currentTheme === "dark" ? "bg-white text-black" : ""
            )}
            />
      </div>
    </div>
  )
}

export default Input