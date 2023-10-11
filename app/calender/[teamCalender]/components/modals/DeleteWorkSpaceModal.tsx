'use client';

import { Dialog } from '@headlessui/react'
import { FiAlertTriangle } from 'react-icons/fi'
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';

import { toast } from 'react-hot-toast';
import clsx from 'clsx';
import { Button } from '@/components/ui/button';
import { Modall } from '@/app/conversations/components/ConfirmLeaveModal';
import { useMutation } from '@tanstack/react-query';

interface ConfirmModalProps {
  isOpen?: boolean;
  onClose: () => void;
  conversationName?: string | null
}

const DeleteWorkSpaceModal: React.FC<ConfirmModalProps> = ({ 
  isOpen, 
  onClose,
}) => {

  const router = useRouter();
  const params = useParams()
  

  const {mutate: deleteMutation, isLoading, isError} = useMutation({
    mutationFn: () => {
      return axios.delete(`/api/teams/teamEvents/${params?.teamCalender}`)

    },
    onError: (error: any) => {
      console.log(error);
      
    },
    onSuccess: (data: any) => {
      onClose
      router.refresh()
      router.push("/calender")
      toast.success("Team deleted")
      
    }
  })



  
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
            className="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Delete team
          </Dialog.Title>
          <div className="mt-2">
          <p className= "text-sm dark:text-gray-300text-gray-600">
              Are you sure you want to delete this team? This action cannot be undone.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-4 flex justify-end gap-2">
        <Button
          disabled={isLoading}
          onClick={() => deleteMutation()}
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

export default DeleteWorkSpaceModal;

