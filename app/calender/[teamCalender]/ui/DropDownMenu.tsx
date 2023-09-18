"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HiEllipsisVertical } from "react-icons/hi2"

export function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
            <HiEllipsisVertical size={27}/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup className="ml-6" value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Low</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Very</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup className="ml-6" value={position} onValueChange={setPosition}>

          <DropdownMenuRadioItem value="bottom">Red</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Yellow</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Blue</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Purple</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
