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
  isMessage?: boolean
  isImageImage?: boolean
  showClose?: boolean
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, isFullWidth, isImage, isMessage, isImageImage, showClose = true}) => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}

        >
          <div 
            className="
            fixed 
            inset-0 
            bg-[#2f2f2f]
            bg-opacity-90
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
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel 
                className={clsx(`relative transform overflow-hidden px-4 pb-4 pt-5 text-left shadow-xl transition-all
              `, currentTheme == "dark" ? "bg-[#1c1c1c]" : "bg-white",
              (isFullWidth && isImage && !isMessage) ? "w-[95%] h-[694px] md:w-[900px] md:h-[712px]" : "w-full sm:my-8 sm:w-full sm:max-w-lg sm:p-6",

              
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

export default Modal;