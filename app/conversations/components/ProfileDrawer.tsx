"use client"

import useOtherUser from '@/app/hooks/useOtherUser'
import { Dialog, Transition } from '@headlessui/react'
import { Conversation, User } from '@prisma/client'
import { format } from 'date-fns'
import { FC, Fragment, useMemo } from 'react'

interface ProfileDrawerProps {
    isOpen: boolean
    onClose: () => void
    data: Conversation & {users: User[]}
}
const ProfileDrawer: FC<ProfileDrawerProps> = ({
  isOpen, onClose, data
}) => {

    const otherUser = useOtherUser(data)

    const joinedDate = useMemo(() => {
        return format(new Date(otherUser.createdAt), 'PP')
    }, [otherUser.createdAt])

    const title = useMemo(() => {
        return data.name || otherUser.name
    }, [data.name, otherUser.name])
    const statusText = () => {
        if(data.isGroup) return `${data.users.length} members`
    }
  return (
    <Transition.Root
    show={isOpen}
    as={Fragment}
    >
        <Dialog
        as='div'
        className="relative z-50"
        onClose={onClose}
        >
            <Transition.Child
            as={Fragment}
            enter='ease-out duration 200'
            enterFrom='opacity-500'
            enterTo='opacity-500'
            leave='ease-in duration-200'
            leaveFrom='opacity-50'
            leaveTo='opacity-50'
            >
                <div className='fixed inset-0 bg-black bg-opacity-40' />
            </Transition.Child>
        </Dialog>
    </Transition.Root>
  )
}

export default ProfileDrawer