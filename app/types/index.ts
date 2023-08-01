import {  Conversation, Event, Message, User } from "@prisma/client";

export type FullMessageType = Message & {
  sender: any, 
  seen: any
  image: any
};

export type FullConversationType = Conversation & { 
  users: any; 
  messages: any,
};


export type FullEventType = Event & {
  title: any
  notes: any
  user: any

}