import {  Conversation, Event, Message, User } from "@prisma/client";

export type FullMessageType = Message & {
  sender: User, 
  seen: User[]
  image: string | null
};

export type FullConversationType = Conversation & { 
  users: User[]; 
  messages: any,
};


export type FullEventType = Event & {
  title: string | undefined
  notes: string | undefined
  user: User
  | undefined

}