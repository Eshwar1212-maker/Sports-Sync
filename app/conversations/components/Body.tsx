"use client";
import { find } from "lodash";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import useConversation from "@/app/hooks/useConversation";
import MessageBox from "./MessageBox";
import { pusherClient } from "@/app/libs/pusher";
import { FullMessageType } from "@/app/types";

interface BodyProps {
  initialMessages: any;
}

const Body: React.FC<BodyProps> = ({ initialMessages = [] }) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState(initialMessages);
  const { conversationId } = useConversation();

  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`);
  }, [conversationId]);
  useEffect(() => {
    pusherClient.subscribe(conversationId);
    bottomRef?.current?.scrollIntoView();

    const messageHandler = (message: FullMessageType) => {
      setMessages((current: any) => {
        if (find(current, { id: message?.id })) return current;
        return [...current, message];
      });
    };
    pusherClient.bind("messages:new", messageHandler());
    return () => {
      pusherClient.unsubscribe(conversationId);
      pusherClient.unbind("messages:new");
    };
  }, [conversationId]);

  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message: any, i: any) => (
        <MessageBox
          isLast={i === messages.length - 1}
          key={message?.id}
          data={message}
        />
      ))}
      <div className="pt-24" ref={bottomRef} />
    </div>
  );
};

export default Body;
