import Avatar from "@/app/components/Avatar"
import { FullTeamEventType } from "@/app/types"
import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Team, User } from "@prisma/client"
import { HiEllipsisVertical } from "react-icons/hi2"



export function TeamDrawer({team}:{ team: Team & {
    users: User[];
  }}) {

    console.log(team);
    
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
        <HiEllipsisVertical size={25}/>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Manage {team?.title}</SheetTitle>
          <SheetDescription className="py-[20px]">
          <h4 className="font-semibold pb-1">{team?.users?.length} Members</h4>
          {team.users.map((user: any) => {
                                      return (
                                        <div className="flex justify-between gap-2 py-3">
                                          <div className="flex gap-2">
                                            <Avatar user={user} />
                                            <p className="my-auto">
                                              {user.name}
                                            </p>
                                          </div>
                                        </div>
                                      );
                                    })}
          </SheetDescription>
        </SheetHeader>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
