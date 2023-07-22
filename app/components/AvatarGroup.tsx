import { User } from "@prisma/client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

interface AvatarGroupProps {
  users?: User[];
}

const getRandomUsers = (users: User[], num: number) => {
  const indices = new Set<number>();
  while (indices.size < num) {
    indices.add(Math.floor(Math.random() * users.length));
  }
  return Array.from(indices).map((index: number) => users[index]);
}

const AvatarGroup: FC<AvatarGroupProps> = ({ users = [] }) => {
  const [randomUsers, setRandomUsers] = useState<User[]>([]);

  useEffect(() => {
    const numAvatars = Math.min(3, users.length);  // don't attempt to get more avatars than there are users
    setRandomUsers(getRandomUsers(users, numAvatars));
  }, [users])

  const positionMap = {
    0: "top-0 left-[12px]",
    1: "bottom-0",
    2: "bottom-0 right-0",
  };

  return (
    <div className="relative h-11 w-11">
      {
        randomUsers.map((user, index) => (
          <p key={user.id} className={`absolute inline-block rounded-full overflow-hidden h-[21px] w-[21px] ${positionMap[index as keyof typeof positionMap]}`}>
            <Image alt="Avatar" fill src={user?.image || ""}/>
          </p>
        ))
      }
    </div>
  )
};

export default AvatarGroup;
