'use client';

import { User } from "@prisma/client";

import Image from "next/image";

interface AvatarProps {
  user?: User;
};

const Avatar: React.FC<AvatarProps> = ({ user }) => {


  return (
    <div className="relative">
      <div className="
        relative 
        inline-block 
        rounded-full 
        overflow-hidden
        h-9 
        w-9 
        md:h-11 
        md:w-11
      ">
        <Image
          fill
          src={user?.image || 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010'}
          alt="Avatar"
        />
      </div>
    </div>
  );
}

export default Avatar;