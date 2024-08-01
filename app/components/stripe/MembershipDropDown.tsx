import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function MembershipDropDown() {
  return (
    <Select >
      <SelectTrigger className="w-[480px]">
        <SelectValue className="" placeholder="Free Plan" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectGroup>
          <SelectItem value="apple">Free Plan</SelectItem>
          <SelectItem value="banana">Upgrade to Synced Pro!</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
