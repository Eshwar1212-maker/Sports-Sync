"use client";

import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SlCalender } from "react-icons/sl";
import {
  BarChart4,
  BellOff,
  Calendar,
  Dumbbell,
  LineChart,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface AccordiansProps {
  onClose: () => void;
}
const WorkSpaceAccordians: FC<AccordiansProps> = ({ onClose }) => {
  const router = useRouter();
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="pb-3 font-light cursor-pointer text-[18px] border-b-[1px] border-slate-400 transition duration-300 sm:mr-0 sm:hover:bg-slate-200">
          WorkSpaces
        </AccordionTrigger>
        <AccordionContent
          className="flex"
          onClick={() => {
            router.push("/workspaces");
            onClose();
          }}
        >
          <div className="flex w-[600px] flex-col hover:bg-slate-200 cursor-pointer">
            <div className="flex flex-row gap-2 my-4">
              <Calendar size={23} color="lightblue" />
              <h3 className="text-[16px] font-semibold">Calenders</h3>
            </div>
            <div>
              <p>
                Use our calenders to plan all your sport related events.
              </p>
            </div>
          </div>
        </AccordionContent>
        <AccordionContent
          className="flex flex-row"
          onClick={() => {
            router.push("/workspaces");
            onClose();
          }}
        >
          <div className="flex w-[600px] flex-col hover:bg-slate-200 cursor-pointer">
            <div className="flex flex-row gap-2 my-4">
              <Users size={23} color="red" />
              <h3 className="text-[16px] font-semibold">Private Teams</h3>
            </div>
            <div></div>
            <p>Use our calenders to create a private team workspace, alongside a group chat.</p>
          </div>
        </AccordionContent>
        <AccordionContent
          className="flex flex-row"
          onClick={() => {
            router.push("/workspaces");
            onClose();
          }}
        >
          <div className="flex w-[600px] flex-col hover:bg-slate-200 cursor-pointer">
            <div className="flex flex-row gap-2 my-4">
              <BellOff size={23} color="darkblue" />
              <h3 className="text-[16px] font-semibold">Notifications</h3>
            </div>
            <div></div>
            <p className="">
              Get notifications every time a new event is added in your team, and when someone invites you 
              to a group chat.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default WorkSpaceAccordians;

export const TrackingAccordian = ({ onClose }: { onClose: () => void }) => {
  const router = useRouter();

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="pb-3 font-light cursor-pointer text-[18px] border-b-[1px] border-slate-400 transition duration-300 sm:mr-0 sm:hover:bg-slate-200">
          Tracking
        </AccordionTrigger>
        <AccordionContent
          className="flex hover:bg-slate-200"
          onClick={() => {
            router.push("/tracking");
          }}
        >
          <div
            onClick={() => {
              router.push("/workspaces");
              onClose();

            }}
            className="flex w-[600px] flex-col hover:bg-slate-200 cursor-pointer"
          >
            <div className="flex flex-row gap-2 my-4">
              <Dumbbell size={23} color="lightblue" />
              <h3 className="text-[16px] font-semibold">Logging</h3>
            </div>
            <div className="pb-2">
              <p>
                Log your workouts for different calender days, add them to your
                personal calender.
              </p>
            </div>
          </div>
        </AccordionContent>
        <AccordionContent
          className="flex hover:bg-slate-200">
          <div
            onClick={() => {
              router.push("/tracking");
              onClose();

            }}
            className="hover:bg-200 cursor-pointer"
          >
            <div className="flex flex-row gap-2 my-3 ">
              <LineChart size={23} color="red" />
              <h3 className="text-[16px] font-semibold ">
                Progressive Overload
              </h3>
            </div>

            <div className="py-3">
              <p>
                Use our charts to track your progressions on every single exercise.
              </p>
            </div>
          </div>
        </AccordionContent>
        <AccordionContent
          className="flex hover:bg-slate-200">
          <div
            onClick={() => {
              router.push("/tracking");
              onClose();

            }}
            className="flex w-[600px] flex-col my-3 hover:bg-slate-200 cursor-pointer py-3"
          >
            <div className="flex flex-row gap-2">
              <BarChart4 size={23} color="gray" />
              <h3 className="text-[16px] font-semibold">
                Consistency/Intensity Feedback
              </h3>
            </div>
            <div></div>
            <div className="py-3">
              <p>
                Visit your dashboard to track the amount of days you hit the gym each month, alongside 
                how many exercises you did each month.
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
