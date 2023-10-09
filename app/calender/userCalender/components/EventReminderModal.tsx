import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { IoMdNotifications } from "react-icons/io"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
  import { SlCalender } from "react-icons/sl";
import React from "react";
import { Calendar } from "@/components/ui/calendar"




export function EventReminderModal({title}: any) {

    const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex">
        <IoMdNotifications className="mr-2 h-4 w-4 my-auto" />
              <span className="text-sm">Set reminder notification</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] h-[270px]">
        <DialogHeader className="max-h-[0px]">
          <DialogTitle>
            Add reminder for "{title}" 
          </DialogTitle>
          <DialogDescription>
            Select a date to get notified any specific time you want before this event occurs.
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-16">

        <Popover>
              <PopoverTrigger className="flex gap-3" asChild>
                <Button className="rounded-md w-fit" variant={"tertiary"}>
                  <SlCalender size={20} className="" />

                </Button>

              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 flex">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            
            </Popover>
            <p className="my-2">{date?.toString().split(" ")[0]! + ", " + date?.toString().split(" ")[1] + ", " +  date?.toString().split(" ")[2]}</p>
            

        </div>
        <DialogFooter className="fixed bottom-4 right-4">
          <Button type="submit">Add reminder</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
