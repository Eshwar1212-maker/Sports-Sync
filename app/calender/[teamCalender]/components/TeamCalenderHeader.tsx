"use client";
import { ActionTooltip } from "@/app/components/ActionToolTip";
import { Team, User } from "@prisma/client";
import Image from "next/image";
import { FC } from "react";
import { AiOutlineMenu, AiOutlineMenuFold } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { HiChevronLeft } from "react-icons/hi";
import { HiEllipsisHorizontal, HiEllipsisVertical } from "react-icons/hi2";
import { RiMenu3Fill } from "react-icons/ri";
import { TeamDrawer } from "./TeamDrawer";
interface HeaderProps {
  team: Team & {
    users: User[];
  };
  currentUser: User
}

const TeamCalenderHeader: FC<HeaderProps> = ({ team, currentUser }) => {


  return (
    <div className="border-b-[2px] border-b-slate-400 flex justify-between px-3">
      <div className="">
        <h1 className="text-[22px] font-semibold mr-2">{team?.title}</h1>
        <div className="flex gap-1 pl-1">
        {team.users.map((user) => {
          return (
            <ActionTooltip  label={user?.name as string}>
              {user?.image && (
                <Image
                  src={user?.image as string}
                  alt="Avatar"
                  width={20}
                  height={40}
                  className="rounded-full"
                />
              )}
            </ActionTooltip>
          );
        })}

      </div>
      </div>
      <div className="my-4">
      <ActionTooltip label="Manage Team">
          <TeamDrawer currentUser={currentUser} team={team}/>
       </ActionTooltip>
      </div>
    </div>
  );
};

export default TeamCalenderHeader;
