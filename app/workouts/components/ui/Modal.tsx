'use client';

import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IoClose } from 'react-icons/io5'
import clsx from 'clsx';
import { useTheme } from 'next-themes';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  isFullWidth?: boolean
  isImage?: boolean
}

const ProgressionModall: React.FC<ModalProps> = ({ isOpen, onClose, children, isFullWidth, isImage}) => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div 
            className="
            fixed 
            inset-0 
            bg-[#2f2f2f]
            bg-opacity-80
            transition-opacity
            "
          />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div 
            className="
              flex 
              min-h-full 
              items-center 
              justify-center 
              p-4 
              text-center 
              sm:p-0
            "
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel 
                className={clsx(`
                relative 
                transform
                overflow-hidden 
                rounded-lg 
                px-4 
                pb-4
                pt-5 
                text-left 
                shadow-xl 
                transition-all
              `, currentTheme == "dark" ? "bg-[#1c1c1c]" : "bg-white",
              "w-full md:w-[960px] md:h-[600px]",

              
              )}
              >
                <div 
                  className="
                    absolute 
                    right-0 
                    top-0 
                    hidden 
                    pr-4 
                    pt-4 
                    sm:block
                    z-10

                  "
                >
                  <button
                    type="button"
                    className="
                      rounded-md 
                      hover:text-gray-500 
                      focus:outline-none 
                      focus:ring-2 
                      focus:ring-indigo-500 
                      focus:ring-offset-2
                    "
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <IoClose className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ProgressionModall;