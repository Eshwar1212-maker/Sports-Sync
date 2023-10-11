'use client';

import React, { Fragment, useCallback, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FiAlertTriangle } from 'react-icons/fi'
import axios from 'axios';
import { useRouter } from 'next/navigation';

import useConversation from '@/app/hooks/useConversation';
import { toast } from 'react-hot-toast';
import Modal from '@/app/components/Modal';
import clsx from 'clsx';
import { IoClose } from 'react-icons/io5';
import { Button } from '@/components/ui/button';
import { Modall } from '@/app/conversations/components/ConfirmLeaveModal';

interface ConfirmModalProps {
  isOpen?: boolean;
  onClose: () => void;
  conversationName?: string | null
}

const ConfirmBootModal: React.FC<ConfirmModalProps> = ({ 
  isOpen, 
  onClose,
  conversationName 
}) => {
  const router = useRouter();
  const { conversationId } = useConversation();
  const [isLoading, setIsLoading] = useState(false);
  
  const onDelete = useCallback(() => {
    setIsLoading(true);
    axios.delete(`/api/conversations/${conversationId}`)
    .then(() => {
      router.push('/conversations');
      router.refresh();
      onClose();

    })
    .catch(() => location.reload()
    )
    .finally(() => {
      toast.success("Conversation deleted")
      setIsLoading(false)}
      )
  }, [router, conversationId, onClose]);


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
          <p className= "text-sm text-gray-300 dark:text-gray-600">
              Are you sure you want to delete this conversation? This action cannot be undone.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-4 flex justify-end gap-2">
        <Button
          disabled={isLoading}
          onClick={onDelete}
          variant={"destructive"}
        >
          Delete
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

