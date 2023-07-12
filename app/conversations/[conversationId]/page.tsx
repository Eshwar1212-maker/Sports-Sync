import { getConversationById } from '@/app/actions/getConversationById'
import { getMessages } from '@/app/actions/getMessages'
import EmptyState from '@/app/components/EmptyState'
import { FC } from 'react'

interface IParams {
    conversationId: string
}

const conversationId = async ({ params }: { params: IParams }) => {
    const conversation = await getConversationById(params.conversationId)
    const messages = await getMessages(params.conversationId)
    if (!conversation) {
        return (
            <div className='lg:pl-80 h-full'>
                <div className="h-full flex flex-col">
                    <EmptyState>
                        <div className='text-center items-center flex flex-col'>
                            <h3 className='mt-2 text-2xl font-semibold text-gray-900'>Select a chat or start a new conversation</h3>
                        </div>
                    </EmptyState>
                </div>
            </div>
        )
    }
    return (
        <div className=''>

        </div>
    )
}


export default conversationId;