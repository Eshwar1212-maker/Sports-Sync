import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SlCalender } from "react-icons/sl";
import { BarChart4, BellOff, Calendar, Dumbbell, LineChart, Users } from "lucide-react";

interface AccordiansProps {
  onClose: () => void;
}
const WorkSpaceAccordians: FC<AccordiansProps> = ({ onClose }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="pb-3 font-light cursor-pointer text-[18px] border-b-[1px] border-slate-400 transition duration-300 sm:mr-0 sm:hover:bg-slate-200">
          WorkSpaces
        </AccordionTrigger>
        <AccordionContent className="flex" onClick={onClose}>
          <div className="flex w-[600px] flex-col space-y-3">
            <div className="flex flex-row gap-2">
                <Calendar size={23} color="lightblue"/>
                <h3 className="text-[16px] font-semibold">Calenders</h3>
            </div>
            <div>
            <p>Use our calenders to create a team workspace or private one.</p>
            </div>
          </div>

        </AccordionContent>
        <AccordionContent className="flex flex-row" onClick={onClose}>
        <div className="flex w-[600px] flex-col space-y-3">
          <div className="flex flex-row gap-2">
                <Users size={23} color="red"/>
                <h3 className="text-[16px] font-semibold">Private Teams</h3>
            </div>
          <div>
          </div>
          <p>Use our calenders to create a team workspace or private one.</p>

          </div>

        </AccordionContent>
        <AccordionContent className="flex flex-row" onClick={onClose}>
        <div className="flex w-[600px] flex-col space-y-3">
          <div className="flex flex-row gap-2">
          <BellOff size={23} color="darkblue"/>
                <h3 className="text-[16px] font-semibold">Private Teams</h3>
            </div>
          <div>
          </div>
          <p className="">Use our calenders to create a team workspace or private one.</p>

          </div>

        </AccordionContent>
    
      </AccordionItem>
    </Accordion>
  );
};

export default WorkSpaceAccordians;

export const TrackingAccordian = (onClose: {onClose: any}) => {
    return (
        <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="pb-3 font-light cursor-pointer text-[18px] border-b-[1px] border-slate-400 transition duration-300 sm:mr-0 sm:hover:bg-slate-200">
                Tracking
          </AccordionTrigger>
          <AccordionContent className="flex">
            <div className="flex w-[600px] flex-col space-y-3">
              <div className="flex flex-row gap-2">
                  <Dumbbell size={23} color="lightblue"/>
                  <h3 className="text-[16px] font-semibold">
                    Logging
                  </h3>
              </div>
              <div className="pb-2">
              <p>Log your workouts for different calender days, add them to your personal calender</p>
              </div>
            </div>
  
          </AccordionContent>
          <AccordionContent className="flex flex-row" >
            <div className="flex flex-row gap-2">
                  <LineChart  size={23} color="red"/>
                  <h3 className="text-[16px] font-semibold">Progressive Overload</h3>
              </div>
           
            <div className="py-3">
              <p>Log your workouts for different calender days, add them to your personal calender</p>
              </div>
  
        
  
          </AccordionContent>
          <AccordionContent className="flex flex-row" >
          <div className="flex w-[600px] flex-col space-y-3">
            <div className="flex flex-row gap-2">
            <BarChart4 size={23} color="gray"/>
                  <h3 className="text-[16px] font-semibold">Consistency/Intensity Feedback</h3>
              </div>
            <div>
            </div>
            <div className="py-3">
              <p>Log your workouts for different calender days, add them to your personal calender</p>
              </div>  
            </div>
  
          </AccordionContent>
      
        </AccordionItem>
      </Accordion>
    )
}