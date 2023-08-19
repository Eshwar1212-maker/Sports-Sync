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
import { useTheme } from "next-themes";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";




export function NotificationsSheet() {
  const {theme} = useTheme()
  return (
    <div className="grid grid-cols-2 relative">
        <Sheet>
          <SheetTrigger asChild>
            <div className="cursor-pointer w-6 mx-auto">
{  false &&   <span className=" mr-2 pr-2">
                5
              </span>}
              <IoIosNotificationsOutline className="" color={theme === "light" ? "gray" : "white"} size={35} />
            </div>
          </SheetTrigger>
          <SheetContent className="" side={"left"}>
            <SheetHeader className="">
                <SheetTitle>Notifications</SheetTitle>
            </SheetHeader>
            <SheetClose className="absolute top-1 right-2">
              <AiOutlineCloseCircle size={33} color="white"/>
            </SheetClose>
            <SheetDescription className="items-center text-center flex justify-center py-[350px]">
                <p className="text-2xl">No new notifications</p>
            </SheetDescription>
            <SheetFooter>
            </SheetFooter>
          </SheetContent>
        </Sheet>
    </div>
  );
}
