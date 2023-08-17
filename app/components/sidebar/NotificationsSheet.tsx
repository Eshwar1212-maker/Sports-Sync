import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosNotificationsOutline, IoMdClose } from "react-icons/io";


const SHEET_SIDES = ["left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export function SheetSide() {
  return (
    <div className="grid grid-cols-2 relative">
      {SHEET_SIDES.map((side) => (
        <Sheet key={"left"}>
          <SheetTrigger asChild>
            <li className="cursor-pointer w-6">
{  false &&   <span className="absolute top-0 right-0 bg-gray-500 text-[12px] text-gray-300 w-5 h-5 rounded-full flex items-center justify-center">
                5
              </span>}
              <IoIosNotificationsOutline className="pr-2 mr-4" color="lightgray" size={39} />
            </li>
          </SheetTrigger>
          <SheetContent className="" side={side}>
          <SheetClose className="top-2 right-0 absolute" asChild>
                  <Button variant={"link"} type="submit">
                    <AiOutlineCloseCircle size={32}/>
                  </Button>
                </SheetClose>
            <SheetHeader className="">
              <div>
                <SheetTitle>Notifications</SheetTitle>
              </div>

            </SheetHeader>
            <SheetDescription className="items-center text-center flex justify-center py-[350px]">
                <p className="text-2xl">No new notifications</p>
            </SheetDescription>
            <SheetFooter>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
