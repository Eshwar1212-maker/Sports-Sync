'use client';

import React, { Fragment, useCallback, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FiAlertTriangle } from 'react-icons/fi'
import axios from 'axios';
import { useRouter } from 'next/navigation';

import useConversation from '@/app/hooks/useConversation';
import { toast } from 'react-hot-toast';
import Modal from '@/app/components/Modal';
import Button from '@/app/components/Button';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { IoClose } from 'react-icons/io5';

interface ConfirmModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ 
  isOpen, 
  onClose 
}) => {
  const router = useRouter();
  const { conversationId } = useConversation();
  const [isLoading, setIsLoading] = useState(false);
  
  const onDelete = useCallback(() => {
    setIsLoading(true);
    axios.delete(`/api/conversations/${conversationId}`)
    .then(() => {
      onClose();
      router.push('/conversations');
      router.refresh();
    })
    .catch(() => toast.error('Something went wrong!'))
    .finally(() => setIsLoading(false))
  }, [router, conversationId, onClose]);

  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  
  return (
    <Modall isOpen={isOpen} onClose={onClose}>
      <div className="sm:flex sm:items-start">
        <div 
          className="
            mx-auto 
            flex 
            h-12 
            w-12 
            flex-shrink-0 
            items-center 
            justify-center 
            rounded-full 
            bg-red-100 
            sm:mx-0 
            sm:h-10 
            sm:w-10
          "
        >
          <FiAlertTriangle 
            className="h-6 w-6 text-red-600" 
            aria-hidden="true"
          />
        </div>
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
            className="text-base font-semibold leading-6 text-gray-900"
          >
            Delete conversation
          </Dialog.Title>
          <div className="mt-2">
          <p className={clsx(`text-sm`, currentTheme == "dark" ? "text-gray-300" : "text-gray-600")}>
              Are you sure you want to delete this conversation? This action cannot be undone.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <Button
          disabled={isLoading}
          danger
          onClick={onDelete}
        >
          Delete
        </Button>
        <Button
          disabled={isLoading}
          secondary
          onClick={onClose}
        >
          Cancel
        </Button>
      </div>
    </Modall>
  )
}

export default ConfirmModal;

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

