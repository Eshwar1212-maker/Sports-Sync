"use client";
import { ActionTooltip } from "@/app/components/ActionToolTip";
import { User } from "@prisma/client";
import Image from "next/image";
import { FC } from "react";
import { TeamDrawer } from "./TeamDrawer";

export type TeamAdmin = {
  id: string | null
  name: string | null
  image: string | null
} | null

interface HeaderProps {
  team: any
  currentUser: any
  teamAdmin: TeamAdmin
}

const TeamCalenderHeader: FC<HeaderProps> = ({team, currentUser, teamAdmin }) => {

  

  return (
    <div className="border-b-[2px] border-b-slate-400 flex justify-between px-3">
      <div className="">
        <h1 className="text-[22px] font-semibold mr-2">{team?.title}</h1>

      </div>
      <div className="my-4 flex gap-2">
      <div className="hidden md:flex gap-1 pl-1">
        {team.users.map((user: any) => {
          return (
            <ActionTooltip  label={user?.name as string}>
              {user?.image && (
                <Image
                  src={user?.image as string}
                  alt="Avatar"
                  width={30}
                  height={20}
                  className="rounded-full"
                />
              )}
            </ActionTooltip>
          );
        })}

      </div>
      <ActionTooltip label="Manage Team">
          <TeamDrawer adminPhoto={teamAdmin?.image} admin={teamAdmin?.name} currentUser={currentUser} team={team}/>
       </ActionTooltip>
      </div>
    </div>
  );
};

export default TeamCalenderHeader;
