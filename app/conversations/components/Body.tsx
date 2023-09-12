'use client';

import { useEffect, useRef, useState } from "react";

import { pusherClient } from "@/app/libs/pusher";
import useConversation from "@/app/hooks/useConversation";
import MessageBox from "./MessageBox";
import { find } from "lodash";
import { FullMessageType } from "@/app/types";
import { User } from "@prisma/client";

interface BodyProps {
  initialMessages: FullMessageType[];
  currentUser: any
}

const Body: React.FC<BodyProps> = ({ initialMessages = [], currentUser }) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState(initialMessages);
  
  const { conversationId } = useConversation();



  useEffect(() => {
    pusherClient.subscribe(conversationId)
    bottomRef?.current?.scrollIntoView();

    const messageHandler = (message: any) => {
      bottomRef?.current?.scrollIntoView();
      setMessages((current: any) => {
        if (find(current, { id: message.id })) {
          return current;
        }

        return [...current, message]
      });
      
    };

    const updateMessageHandler = (newMessage: FullMessageType) => {
      setMessages((current) => current.map((currentMessage) => {
        if (currentMessage.id === newMessage.id) {
          return newMessage;
        }
  
        return currentMessage;
      }))
    };
  

    pusherClient.bind('messages:new', messageHandler)
    pusherClient.bind('message:update', updateMessageHandler);

    return () => {
      pusherClient.unsubscribe(conversationId)
      pusherClient.unbind('messages:new', messageHandler)
      pusherClient.unbind('message:update', updateMessageHandler)
    }
  }, [conversationId]);

  return ( 
    <div className="flex-1 overflow-y-auto ">
      {messages.map((message, i) => (
        <MessageBox 
          currentUser={currentUser}
          isLast={i === messages.length - 1} 
          key={message.id} 
          data={message}
        />
      ))}
      <div className="pt-24" ref={bottomRef} />
    </div>
  );
}
 
export default Body;