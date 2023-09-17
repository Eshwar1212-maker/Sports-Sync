
import { ActionTooltip } from "@/app/components/ActionToolTip";
import Avatar from "@/app/components/Avatar";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Team, User } from "@prisma/client";
import { useTheme } from "next-themes";
import { HiEllipsisVertical } from "react-icons/hi2";


  
  interface ProfileDrawerProps {
    team: Team & {
      users: User[];
      events: any[];  
    };
    currentUser: User;
  }
export function TeamDrawer({ team, currentUser }: ProfileDrawerProps) {
  console.log(team);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <HiEllipsisVertical size={25} />
        </Button>
      </SheetTrigger>
      <SheetContent className="space-y-6">
        <SheetHeader>
          <SheetTitle>{team?.title}</SheetTitle>
          <SheetDescription className="py-[20px]">
            <div className="">
              <h4 className="font-bold pb-1 text-md">Moderator</h4>
              <div className="flex gap-2 py-2">
                <Avatar user={currentUser} />
                <p className="my-auto">{currentUser.name}</p>
              </div>
            </div>
            <div className="py-2">
              <h4 className="font-bold pb-1 text-md">
                {team?.users?.length} Members
              </h4>
              {team.users.map((user: any) => {
                return (
                  <div className="flex justify-between gap-2 py-2">
                    <div className="flex gap-2">
                      <Avatar user={user} />
                      <p className="my-auto">{user.name}</p>
                    </div>
                  </div>
                );
              })}
              <div className="py-2">
              <h4 className="font-bold pb-1 text-md">
                Activity
              </h4>
               <ul className="py-1">
                  {
                    team?.events.map((event) => {
                      return (
                            <li className="text-[15px] py-1">
                                {event?.poster} added {event?.title}
                            </li>
                        )
                    })
                    
                  }
               </ul>
              </div>
              <div className="fixed bottom-10">
              <div className="flex gap-2 py-3 justify-center mx-auto">
                <Button variant={"five"}>
                  Group Chat
              </Button>
      
                <ActionTooltip label={`Leave ${team?.title}`}>
                  <Button className="rounded-lg" variant={"destructive"}>
                 Sign Out
              </Button>
                  </ActionTooltip>

              </div>
    
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>

        <SheetFooter>
          {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
