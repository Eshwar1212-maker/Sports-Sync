"use client"

import EmptyState from '../components/EmptyState'
import useConversation from '../hooks/useConversation'
import clsx from 'clsx'

const Home = () => {
  const { isOpen } = useConversation()
  return (
    <div
      className={
        clsx("lg:pl-80 h-full lg:block z-10", isOpen ? "block" : "hidden")
      }
    >
      <EmptyState>
      <div className='text-center items-center flex flex-col'>
        <h3 className='mt-2 text-2xl font-semibold'>Select a chat or start a new conversation</h3>
      </div>
      </EmptyState>
    </div>
  )
}

export default Home