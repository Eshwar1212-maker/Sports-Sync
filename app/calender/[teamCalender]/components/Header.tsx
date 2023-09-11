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
interface HeaderProps {
  team: Team & {
    users: User[];
  };
}

const Header: FC<HeaderProps> = ({ team }) => {


  return (
    <div className="border-b-[2px] border-b-slate-600 flex justify-between px-3">
      <div className="">
        <h1 className=" text-[15px] font-bold pb-1">{team?.title}</h1>
        <div className="flex gap-4">
        {team.users.map((user) => {
          return (
            <ActionTooltip label={user?.name as string}>
              {user?.image && (
                <Image
                  src={user?.image as string}
                  alt="Avatar"
                  width={30}
                  height={40}
                  className="rounded-[30px]"
                />
              )}
            </ActionTooltip>
          );
        })}

      </div>
      </div>
      <div className="my-4">
      <ActionTooltip label="Manage Team">
            <button aria-label="Team Settings" className="">
            <HiEllipsisVertical size={32}/>
            </button>
        </ActionTooltip>
      </div>
    </div>
  );
};

export default Header;
