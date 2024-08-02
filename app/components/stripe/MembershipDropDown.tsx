import * as React from "react";
import { FaArrowRight } from "react-icons/fa6";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function MembershipDropDown() {
  return (
    <Select>
      <SelectTrigger className="w-[480px]">
        <SelectValue className="" placeholder="Free Plan" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectGroup>
          <SelectItem className=" pointer-events-none bg-slate-500" value="apple">Free Plan</SelectItem>
          <SelectItem className=" pointer-events-none" value="banana">Synced Pro</SelectItem>
          <span className="flex">
            <SelectLabel className="flex gap-2">
              Change Membership
            <FaArrowRight className="m-auto" />
            </SelectLabel>

          </span>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
