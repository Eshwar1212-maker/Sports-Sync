import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { HiEllipsisVertical } from "react-icons/hi2"

export function DropdownMenuDemo() {
  const {theme} = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link"><HiEllipsisVertical color={theme === "light" ? "black" : "white"} size={27}/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            Edit
            <DropdownMenuShortcut><AiOutlineEdit size={23} /></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
          Delete
          <DropdownMenuShortcut><AiOutlineDelete size={23}/></DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
