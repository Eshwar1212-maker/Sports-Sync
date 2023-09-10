'use client';

import React, { Fragment, useCallback, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FiAlertTriangle } from 'react-icons/fi'
import axios from 'axios';
import { useRouter } from 'next/navigation';

import useConversation from '@/app/hooks/useConversation';
import { toast } from 'react-hot-toast';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { IoClose } from 'react-icons/io5';
import { Button } from '@/components/ui/button';
import { User } from '@prisma/client';

interface ConfirmModalProps {
  isOpen?: boolean;
  onClose: () => void;
  conversationName: string | null
  bootedMember: any
}

const ConfirmBootModal: React.FC<ConfirmModalProps> = ({ 
  isOpen, 
  onClose,
  conversationName,
  bootedMember
}) => {
  const router = useRouter();
  const { conversationId } = useConversation();
  const [isLoading, setIsLoading] = useState(false);
  
  const onDelete = useCallback(() => {
    setIsLoading(true);
    axios.patch(`/api/conversations/${conversationId}/boot`, {conversationId: conversationId, bootedMember: bootedMember[2]!})
    .then(() => {
      onClose();
      router.push(`/conversations/${conversationId}`);
      router.refresh();
      toast.success(`Succesfully booted ${bootedMember[0]}`)
    })
    .catch(() => toast.error('Something went wrong!'))
    .finally(() => setIsLoading(false))
  }, [router, conversationId, onClose]);
  
  const {theme} = useTheme()
  
  return (
    <Modall isOpen={isOpen} onClose={onClose}>
      <div className="sm:flex sm:items-start md:w-[500px]">
        <div 
          className="
            mt-3 
            text-center 
            sm:ml-4 
            sm:mt-0 
            sm:text-left
          "
        >
          <Dialog.Title 
            as="h3" 
            className={clsx("text-base font-semibold leading-6", theme === "light" && "text-gray-900", theme === "dark" && "text-gray-100",)}
          >
            Boot {bootedMember && bootedMember[0]} from {conversationName}?
          </Dialog.Title>
          <div className="mt-2">
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-4 flex justify-end gap-2">
        <Button
          disabled={isLoading}
          onClick={onDelete}
          variant={"destructive"}
        >
          Boot
        </Button>
        <Button
          disabled={isLoading}
          onClick={onClose}
          variant={"ghost"}
        >
          Cancel
        </Button>
      </div>
    </Modall>
  )
}

export default ConfirmBootModal;

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  isFullWidth?: boolean
  isImage?: boolean
}

export const Modall: React.FC<ModalProps> = ({ isOpen, onClose, children, isFullWidth, isImage}) => {
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
              "",

              
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

